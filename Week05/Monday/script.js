const users = [
    {username: 'khalid', email: 'khalid@powercoders.org', password:"123"},
    {username: 'stan', email: 'stan@powercoders.org', password:"456"},
    {username: 'taha', email: 'taha@powercoders.org', password:"789"},
]

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit',gatherUserInfos)

function gatherUserInfos (e){
    e.preventDefault();
    /* 
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); */

    let user = document.querySelector("#userid").value;
    let pwd = document.querySelector("#pwdid").value;
    checkIfLoginExists(user,pwd)

}

function checkIfLoginExists (pUser,pPwd){
    users.forEach((user) => {
        if(user.username == pUser){
            if(user.password == pPwd){
                changeViewIfLoggedIn()
                console.log(3)
            }else{
                showErrorMessage()
                console.log(1)
            }
        }else{
            showErrorMessage()
            console.log(4)
        }
    })   
}



function changeViewIfLoggedIn (){
    console.log("LOGGED IN!")

}

function showErrorMessage (){
    console.log("USER NOT FOUND!")
}