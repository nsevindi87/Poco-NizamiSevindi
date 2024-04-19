//Example01
const result = document.getElementById("result");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userNumber").value;
  let sortedNumber = sortedNumberFunc(userInput);
  result.innerHTML = sortedNumber;
});

function sortedNumberFunc(pStr) {
  let result = pStr.split("").sort().join();
  return result;
}

//Example 02
//DOM REACH
const result02 = document.getElementById("result02");
const form02 = document.getElementById("form02");
let sum = 0;

//SUBMIT EVENT
form02.addEventListener("submit", function (e) {
  const userInput2 = parseInt(document.getElementById("userNumber02").value);
  let sumValue = handleSum(userInput2);
  result02.textContent = sumValue;
});

//ADD LOGIc
function handleSum(pNum) {
  return (sum += pNum);
}

//EXAMPLE03
