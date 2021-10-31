import { renderItemsDOM, calculateTotal, getInputValues, clearInputs, choosenCamera } from "modules.js";
import { validateEdit, validateCreate } from "validation.js";
import { getAllCameras, postCamera, deleteCamera, updateCamera } from "./api.js";

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

const inputProduct = document.getElementById("create-name-input");
const inputmemory = document.getElementById("create-memory-input");
const inputzoom = document.getElementById("create-zoom-input");

const inputEditProduct = document.getElementById("edit-name-input");
const inputEditmemory = document.getElementById("edit-memory-input");
const inputEditzoom = document.getElementById("edit-zoom-input");

let cameras = [];
let camerasSorted = [];

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let camerasFound = cameras.filter(
        (camera) => camera.product.search(searchInput.value) !== -1);
    renderItemsDOM(camerasFound);
});

sortCheckbox.addEventListener("click", () => {
    let camerasSorted = Array.from(cameras);
    if (sortCheckbox.checked) {
        camerasSorted.sort(
            (first, second) => first.memory - second.memory
        );
    }
    renderItemsDOM(camerasSorted);
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

modalDeleteCloseButton.addEventListener("click", () => {
    modalDeleteWindow.style.display = "none";
})

createWindowButton.addEventListener("click", async () => {
    event.preventDefault();
    if (validateCreate()) {
        postCamera(getInputValues(inputProduct, inputmemory, inputzoom, "dropdown"))
            .then(refetchAllCameras);
        clearInputs(inputProduct, inputmemory, inputzoom);
    }

    editWindowButton.addEventListener("click", () => {
        event.preventDefault();
        if (validateEdit()) {
            updateCamera(choosenCamera, getInputValues(inputEditProduct,
                inputEditmemory, inputEditzoom, "edit-dropdown"))
                .then(refetchAllShips);
        }
    })

    deleteWindowButton.addEventListener("click", () => {
        event.preventDefault();
        deleteCamera(choosenCamera).then(refetchAllCameras);
        modalDeleteWindow.style.display = "none";
    })

    $('#dropdown').ddslick({
        onSelected: function (selectedData) {
        }
    });

    $('#edit-dropdown').ddslick({
        onSelected: function (selectedData) {
        }
    });

    export const refetchAllShips = async () => {
        const allcamera = await getAllCameras();
        cameras = allCameras;
        renderItemsDOM(cameras);
    };

    cameras = await getAllCameras();
    renderItemsDOM(cameras);

    export default cameras;
    export {cardDeck, cameras}
})