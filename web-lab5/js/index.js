import { deleteCamera, getAllCamera, postCamera, updateCamera } from "./api.js";
import {
    getInputValues,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    clearInputs
} from "./dom_util.js";


const formField = document.getElementById("item_form");
const submitButton = document.getElementById("submit_button");


const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let camera = [];

const onEditItem = async (e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateCamera(itemId, getInputValues());

    clearInputs();

    refetchAllCameras();
};

const onDeleteItem = async(event) => {
    const cameraId = event.target.id.replace(DELETE_BUTTON_PREFIX, "")
    await     deleteCamera(cameraId);

    refetchAllCameras();
}



export const refetchAllCameras = async () => {
    const allCameras = await getAllCamera();
    
    camera = allCameras.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(camera, onEditItem, onDeleteItem);
    
};

const validateInput = () => { 
var letters = /^[A-Za-z]+$/;
if(formField.length.match(letters))
{
return true;
}
else
{
alert('');
formField.focus();
return false;
}
}
submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!validateInput()) {
        return;
    };

    const {  name, memory, zoom } = getInputValues();

    clearInputs();

    postCamera({
        name, 
        memory,
        zoom
    }).then(refetchAllCameras);
});

searchButton.addEventListener("click", () => {
    const foundCameras = camera.filter(
        (cameras) => cameras.name.search(searchInput.value) !== -1
        );

    renderItemsList(foundameras, onEditItem, onDeleteItem);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(camera, onEditItem, onDeleteItem);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedCameras = camera.sort(
            (a, b) => parseInt(a.zoom) - parseInt(b.zoom));
        
        renderItemsList(sortedCameras, onEditItem, onDeleteItem);
    } else {
        refetchAllCameras();
    }
});

countButton.addEventListener("click", () => {
    let sum = camera.map(o => o.zoom).reduce((a, c) => { return a + c });
    document.getElementById("total-zoom").innerText = sum;
    console.log(sum);
});

refetchAllCameras();
