function submitHandler() {
  event.preventDefault();
  let userEmail = document.getElementById("email_id").value;
  let userPass = document.getElementById("psw1").value;
  let userCPass = document.getElementById("psw2").value;
  let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));
  let len = userCredentials.length;

  let isUserExist = false;
  let index = 0;
  for (i = 0; i < len; i++) {
    if (userCredentials[i].email_id == userEmail) {
      index = i;
      isUserExist = true;
      break;
    }
  }
  if (isUserExist) {
      if(userPass != userCPass){
          document.getElementById("add").innerHTML="***Passwords do not match";
      }
      else if(userPass == userCPass){
          userCredentials[index].password=userPass;
          
          localStorage.setItem("user_credentials",JSON.stringify(userCredentials));
          window.location.href="./../index.html"
      }
  }
  else if(isUserExist != true){
    document.getElementById("add").innerHTML="***Email id not exist";
  }
}
