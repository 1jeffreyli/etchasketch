const container = document.getElementById("container");

function drawRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className.add("cell");
        container.appendChild(rowDiv);
    }
}