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
    let userFound = false;
    
    users.forEach((user) => {
        if (userFound) return;
        
        if(user.username == pUser){
            if(user.password == pPwd){
                changeViewIfLoggedIn(user.username)
                userFound = true
            }else{
                showErrorMessage()
                userFound = true
            }
        }else{
            showErrorMessage()
        }

    })   

    if(!userFound){
        showErrorMessage();
    }
}

function changeViewIfLoggedIn (pUsername){
    document.getElementById("header").textContent = `Welcome ${pUsername}`
    loginForm.innerHTML = `<button type="button" onClick="handleLogout()">Logout</button>`
}


function handleLogout (){
    document.getElementById("header").textContent = `Login`
    loginForm.innerHTML = `
        <form action="index.html" method="post" >
            <label for="userid">Username</label>
            <input type="text" id="userid" name="username" required>
            <label for="pwdid">Password</label>
            <input type="password" id="pwdid" name="pwdName" required>
            <button type="submit">Login</button>
        </form>
        `
}

function showErrorMessage (){
    document.getElementById("header").textContent = `Please Try Again`
}