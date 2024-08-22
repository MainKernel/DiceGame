// Generate random number for the first dice
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png"
);


// Generate random number for the second dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png"
);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 win!!!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win!!! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}