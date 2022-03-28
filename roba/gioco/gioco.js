var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");


ctx.beginPath();
ctx.font = "20px Arial";
myCanvas.style.backgroundColor = "red";
ctx.fillText("Clicca play per iniziare", 200, 280);
ctx.closePath();

function play() {
    myCanvas.style.backgroundColor = "white";
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    setInterval(gioco, 100);
}

function gioco() {

}

function download() {
    const img = document.getElementById("img");
    img.download = 'canvas.png';
    img.href = myCanvas.toDataURL('image/png', 1);
    img.click();
}