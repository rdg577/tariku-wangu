function isNumeric(params) {
  return !isNaN(parseFloat(params)) && isFinite(params);
}

function isEven(params) {
  if (params % 2 == 0) return true;
  return false;
}

function main() {
  let inputData = prompt("Please enter a number");

  let msg = "";

  if (inputData.length === 0) {
    msg = ("Please input a data");
  } else if (isNumeric(inputData) == true) {
    if (isEven(inputData)) {
        msg = (inputData + " <- is a EVEN number");
    } else {
        msg = (inputData + " <- is a ODD number");
    }

    if(inputData > 0)
        msg += " and it is a POSITIVE";
    else if(inputData < 0)
        msg += " and it is a NEGATIVE"
    else
        msg += ", it is a ZERO";
  } else {
    msg = ("Whoa, unexpected input.");
  }

  var nodeInput = document.getElementById("input-area");
  nodeInput.innerHTML = (`<p>Input Data is ${inputData}</p>`);

  var nodeOutput = document.getElementById("output-area");
  nodeOutput.innerHTML = (`<p>Output message : ${msg}</p>`);
}

// main();

function spellingBeh(params) {
    if(typeof(params) !== "string") 
        return console.log("Data is not a string");

    console.log("My name is " + params);
    for (let index = 0; index < params.length; index++) {
        console.log("Spells " + params.charAt(index));
        
    }
}

const names = ["Rodrigo", "Inday", "Baste", 69];

names.forEach(element => {
    spellingBeh(element);
});