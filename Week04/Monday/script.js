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
}
*/

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

let job = prompt("Please enter a job");
let locationName = prompt("Please enter a location");
let partnerName = prompt("Please enter name of your partner");
let numOfChildren = prompt("Please enter number of children");

if(job && locationName && partnerName && numOfChildren){
    alert(`You will be a ${job} in ${locationName}, and married to ${partnerName} with ${numOfChildren} kids.`)
}else{
    alert("Please fill out the form correctly")
}