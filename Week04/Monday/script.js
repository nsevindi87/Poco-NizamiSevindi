//Exercise 01
/*
let yourname = prompt("Please write your name!");
const printName = document.getElementById("printName")

if(yourname){
    console.log(`Hello ${yourname}`)
    alert(`Nice to meet ${yourname}`)
}else{
    console.log("Please enter your name")
    alert(`Please enter your name`)
}*/

//Exercise 02
/*
let inputString = prompt("Please write your string");
let numberOfString = inputString.length;
if(numberOfString){
    alert(`Length of your string: ${numberOfString}`);
}else{
    alert("Please enter your string")
}
*/


//Exercise 03
/*
let author = prompt("Please enter name of Author");
let quoto = prompt("Please enter quote");

if(author && quoto){
    alert(`${author} says, ${quoto}`)
}else if(!author && !quoto){
    alert("Please enter author and quote")
}else if(!quoto){
    alert("Please enter quoto")
}else{
    alert("Please enter name of Author")
}
*/

//Exercise 04
/*
let job = prompt("Please enter a job");
let locationName = prompt("Please enter a location");
let partnerName = prompt("Please enter name of your partner");
let numOfChildren = prompt("Please enter number of children");

if(job && locationName && partnerName && numOfChildren){
    alert(`You will be a ${job} in ${locationName}, and married to ${partnerName} with ${numOfChildren} kids.`)
}else{
    alert("Please fill out the form correctly")
}
*/

//Exercise 05
/*
let birthYear = prompt("Please write your birth of year");
let futureYear = prompt("Please write future year");

if(birthYear & futureYear){
    alert(`I will be either ${futureYear - birthYear} or ${futureYear - birthYear -1} in ${futureYear}`)
}else{
    alert("Please fill out the form correctly")
}
*/

//Exercise 06
/*
const avAge = 83

let birthYear = Number(prompt("Please write your birth of year"));
let birthMonth = Number(prompt("Please write your birth of month"));

let futureYear = Number(prompt("Please write future year"));
let futureMonth = Number(prompt("Please write future month"));

let ageBasic = futureYear-birthYear
let birthMonthIsNotValid = 0 > birthMonth || birthMonth > 12;
let futurebirthMouthIsNotValid = 0 > futureMonth || futureMonth > 12;
let birthYearCompare = futureYear < birthYear ;
let lengthOfYear = birthYear.toString().length !== 4 || futureYear.toString().length !== 4;

if(!birthYear || !birthMonth || !futureMonth || !futureYear){
    alert("Please fill out your form correctly")
}else if(birthMonthIsNotValid || futurebirthMouthIsNotValid || birthYearCompare || lengthOfYear){
         alert("Please check your values")
}else{
    if(birthMonth>futureMonth || birthMonth == futureMonth){
        alert(`Your age ${ageBasic -1 } and I hope you will live ${avAge - ageBasic + 1} years more! `)
    }else(
        alert(`Your age ${ageBasic} and I hope you will live ${avAge - ageBasic} years more! `)
    )
}
*/


const buttonEl = document.getElementById("button");
const result = document.getElementById("result");

buttonEl.addEventListener("click", (e)=>{
e.preventDefault();

const birthday = new Date(document.getElementById("birthDate").value);
const futureDay = new Date(document.getElementById("calculateDate").value);

const dayDifference = (futureDay - birthday) / (1000 * 60 * 60 * 24)

let year = Math.floor(dayDifference / 365)
let remainDays = dayDifference % 365;
let month = Math.floor(remainDays/30)
let remainDays2 = remainDays % 30

if( !remainDays2){
    result.textContent = "Please enter date"
}else{
    result.textContent = `You lived ${dayDifference} days so far! It means ${year} year/s ${month} month/s and ${remainDays2} day/s`;
}
})

button