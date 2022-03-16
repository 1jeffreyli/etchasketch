const container = document.querySelector("#container");

function draw(size) {
    for (let i = 0; i < size; i++) {
        const row = container.appendChild(document.createElement("div"));
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.className = "square";
            row.appendChild(cell);
        }
    }
}

draw(16);