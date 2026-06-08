container = document.querySelector(".container");

function makeGrid() {

    container.style.paddingLeft = "638.4px";
    container.style.paddingRight = "638.4px";
    for (let i = 0; i < 256; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv")
        squareDiv.style.border = "2px solid black";
        squareDiv.style.width = "15.2px";
        squareDiv.style.height = "15.2px";
        container.appendChild(squareDiv);
    }

}

makeGrid()

let sqaureDivs = document.querySelectorAll(".squareDiv")

sqaureDivs.forEach(function (item) {
    item.addEventListener("mouseenter", () => item.style.backgroundColor = "black")
})

let sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", getSize)


function getSize() {
    let noOfSquareDivsPerSide = +prompt("Enter the no of squares you want per side of the grid:");
    console.log(typeof noOfSquareDivsPerSide);
    if (noOfSquareDivsPerSide <= 100) {
        removeExistingGrid();
        makeNewGrid(noOfSquareDivsPerSide);
    } else alert("The maximum limit is 100 squares per side of the grid.")
}

function removeExistingGrid() {
    let sqaureDivs = document.querySelectorAll(".squareDiv")

    sqaureDivs.forEach(function (item) {
        container.removeChild(item);
    })
}

function makeNewGrid(noOfSquareDivsPerSide) {
    let totalNumberOfSqaureDivs = noOfSquareDivsPerSide * noOfSquareDivsPerSide;
    let totalWidthOfGrid = noOfSquareDivsPerSide * 15.2;
    // Total width of the parent container is 1000px and remainingSpaceWithingContainerOnLeftandRight essentially is the padding for left and right of the parent container which helps in breaking square divs on the next row.
    let remainingSpaceWithingContainerOnLeftandRight = (1520 - totalWidthOfGrid) / 2;
    container.style.paddingLeft = `${remainingSpaceWithingContainerOnLeftandRight}px`;
    container.style.paddingRight = `${remainingSpaceWithingContainerOnLeftandRight}px`;

    for (let i = 0; i < totalNumberOfSqaureDivs; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv")
        squareDiv.style.border = "2px solid black";
        squareDiv.style.width = "15.2px";
        squareDiv.style.height = "15.2px";
        container.appendChild(squareDiv);
    }

    let sqaureDivs = document.querySelectorAll(".squareDiv")

    sqaureDivs.forEach(function (item) {
        item.addEventListener("mouseenter", () => item.style.backgroundColor = "black")
    })
}