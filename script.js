const container = document.getElementById("container");
const rows = document.getElementsByClassName("containerRow");

function drawRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let rowDiv = document.createElement("div");
        container.appendChild(rowDiv).className = "containerRow";
    }
}

function drawColumns (colNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < colNum; j++) {
            let colCell = document.createElement("div");
            rows[j].appendChild(colCell).className = "square";
        }
    }
}

function drawGrid() {
    drawRows(16);
    drawColumns(16);
}
drawGrid();