container = document.querySelector(".container");

function makeDefaultGrid() {

    for (let i = 0; i < 256; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv")
        squareDiv.style.border = "1px solid black";
        squareDiv.style.width = "33.125px";
        squareDiv.style.height = "33.125px";
        container.appendChild(squareDiv);
    }

}

makeDefaultGrid()

let squareDivs = document.querySelectorAll(".squareDiv");

squareDivs.forEach(function (squareDiv) {
    squareDiv.addEventListener("mouseenter", function randomizeBackgroundColorOfSqaureDivs() {
        let colors = ["#EE82EE", "#4B0082", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#FF0000", "#00FFFF", "#FF00FF", "#FFC0CB", "#A52A2A", "#808080"];
        let randomIndex = getRandomNumber(0, 11);
        let randomColor = colors[randomIndex];
        squareDiv.style.backgroundColor = randomColor;
    });
})



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", getSize)

function getSize() {
    let noOfSquareDivsPerSide = +prompt("Enter the no of squares you want per side of the grid:");
    console.log(typeof noOfSquareDivsPerSide);

    if (noOfSquareDivsPerSide <= 0) {
        alert("Enter number greater than 0");
    }

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

    for (let i = 0; i < (noOfSquareDivsPerSide * noOfSquareDivsPerSide); i++) {
        let sizeOfEachSquareDiv = 530 / noOfSquareDivsPerSide;
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv")
        squareDiv.style.border = "1px solid black";
        squareDiv.style.width = `${sizeOfEachSquareDiv}px`;
        squareDiv.style.height = `${sizeOfEachSquareDiv}px`;
        container.appendChild(squareDiv);
    }
    let sqaureDivs = document.querySelectorAll(".squareDiv")

    sqaureDivs.forEach(function (squareDiv) {
        squareDiv.addEventListener("mouseenter", function randomizeBackgroundColorOfSqaureDivs() {
            let colors = ["#EE82EE", "#4B0082", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#FF0000", "#00FFFF", "#FF00FF", "#FFC0CB", "#A52A2A", "#808080"];
            let randomIndex = getRandomNumber(0, 11);
            let randomColor = colors[randomIndex];
            squareDiv.style.backgroundColor = randomColor;
        })
    })
}