let userGuess = Number(prompt("Please guess one number"));
let keptNumber = Math.floor(Math.random() * 100);

while (userGuess !== keptNumber) {
  if (!userGuess) {
    alert("Please check cour guess");
  } else if (userGuess > keptNumber) {
    alert("Decrease your number");
    userGuess = Number(prompt("Please guess one number"));
  } else if (userGuess < keptNumber) {
    alert("Increase your number");
    userGuess = Number(prompt("Please guess one number"));
  }
}

if (userGuess == keptNumber) {
  alert("Well Done");
}
