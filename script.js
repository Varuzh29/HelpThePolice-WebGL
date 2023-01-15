// Select the die image and roll button elements
var dieImage = document.getElementById("die");
var rollButton = document.getElementById("roll-button");

// Add an event listener to the roll button to call the rollDie function when clicked
rollButton.addEventListener("click", rollDie);

function rollDie() {
  // Generate a random number between 1 and 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // Update the die image source to display the corresponding image file
  dieImage.src = "die-" + randomNumber + ".png";
}
