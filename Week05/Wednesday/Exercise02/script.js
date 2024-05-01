let userAge = Number(prompt("Please write your age..."));
let retirementAge = Number(prompt("At what age do you want to retire?"));

if (!userAge || !retirementAge || userAge > retirementAge) {
  alert("please control your inputs");
} else {
  let calculatedAge = retirementAge - userAge;
  let actualYear = new Date().getFullYear();
  let retirementYear = actualYear + calculatedAge;
  alert(`It's ${actualYear}, so you can retire in ${retirementYear}.`);
}
