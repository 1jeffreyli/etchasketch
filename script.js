const container = document.querySelector("#container");
const squares = document.getElementsByClassName("square");

let changeColor = function () {
    squares.style.backgroundColor = "red";
}

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
    container.addEventListener("onmouseover", changeColor);
}

// create a function that adds a new class to the div within draw() and adds the event listener
// nest it within draw?

// // a function that changes the background color of a div
// let changeColor = function() {
//     // forEach(squares)
//     let newSquare = this.style.backgroundColor = "red";
//     container.replaceChild(newSquare);
// }

// container.addEventListener("onmouseover", changeColor);

draw(16);