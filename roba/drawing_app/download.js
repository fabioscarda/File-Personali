function download() {
    const img = document.getElementById("img");
    img.download = 'canvas.png';
    img.href = canvas.toDataURL('image/png', 1);
    img.click();
}