function submitHandler(){
    event.preventDefault();
    let userEmail = document.getElementById("email_id").value;
   let userPass = document.getElementById("psw1").value;
   let userCPass = document.getElementById("psw2").value;
   let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));
   let len = userCredentials.length;

   let isUserExist = false;
   let index=0;
   if(userCredentials.includes(userEmail)){
       isUserExist=true;
       index=userCredentials.indexOf(userEmail);
       break;
   }
   if(isUserExist){
       if(userPass!=userCPass){
          document.getElementById("emailId").innerText="Passwords do not match";
       }
       else{

       }
   }

}