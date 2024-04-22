let yourname = prompt("Please write your name!");
const printName = document.getElementById("printName")

if(yourname){
    console.log(`Hello ${yourname}`)
    alert(`Nice to meet ${yourname}`)
}else{
    console.log("Please enter your name")
    alert(`Please enter your name`)
}
