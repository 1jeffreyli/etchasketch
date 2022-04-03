const container = document.getElementById("container");

// a function that draws a grid with two inputs, rows and columns desired
function draw(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = "cell";
    }
    // makeBlue();
    randomColor();
}

draw(16, 16);


// a function that turns the element being hovered over a random color
function randomColor () {
    let items = document.querySelectorAll(".cell");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        });
    });
}

// a function that turns the element being hovered on blue
// function makeBlue () {
//     let items = document.querySelectorAll(".cell");
//     items.forEach(item => {
//         item.addEventListener("mouseover", () => {
//             item.style.backgroundColor = "blue";
//         });
//     });
// }

const button = document.getElementById("reset");

// remove the contents of the grid
function clearGrid() {
    container.innerHTML = "";
}

// a function that clears the grid and asks for new dimensions
let newGrid = function () {
    clearGrid();
    let newSize = prompt("How many squares do you want?");
    if (newSize > 100 || newSize < 1) {
        let wrongSize = prompt("Please enter a number between 1 and 100.");
        if (1 <= wrongSize <= 100) {
            draw(wrongSize, wrongSize);
        } else {
            wrongSize;
        }
    } else {
        draw(newSize, newSize);
    }
}

button.addEventListener("click", newGrid);