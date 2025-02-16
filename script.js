const gif = document.getElementById("gif");
const gifSrc = gif.src; // Store the original GIF src

gif.addEventListener("mouseover", () => {
    gif.src = gifSrc; // Restart the GIF on hover
});

gif.addEventListener("mouseout", () => {
    gif.src = ""; // Remove GIF source to "pause"
    setTimeout(() => {
        gif.src = gifSrc; // Restore GIF source after a delay
    }, 10);
});