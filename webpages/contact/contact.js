document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-row").addEventListener("click", function(event) {
        event.preventDefault();

        alert("Thank you for leaving a comment/suggestion!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("comments").value = "";
    });
});

const box = document.querySelector(".crop-box");
const img = document.querySelector(".map-img");
let isDragging = false;
let startX, startY, startLeft, startTop;

img.addEventListener("mousedown", (e) => {
    isDragging = true;
    img.style.cursor = "grabbing";

    startX = e.clientX;
    startY = e.clientY;

    startLeft = parseInt(img.style.left || 0);
    startTop = parseInt(img.style.top || 0);
});


document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let dx = e.clientX - startX;
    let dy = e.clientY - startY;

    let newLeft = startLeft + dx;
    let newTop = startTop + dy;

    // LIMITS
    const maxLeft = 0;
    const maxTop = 0;

    const minLeft = box.clientWidth - img.clientWidth;
    const minTop = box.clientHeight - img.clientHeight;

    // Apply limits
    if (newLeft > maxLeft) newLeft = maxLeft;
    if (newLeft < minLeft) newLeft = minLeft;

    if (newTop > maxTop) newTop = maxTop;
    if (newTop < minTop) newTop = minTop;

    img.style.left = newLeft + "px";
    img.style.top = newTop + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    img.style.cursor = "grab";
});