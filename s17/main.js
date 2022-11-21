
function getAverage(paramsArray) {
    return (paramsArray.reduce(
        function getSum(total, element) {
            return total += element;
        }
    ) / paramsArray.length);
}

function getAverageForLoop(paramsArray) {
    let sum = 0;
    for (let index = 0; index < paramsArray.length; index++) {
        const num = paramsArray[index];
        sum += num;
    }

    return sum / paramsArray.length;
}


let numeric = [5, 11, 30, 118, 634];
console.log('Using getAverage() : ');
console.log(getAverage(numeric));

console.log('Using getAverageForLoop() : ');
console.log(getAverageForLoop(numeric));