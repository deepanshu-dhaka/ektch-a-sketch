let container = document.querySelector(".container");

// for (let x = 0; x < 5; x++) {
//     document.querySelector(".container").appendChild(squareDiv.cloneNode(true));
// }

for (let x = 0; x < 256; x++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("squareDiv")
    squareDiv.style.width = "20px";
    squareDiv.style.height = "20px";
    squareDiv.style.border = "2px solid black"
    container.appendChild(squareDiv);
}