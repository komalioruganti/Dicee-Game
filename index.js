var randomNumber1 = (Math.floor(Math.random()*6)) +1;
var RandomDiceImage1 = "images/dice" + randomNumber1 + ".png" ;
var randomNumber2 = (Math.floor(Math.random()*6)) +1;
var RandomDiceImage2 = "images/dice" + randomNumber2 + ".png" ;
document.querySelector(".img1").setAttribute("src",RandomDiceImage1);
document.querySelector(".img2").setAttribute("src",RandomDiceImage2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Wins";
}
else{
  document.querySelector("h1").textContent="Player 2 Wins";
}
