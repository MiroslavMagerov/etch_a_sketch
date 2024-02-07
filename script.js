function init() {
    const SQUARE_SIZE = 30;
    const GENERAL_DIV = document.querySelector("#general-div");

    createGrid(SQUARE_SIZE, GENERAL_DIV);
}

function createGrid(size, container) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let GRID_DIV = document.createElement("div");
            GRID_DIV.classList.add("grid-div");
            GRID_DIV.style.width = `calc(100%/${size})`;
            GRID_DIV.style.height = `calc(100%/${size})`;
            container.append(GRID_DIV);
        }
    }
}