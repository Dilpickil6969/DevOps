const min = 1
const max = 100;
let Antwoord = Math.floor(Math.random() * max);
let attempts = 0;

function myOk() {
  let guess = document.getElementById("guess").value;

  var HogerOfLager = document.getElementById("HogerOfLager")
  var user_awnser = document.createElement("div")
  if (guess < min || guess > max) {
    window.alert("Dit is geen nummer tussen de honderd");
  } else {
    attempts++;
    if (guess > Antwoord) {
      user_awnser.innerHTML = guess + " is te hoog"
      HogerOfLager.appendChild(user_awnser)
    } else if (guess < Antwoord) {
      user_awnser.innerHTML = guess + " is te laag"
      HogerOfLager.appendChild(user_awnser)
    } else {
      user_awnser.innerHTML = guess + " is helemaal goed"
      HogerOfLager.appendChild(user_awnser)
    }
  }
}
function myReset() {
  attempts = 0;
  Antwoord = Math.floor(Math.random() * max);
  document.getElementById("HogerOfLager").innerHTML = "";
  document.getElementById("guess").value = "";
}
