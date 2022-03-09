// select the div with the class name grid
const grid = document.querySelector(".grid");

// create a function that adds the cell CSS class to the element and appends to the grid
function addCell () {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}

// create a function that loops through 16x16 times calling addClass
function draw() {
    for (let i = 0; i < 256; i++) {
        addCell();
    }
}

draw();

// define a hover effect variable
let hover = ".cell:hover{ background-color: blue }";

// create a function that adds the :hover effect
function addHover () {
    const hoverCell = document.createElement("div");
    hoverCell.classList.add("cell");
    hoverCell.style.cssText = hover;
    grid.appendChild(hoverCell);
}

// add event listener for when the mouse hovers over the div using onmouseenter

// remove event listener when the mouse leaves the div using onmouseleave

// to do 3/10/22
// check if :hover effect works
// check which element to target for the eventListener to, grid or cell div