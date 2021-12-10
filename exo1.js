// En Javascript, écrire une fonction “maxEtMin()”telle que :

// 1 string constitué de chiffres séparés par des espaces en entrée
// renvoie un string contenant le nombre le plus haut ainsi que le plus bas
// Exemple

// maxEtMin("1 2 3 4 5"); // return "5 1"
// maxEtMin("1 2 -3 4 5"); // return "5 -3"
// maxEtMin("1 9 3 4 -5"); // return "9 -5"

// function to calculate the max and min of a string of numbers
// return [max, min]
function maxEtMin(array) {
    var max = Math.max(...array);
    var min = Math.min(...array);
    return [max, min];
}

// when the input value is updated I want to get its value
for(let inputNumber = 1; inputNumber <= 5; inputNumber++) {
    document.getElementById("input" + inputNumber).addEventListener("input", getInputsAndReturnMaxAndMin);
}

// get the inputs and display the max and min
function getInputsAndReturnMaxAndMin() {
    var inputValues = [];
    for(let inputNumber = 1; inputNumber <= 5; inputNumber++) {
        inputValues.push(document.getElementById("input" + inputNumber).value);
    }
    var result = maxEtMin(inputValues);
    // display the result in the div with id result
    document.getElementById("result").innerHTML = "Le nombre le plus grand est " + result[0] + " et le plus petit est " + result[1];
}