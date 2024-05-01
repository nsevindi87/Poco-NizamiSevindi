let number01 = Number(prompt("Please write your firsth number"));
let number02 = Number(prompt("Please write your second number"));

if (!number01 || !number02) {
  alert("Please write a number");
} else if (number01 == number02) {
  alert("Your numbers are equal");
} else if (number01 > number02) {
  alert(`The greater number of ${number01} and ${number02} is ${number01}. `);
} else {
  alert(`The greater number of ${number01} and ${number02} is ${number02}. `);
}
