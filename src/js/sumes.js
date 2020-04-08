let firstNumber = Math.floor((Math.random() * 99) + 1);
let secondNumber = Math.floor((Math.random() * 99) + 1);
let acerts = 0;
let fallos = 0;
function getSuma() {
    document.getElementById("operation-container").innerText = firstNumber + ' + ' + secondNumber + ' = ';

}

function checkSuma() {

    var inputResult = parseInt(document.getElementById("result").value);
    console.log(inputResult);
    var realResult = firstNumber +  secondNumber;
    if (realResult === inputResult) {
        acerts++;
        let innerHtml = document.getElementById('results-containers').innerHTML;
        document.getElementById('results-containers').innerHTML = innerHtml + "<img class='result-image' src='../assets/tick.webp'>"

    } else {
        fallos++;
        let innerHtml = document.getElementById('results-containers').innerHTML;
        document.getElementById('results-containers').innerHTML = innerHtml + "<img class='result-image' src='../assets/error.webp'>"

    }
    if ((acerts + fallos) < 5) {
        document.getElementById("result").value = "";
        newSuma();
    } else {
        document.getElementById("submit-button").disabled = true
        document.getElementById("finish-container").style.display = "flex";
        document.getElementById("finish-container").style.justifyContent = "center";
    }
}

function newSuma() {
    firstNumber = Math.floor((Math.random() * 99) + 1);
    secondNumber = Math.floor((Math.random() * 99) + 1);
    document.getElementById("operation-container").innerText = firstNumber + ' + ' + secondNumber + ' = ';
    console.log(firstNumber + secondNumber);
}