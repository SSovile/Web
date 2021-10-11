//

const titleInput = document.getElementById("title_input");
const memoryInput = document.getElementById("memory_input");
const zoomInput = document.getElementById("zoom_input")
const itemsContainer = document.getElementById("items_container");
const itemMemory = document.getElementsByClassName("card-paragraph_1");
const itemZoom = document.getElementsByClassName("card-paragraph_2");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, title, memory, zoom }) => `
    <li id="${getItemId(id)}" class="item-card">
        <img
        src="https://cdn.mos.cms.futurecdn.net/dwARcm7CKx9zxxqknAatYi.jpg"
        class="card-img"
        width="375"
        alt="card image"
        />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-memory">${memory}</p>
            <p class="card-zoom">${zoom}</p> 
        </div>
    </li>
`

export const clearInputs = () => {
    titleInput.value = "";
    memoryInput.value = "";
    zoomInput.values = "";
};

export const addItemToPage = ({ id, title, memory, zoom}) => {
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({ id, title, memory, zoom })
    );

};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    
    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        memory: memoryInput.value,
        zoom: zoomInput.value,
    };
};
