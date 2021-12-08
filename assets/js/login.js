function submitHandler(){
    //Get form values
    //Validate form credentials
    //Validate email and password in local storage
    //If invalid show error messges
    //Show success message
    //If valid Go to home page
    
    event.preventDefault();
   let userEmail = document.getElementById("mail").value;
   let userPass = document.getElementById("pass").value;
   let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));//[{name:meenu,},{}]
   let len = userCredentials.length;

   let isUserExist = false;

   for (i = 0; i < len; i++) {

     let email = userCredentials[i].email_id;
     let password = userCredentials[i].password;

     if (userEmail == email && userPass == password) {
       isUserExist=true;
       break;
     }

   }


   if(isUserExist){
        alert("Welcome!You have logged in successfully.");
        window.location.href="management.html";
   }else{
          document.getElementById("error").innerHTML="***Invalid email id or password";
   }
  
 }