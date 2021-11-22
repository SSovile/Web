import { cardDeck, cameras } from "./index.js";
import { validateEdit } from "./validation.js";

const cardTemplate = ({ id, product, memory, zoom, image }) => `
<div id="${id}" class="card">
<img class="card-img-top" src="../assets/${image}" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">${product}</h5>
<p class="card-text">Memory: ${memory}MB</p>
<p class="card-text">Zoom: ${zoom} x</p>
</div>
<small class="text-muted">
<button id="edit-button-${id}" class="edit-button btn btn-outline-info px-4 py-0">Edit</button>
<button id="delete-button-${id}" class="delete-button btn btn-outline-danger px-3 py-0">Delete</button>
</small>
</div>
`;

const modalEditWindow = document.getElementById("edit-window");
const inputEditName = document.getElementById("edit-name-input");
const inputEditmemory = document.getElementById("edit-memory-input");
const inputEditzoom = document.getElementById("edit-zoom-input");

let allcamera = 0;

const addItemToPage = ({ id, product, memory, zoom, image }) => {
    cardDeck.insertAdjacentHTML(
        "afterbegin",
        cardTemplate({ id, product, memory, zoom, image })
    );
};

const renderItemsDOM = (array) => {
    cardDeck.innerHTML = "";
    for (const item of array) {
        addItemToPage(item);
    }
    renderEditButtons();
};

const calculateTotal = (array, key) => {
    const total = array.reduce((acc, item) => acc + key(item), 0);
    return total;
}

const getInputValues = (dropdown, name, memory, zoom, dropdownId) => {
    var newCardImage = "camera.jpg";
    return {
        id: 0,
        product: name.value,
        memory: parseInt(memory.value),
        zoom: parseInt(zoom.value),
        image: newCardImage,
    }
}

const clearInputs = (name, memory, zoom) => {
    name.value = "";
    memory.value = "";
    zoom.value = "";
}

const renderEditButtons = () => {
    for (let camera of cameras) {
        let editButton = document.getElementById(`edit-button-${camera.id}`)
        editButton.addEventListener("click", () => {
            modalEditWindow.style.display = "block";
            allcamera = camera.id;
            inputEditName.value = camera.product;
            inputEditzoom.value = camera.zoom;
            inputEditmemory.value = camera.memory;
            validateEdit();
        });
    }
}

export { addItemToPage, renderItemsDOM, calculateTotal, getInputValues, clearInputs, allcamera };