const container = document.querySelector("#container");

// a function that takes a size parameter and draws axa size grid by creating the row
// then fills the rows with x columns
function draw(size) {
    for (let i = 0; i < size; i++) {
        const row = container.appendChild(document.createElement("div"));
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.className = "square";
            row.appendChild(cell);
        }
    }
    // call makeRed so that the eventListener is added to each .square div
    makeRed();
}

draw(16);

// a function that changes the background color of the div being hovered over, using 
// the mouseover event, NOT onmouseover
function makeRed () {
    let items = document.querySelectorAll(".square");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "red";
        });
    });
}


const button = document.getElementById("reset");

// a function that clears the current grid
function clear() {
    // let cells = document.querySelectorAll("square");
    // cells.forEach(cell => {
    //     container.removeChild(cell);
    // });
    newGrid;
}
 

// a function that prompts for a size input and creates a new grid
let newGrid = function () {
    let newSize = prompt("How many squares do you want?");
    draw(newSize);
}

// add click eventListener
button.addEventListener("click", newGrid);