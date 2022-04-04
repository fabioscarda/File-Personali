function download(nomeFile) {
    nomeFile = 'canvas.png';
    const img = document.getElementById("img");
    img.download = nomeFile;
    img.href = canvas.toDataURL('image/png', 1);
    img.click();
}

/*const reader = new FileReader();
const img = new Image();*/

const uploadImage = (e) => {
    const reader = new FileReader();
    const img = new Image();
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
};

// 4.
const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", uploadImage);