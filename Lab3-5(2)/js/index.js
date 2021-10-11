import { renderItemsDOM, calculateTotal, getInputValues, clearInputs, allcamera } from "./modules.js";
import { validateEdit, validateCreate } from "./validation.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("checkbox");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");

const createButton = document.getElementById("create-button");
const editWindowButton = document.getElementById("edit-window-button");
const modalWindow = document.getElementById("create-window");
const modalEditWindow = document.getElementById("edit-window");
const modalCloseButton = document.getElementById("modal-close-button");
const createWindowButton = document.getElementById("create-window-button");
const modalEditCloseButton = document.getElementById("modal-edit-close-button");

const photoDropdownSelect = document.getElementById("photo-dropdown");
const inputName = document.getElementById("create-name-input");
const inputmemory = document.getElementById("create-memory-input");
const inputzoom = document.getElementById("create-zoom-input");

const photoEditDropdownSelect = document.getElementById("photo-edit-dropdown");
const inputEditName = document.getElementById("edit-name-input");
const inputEditmemory = document.getElementById("edit-memory-input");
const inputEditzoom = document.getElementById("edit-zoom-input");

let cameras = [
    {
        id: 1,
        product: "Canon",
        memory: parseInt("2400"),
        zoom: parseInt("3"),
        image: "camera.jpg",
    },
];
let uid = 1;

sortCheckbox.addEventListener("click", () => {
    let camerasSorted = Array.from(cameras);
    if (sortCheckbox.checked) {
        camerasSorted.sort(
            (first, second) => first.memory - second.memory
        );
    }
    renderItemsDOM(camerasSorted);
});

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let camerasFound = cameras.filter(
        (camera) => camera.product.search(searchInput.value) !== -1);
    renderItemsDOM(camerasFound);
});

countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(cameras, (camera) => camera.memory);
    countTotal.innerHTML = totalPrice;
});

createButton.addEventListener("click", () => {
    modalWindow.style.display = "block";
})

modalCloseButton.addEventListener("click", () => {
    modalWindow.style.display = "none";
})

modalEditCloseButton.addEventListener("click", () => {
    modalEditWindow.style.display = "none";
})

createWindowButton.addEventListener("click", () => {
    event.preventDefault();
    if (validateCreate()) {
        cameras.push(getInputValues(photoDropdownSelect, inputName, inputmemory, inputzoom, "dropdown"));
        cameras[cameras.length - 1].id = uid++;
        clearInputs(inputName, inputmemory, inputzoom);
        renderItemsDOM(cameras);
    }
})

editWindowButton.addEventListener("click", () => {
    event.preventDefault();
    if (validateEdit()) {
        let id = cameras[allcamera - 1].id;
        cameras[allcamera - 1] = getInputValues(photoEditDropdownSelect, inputEditName, inputEditmemory, inputEditzoom, "edit-dropdown");
        cameras[allcamera - 1].id = id;
        renderItemsDOM(cameras);
    }
})

$('#dropdown').ddslick({
    onSelected: function (selectedData) { }
});

$('#edit-dropdown').ddslick({
    onSelected: function (selectedData) { }
});

renderItemsDOM(cameras);

export default cameras;
export { cardDeck, cameras };
