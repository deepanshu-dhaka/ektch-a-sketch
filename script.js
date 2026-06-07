let container = document.querySelector(".container");

// for (let x = 0; x < 5; x++) {
//     document.querySelector(".container").appendChild(squareDiv.cloneNode(true));
// }

for (let x = 0; x < 256; x++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("squareDiv")
    squareDiv.style.width = "20px";
    squareDiv.style.height = "20px";
    squareDiv.style.outline = "2px solid black"

    container.appendChild(squareDiv);
}

let sqaureDivs = document.querySelectorAll(".squareDiv")

sqaureDivs.forEach(function (item) {
    item.addEventListener("mouseenter", () => item.style.backgroundColor = "black")
})

let sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", getSize)


function getSize() {
    let noOfSquareDivsPerSide = +prompt("Enter the no of squares you want per side of the grid:");
    console.log(typeof noOfSquareDivsPerSide);
    makeSqaureGrid(noOfSquareDivsPerSide);
}

function makeSqaureGrid(noOfSquareDivsPerSide) {
    let totalNoOfSqaureDivs = noOfSquareDivsPerSide * noOfSquareDivsPerSide;
    let containerWidth = noOfSquareDivsPerSide * 20;
    let containerHeight = noOfSquareDivsPerSide * 20;
    container.style.width = `${containerWidth}px`;
    container.style.width = `${containerHeight}px`;
    removeExistingGrid()
    for (let x = 0; x < totalNoOfSqaureDivs; x++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv")
        squareDiv.style.width = "20px";
        squareDiv.style.height = "20px";
        squareDiv.style.outline = "2px solid black"

        container.appendChild(squareDiv);
    }
    let sqaureDivs = document.querySelectorAll(".squareDiv")

    sqaureDivs.forEach(function (item) {
        item.addEventListener("mouseenter", () => item.style.backgroundColor = "black")
    })
}

function removeExistingGrid() {
    let sqaureDivs = document.querySelectorAll(".squareDiv")

    sqaureDivs.forEach(function (item) {
        container.removeChild(item);
    })
}