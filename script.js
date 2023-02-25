let userName = document.getElementById("name");
let userMail = document.getElementById("email");
let password = document.getElementById("pass");
let con_pass = document.getElementById("confirmPass");
let signUpBtn = document.getElementById("signUp");
let loginBtn = document.getElementById("login");
let loginMail = document.getElementById("login-email");
let loginPass = document.getElementById("login-pass");



console.log(signUpBtn);

if(signUpBtn){
    signUpBtn.addEventListener("click",function(){
        localStorage.setItem("email",userMail.value);
        localStorage.setItem("password",password.value);
        event.preventDefault();
        if(password.value===""){
            alert("Password cannot be null!");
        }
        if(password.value != con_pass.value){
            alert("Passwords do not match!");
        }
        if(password.value!="" && password.value === con_pass.value){
            alert("Sign Up Succesfull! Login to continue");
        } 
        
    })
}


if(loginBtn){
    loginBtn.addEventListener("click",function(){  
        event.preventDefault();
        console.log(loginBtn);
        
        if(loginPass.value === ""){
            alert("Fields can't be left blank!");
        }
        else if(loginMail.value === localStorage.getItem("email") && loginPass.value === localStorage.getItem("password")){
            alert("Login Succesfull!");
        }
        else{
            alert("Wrong Credentials"); 
       }
    })
}

