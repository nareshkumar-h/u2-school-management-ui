function submitHandler(event) {
  event.preventDefault();
  let userEmail = document.getElementById("email_id").value;
  let userPass = document.getElementById("psw1").value;
  let userCPass = document.getElementById("psw2").value;
  let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));
  let isUserExist = false;
  let index = 0;
  for (let i of userCredentials) {
    if (i.email_id == userEmail) {
      index = userCredentials.indexOf(i);
      isUserExist = true;
      break;
    }
  }
  if (isUserExist) {
      if(userPass != userCPass){
          document.getElementById("add").innerHTML="***Passwords do not match";
      }
      else if(userPass == userCPass){
          alert("Your password is succesfully been reset ");
          userCredentials[index].password=userPass;
          
          localStorage.setItem("user_credentials",JSON.stringify(userCredentials));
          window.location.href="./../index.html"
      }
  }
  else if(isUserExist != true){
    document.getElementById("add").innerHTML="***Email id not exist";
  }
}
