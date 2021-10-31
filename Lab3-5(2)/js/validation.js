const inputEditName = document.getElementById("edit-name-input");
const inputEditNameError = document.getElementById("edit-name-input-error");
const inputEditmemory = document.getElementById("edit-memory-input");
const inputEditmemoryError = document.getElementById("edit-memory-input-error");
const inputEditzoom = document.getElementById("edit-zoom-input");
const inputEditzoomError = document.getElementById("edit-zoom-input-error");

const inputName = document.getElementById("create-name-input");
const inputNameError = document.getElementById("create-name-input-error");
const inputmemory = document.getElementById("create-memory-input");
const inputmemoryError = document.getElementById("create-memory-input-error");
const inputzoom = document.getElementById("create-zoom-input");
const inputzoomError = document.getElementById("create-zoom-input-error");


const validateInputInt = (integer) => {
    if (integer.charAt(0) == "0")
        return 1;
    for (var i = 0; i < integer.length; i++) {
        if (integer.charAt(i) < "0" || integer.charAt(i) > "9") {
            return 0;
        }
    }
    return 2;
}

const validateInputString = (string) => {
    return !invalidSymbols.some((symbol) => string.includes(symbol));
};

const validateEdit = () => {
    let validated = true;
    return validated;
}

const validateCreate = () => {
    let validated = true;
    return validated;
}

export { validateEdit, validateCreate}