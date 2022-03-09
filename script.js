// select the div with the class name grid
const grid = document.querySelector(".grid");

// create a function that adds the cell CSS class to the element and appends to the grid
function addClass () {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}
