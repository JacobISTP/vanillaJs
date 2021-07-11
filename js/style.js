const imgBg = document.querySelector("#images");
const body = document.querySelector("body");

console.dir(imgBg.naturalWidth);
console.dir(body);

if (imgBg.style.width < body.style.width) {
    imgBg.style.width = 100;
    imgBg.style.height = "";
}