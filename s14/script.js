// function validateHeight(_cmHeight) {
    
//     if(_cmHeight < 150) {
//         alert("Did not pass the minimum height requirement");
//     } else if(_cmHeight > 150) {
//         alert("Pass the minimum height requirement");
//     } else if(_cmHeight == 150) {
//         alert("Just right on the spot! You pass the minimum height requirement.");
//     } else if(_cmHeight == NaN) {
//         alert("Invalid height! It is not a number.");
//     }

// }

// let cmHeight = parseFloat(prompt("Enter height in centimeter (cm):"));

// console.log(cmHeight);

// validateHeight(cmHeight);

// ******************************************
function windGauge(_speed) {
    let description = "";

    if(_speed <= 30) 
        description = "Not a typhoon";
    else if(_speed <= 60)
        description = "Tropical depression";
    else if(_speed >= 61 && _speed <= 88)
        description = "Tropical storm";
    else if(_speed >= 89 && _speed <= 117)
        description = "Severe tropical depression";
    else
        description = "Typhoon";

    return description;
}

let windSpeed = 120;
console.log(windGauge(windSpeed));