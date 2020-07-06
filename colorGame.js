let numSquares = 6;
let colors = []; //generateRandomColors(numSquares);//--> VARIABLE QUE CONTIENE EL ARRAY GENERADO POR LA FUNCION 
let pickedColor;// = pickColor();

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let buttonReset = document.getElementById("buttonReset");
// let easyBtn = document.getElementById("easyBtn");
// let hardBtn = document.getElementById("hardBtn");
let modeBtns = document.querySelectorAll(".mode");

//colorDisplay.textContent = pickedColor;

init();
// /////////BUTTON EASY////////////////////////////
// easyBtn.addEventListener("click", function () {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// /////////BUTTON HARD///////////////////////////////
// hardBtn.addEventListener("click", function () {

//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";  
//     }


// });



////////////RESET BUTTON////////////////////////
buttonReset.addEventListener("click", function () {

    reset();

    // //geterate new colors
    // colors = generateRandomColors(numSquares);
    // //pick random color
    // pickedColor = pickColor();
    // //change colorDisplayto new color
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";
    // //change color of square
    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }

    // h1.style.backgroundColor = "steelblue";
    // messageDisplay.textContent = "";

});



//Change all squares colors to the correct square///////
function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


//Create random number from the RGB array////////////////
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


//GENERA X VALORES EN UN ARRAY MEDIANTE NUM, Y RETORNA VALORES ALEATORIOS A ACADA VALOR, 
//MEDIANTE LA FUNCION RANDOM COLORS 
function generateRandomColors(num) {

    let arr = []

    for (let i = 0; i < num; i++) {

        arr.push(randomColor());
    }

    return arr;

}
//GENERA RGB ALEATORIO PARA CADA VALOR DEL ARRAY
function randomColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

function reset() {

    //geterate new colors
    colors = generateRandomColors(numSquares);
    //pick random color
    pickedColor = pickColor();
    //change colorDisplayto new color
    colorDisplay.textContent = pickedColor;
    buttonReset.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change color of square
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

    h1.style.backgroundColor = "steelblue";

}

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

////////Establece los colores y el evento Click a cada Square/////////////
function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //squares[i].style.backgroundColor = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //compare color to pickedColor
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                buttonReset.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });

    }
}

//////////////EASY AND HARD BUTTONS///////////////////
///Modera la funcion de los 2 botones Hard and Easy
//en vez de tenerlos separados con codigo en cada boton
function setUpModeButtons() {
    for (let i = 0; i < modeBtns.length; i++) {

        modeBtns[i].addEventListener("click", function () {

            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            //Hace la misma funcion que una condicional If
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
        });

    }
}
