// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:
console.log("\n----------------------------");
// Their Code!!!
if (engineIndicatorLight === "green") {
   console.log("> engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("> engines are preparing to start");
} else {
   console.log("> engines are off.");
}

console.log("\n----------------------------");

if (engineIndicatorLight === "green") {
  console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
  console.log("engines are preparing to start");
} else {
  console.log("> engines are off 2.");
}

console.log("\n----------------------------");
// My Code Below!!!
if(engineIndicatorLight = "red blinking" && crewStatus != spaceSuitsOn && shuttleCabinReady ) {
  console.log("> All good.");
} else {
  console.log("> Pull over.")
}

console.log("\n----------------------------");


if(spaceSuitsOn = false) {
  console.log("> Suits off.")
} else {
  console.log("> Suits on.")
}

console.log("\n----------------------------");

if(shuttleSpeed === 15000) {
  console.log("> All good.")
} else if(shuttleSpeed >= 15000) {
  console.log("> Warp speed.")
} else if(shuttleSpeed < 15000) {
  console.log("> We're pulling over.")
}

console.log("\n----------------------------");
