export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';


const nameInput = document.getElementById("name_input");
const memoryInput = document.getElementById("memory_input");
const zoomInput = document.getElementById("zoom_input");

const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id,  name, memory, zoom }) => `
<li id="${getItemId(id)}" class="item-card">
    <img 
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canon.ru%2Fcameras%2Feos-r3%2F&psig=AOvVaw1mm7MzZcwsM-tE_M2tgbk-&ust=1638529263947000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCq4q_7xPQCFQAAAAAdAAAAABAI"
        class="item-container__image" alt="card">
    <div>
        <h5>${name}</h5>
        <p> Memory: - ${memory} </p>
        <p>Zoom:- ${zoom} </p>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">Delete</button>
    </div>
</li>`;

export const addItemToPage = ({id,  name, memory, zoom}, onEditItem, onDeleteItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id,  name, memory, zoom})
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    editButton.addEventListener("click", onEditItem);
    deleteButton.addEventListener("click", onDeleteItem);
};

export const renderItemsList = (items, onEditItem, onDeleteItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onDeleteItem);
    }
};

export const clearInputs = () => {
    nameInput.value = "";
    memoryInput.value = "";
    zoomInput.value = "";
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        memory: memoryInput.value,
        zoom: zoomInput.value,
    };
};
