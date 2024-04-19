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
