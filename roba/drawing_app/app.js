const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 700;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let drawing = false;
document.getElementById("black").style.border = "5px solid black";


function changeColor(element) {
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    var yellow = document.getElementById("yellow");
    var black = document.getElementById("black");
    red.style.border = "2px solid white";
    blue.style.border = "2px solid white";
    green.style.border = "2px solid white";
    yellow.style.border = "2px solid white";
    black.style.border = "2px solid white";

    draw_color = element.style.background;
    element.style.border = "5px solid black";
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault();
}

function draw(event) {
    if (drawing) {
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.strokeStyle = draw_color;
        ctx.lineWidth = draw_width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    event.preventDefault();
}

function stop(event) {
    if (drawing) {
        ctx.stroke();
        ctx.closePath();
        drawing = false;
    }
    event.preventDefault();
}

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function colorSelector() {
    var color = document.getElementById("colorSelector");
    draw_color = color.value;

    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    var yellow = document.getElementById("yellow");
    var black = document.getElementById("black");
    red.style.border = "2px solid white";
    blue.style.border = "2px solid white";
    green.style.border = "2px solid white";
    yellow.style.border = "2px solid white";
    black.style.border = "2px solid white";
}

function rangeSelector() {
    var range = document.getElementById("rangeSelector");
    draw_width = range.value;
}

function pen() {
    draw_width = "5";
}

function highlighter() {
    draw_width = "20";
}

function bucket() {
    ctx.fillStyle = draw_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}