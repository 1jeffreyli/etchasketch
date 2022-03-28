const container = document.getElementById("container");

function draw(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = "cell";
    }
    makeRed();
}

draw(16, 16);

function makeRed () {
    let items = document.querySelectorAll(".cell");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "red";
        });
    });
}

const button = document.getElementById("reset");

function clearGrid() {
    container.innerHTML = "";
}

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