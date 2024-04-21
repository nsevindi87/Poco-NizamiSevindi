//Example01
const result = document.getElementById("result");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userNumber").value;
  let sortedNumber = sortedNumberFunc(userInput);
  result.textContent = `Your sorted list is: [${sortedNumber}]`;
  document.getElementById("userNumber").value = "";
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
  e.preventDefault();
  const userInput2 = parseInt(document.getElementById("userNumber02").value);
  let sumValue = handleSum(userInput2);
  result02.textContent = sumValue;
  document.getElementById("userNumber02").value = "";
});

//ADD LOGIc
function handleSum(pNum) {
  return (sum += pNum);
}

//EXAMPLE03
const result03 = document.getElementById("result03");
const form03 = document.getElementById("form03");
let res;

form03.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNumber03 = parseInt(document.getElementById("userNumber03").value);
  const userNumber04 = parseInt(document.getElementById("userNumber04").value);
  let result = handleSubstract(userNumber03, userNumber04);
  result03.textContent = result;
  document.getElementById("userNumber03").value = "";
  document.getElementById("userNumber04").value = "";
});

function handleSubstract(pValue1, pValue2) {
  if (pValue1 > pValue2) {
    let res = pValue2 - pValue1;
    return res;
  } else if (pValue2 > pValue1) {
    let res = pValue1 - pValue2;
    return res;
  } else {
    return 0;
  }
}
//EXAMPLE04
const result05 = document.getElementById("result05");
const form05 = document.getElementById("form05");

form05.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNumber05 = parseInt(document.getElementById("userNumber05").value);
  const userNumber06 = parseInt(document.getElementById("userNumber06").value);
  const userFunc = document.getElementById("select").value;
  console.log(typeof userFunc);
  let result = handleFunction(userNumber05, userNumber06, userFunc);
  result05.textContent = result;
});

function handleFunction(pValue1, pValue2, pFunc) {
  switch (pFunc) {
    case "plus":
      pValue1 - pValue2;
      break;
  }
}
