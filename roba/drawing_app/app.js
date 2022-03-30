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
colorButton();

var tool = "pen";
var color = "black";
document.getElementById(tool).style.border = "5px solid black";
document.getElementById("eraser").style.border = "2px solid black";


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

    if (tool != "eraser") {
        colorButton();
        draw_color = element.style.background;
        element.style.border = "5px solid black";
        document.getElementById(tool).style.border = "5px solid " + draw_color;
        color = draw_color;
    }

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
    colorButton();
    defaultValue(color);
    draw_width = "5";
    tool = "pen";
    document.getElementById("rangeSelector").value = draw_width;
    document.getElementById("pen").style.border = "5px solid " + draw_color;
    document.getElementById("eraser").style.border = "2px solid black";
}

function highlighter() {
    colorButton();
    defaultValue(color);
    draw_width = "20";
    tool = "highlighter";
    document.getElementById("rangeSelector").value = draw_width;
    document.getElementById("highlighter").style.border = "5px solid " + draw_color;
    document.getElementById("eraser").style.border = "2px solid black";
}

function bucket() {
    colorButton();
    document.getElementById("rangeSelector").value = draw_width;
    if (tool == "eraser") {
        document.getElementById("bucket").style.border = "5px solid black";
        defaultValue(color);
        ctx.fillStyle = draw_color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        document.getElementById("bucket").style.border = "5px solid " + draw_color;
        ctx.fillStyle = draw_color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    tool = "bucket";
    document.getElementById("eraser").style.border = "2px solid black";
}

function eraser() {
    colorButton();
    draw_color = "white";
    document.getElementById("eraser").style.border = "5px solid black";
    tool = "eraser";
}

function colorButton() {
    let pen = document.getElementById("pen");
    let highlighter = document.getElementById("highlighter");
    let bucket = document.getElementById("bucket");
    //let eraser = document.getElementById("eraser");
    pen.style.border = "2px solid black";
    highlighter.style.border = "2px solid black";
    bucket.style.border = "2px solid black";
    //eraser.style.border = "2px solid white";
}

function defaultValue(color) {
    draw_color = color;

}