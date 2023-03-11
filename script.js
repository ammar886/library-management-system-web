    let userName = document.getElementById("name");
    let userMail = document.getElementById("email");
    let password = document.getElementById("pass");
    let con_pass = document.getElementById("confirmPass");
    let signUpBtn = document.getElementById("signUp");
    let loginBtn = document.getElementById("login");
    let loginMail = document.getElementById("login-email");
    let loginPass = document.getElementById("login-pass");
    let welcomeMsg = document.getElementById("welcome-msg");
    let addBookBtn = document.getElementById("add-book-btn");
    let bookList = document.getElementById("booklist");
    let bookDelBtn = document.createElement("button");
    




    console.log(signUpBtn);

    if(signUpBtn){
        signUpBtn.addEventListener("click",function(){
            localStorage.setItem("email",userMail.value);
            localStorage.setItem("password",password.value);
            localStorage.setItem("userName",userName.value);
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
                location.href = "/mainPage.html";
            }
            else{
                alert("Wrong Credentials"); 
        }
        })
    }

    if(welcomeMsg){
        welcomeMsg.innerHTML = "Welcome, " + localStorage.getItem("userName");
    }


    if (addBookBtn) {
        addBookBtn.addEventListener("click", function(event) {
          event.preventDefault();
          let bookName = document.getElementById("book-name");
          let authorName = document.getElementById("authorName");
          let bookType = document.getElementById("book-type");
          let bookListItem = document.createElement("li");
          bookListItem.textContent = bookName.value + "--------"+authorName.value + "--------" +bookType.value;
          let bookList = document.getElementById("bookList").querySelector("ul");
          bookList.appendChild(bookListItem);
          bookName.value = "";
          authorName.value = "";

          bookDelBtn.innerHTML = "<button>Delete</button>"
          bookList.appendChild(bookDelBtn);

          if(bookDelBtn){
            bookDelBtn.addEventListener("click",function(){
                bookList.innerHTML = "";
            })
          }

        });
      }


      