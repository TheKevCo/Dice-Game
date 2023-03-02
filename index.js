var diceOneRoll = Math.floor((Math.random() * 6));
var diceTwoRoll = Math.floor((Math.random() * 6));
var flags = document.querySelectorAll("#header-area img")
var diceSelections = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]

var diceOne = document.querySelectorAll(".dice-container img")[0];
var diceTwo = document.querySelectorAll(".dice-container img")[1];

diceOne.src = ("./images/" + diceSelections[diceOneRoll])
diceTwo.src = ("./images/" + diceSelections[diceTwoRoll])

if (diceOneRoll>diceTwoRoll) {
    document.querySelector("h1").textContent = "Player One Wins!";
    flags[0].classList.toggle("invisible");
}
else if (diceTwoRoll>diceOneRoll) {
    document.querySelector("h1").textContent = "Player Two Wins!";
    flags[1].classList.toggle("invisible");
}
else {
    document.querySelector("h1").textContent = "Draw!";
    flags[0].classList.toggle("invisible");
    flags[1].classList.toggle("invisible");
}