
function mouseOver(event) {
    event.target.style.backgroundColor = "blue";
}

function mouseDown(event) {
    event.target.style.backgroundColor = "red";
}

function mouseUp(event) {
    event.target.style.backgroundColor = "yellow";
}

function doubleClick(event) {
    event.target.style.backgroundColor = "green";
}

function handleScroll(event) {
    const square = document.getElementById("square");
    square.style.backgroundColor = "orange";
}

document.getElementById("square").addEventListener("mouseover", (e) => mouseOver(e));

document.getElementById("square").addEventListener("mousedown", (e) => mouseDown(e));

document.getElementById("square").addEventListener("mouseup", (e) => mouseUp(e));

document.getElementById("square").addEventListener("mouseup", (e) => mouseUp(e));

document.getElementById("square").addEventListener("dblclick", (e) => doubleClick(e));

document.body.addEventListener("wheel", (e) => handleScroll(e));