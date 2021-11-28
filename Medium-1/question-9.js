let value = Number( prompt('How many runs you scored in this ball')); // input to prompt will be considered as string inorder to display correct value we need to convert it into number
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}