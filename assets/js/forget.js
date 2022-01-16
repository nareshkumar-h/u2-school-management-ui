function submitHandler(event) {
  event.preventDefault();
  document.getElementById("submit").style.backgroundColor = "#46a9a9";
  document.getElementById("submit").style.color = "white";
  let userEmail = document.getElementById("email_id").value;
  let userPass = document.getElementById("password1").value;
  let userCPass = document.getElementById("password2").value;
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
    if (userPass != userCPass) {
      document.getElementById("error").innerHTML = "Passwords do not match";
    } else if (userPass == userCPass) {
      alert("Your password is succesfully been reset ");
      document.getElementById("submit").style.backgroundColor = "#46a9a9";
      document.getElementById("submit").style.color = "white";
      userCredentials[index].password = userPass;

      localStorage.setItem("user_credentials", JSON.stringify(userCredentials));
      window.location.href = "./../index.html";
    }
  } else if (!isUserExist) {
    document.getElementById("error").innerHTML = "Email id not exist";
  }
}
function colorChange() {
  document.getElementById("submit").style.backgroundColor = "#46a9a9";
  document.getElementById("submit").style.color = "white";
  document.getElementById("submit").style.borderColor = "#46a9a9";
}
