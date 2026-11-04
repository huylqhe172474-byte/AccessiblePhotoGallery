
function upDate(previewPic) {
    console.log("Mouse or keyboard focus is on an image!");

    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.textContent = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse left the image or keyboard focus was lost!");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.textContent = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Page loaded. Adding tabindex to gallery figures.");

    let figures = document.querySelectorAll(".gallery figure");

    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
}
