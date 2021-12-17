function submitHandler() {
  //Get form values
  //Validate form credentials
  //Validate email and password in local storage
  //If invalid show error messges
  //Show success message
  //If valid Go to home page

  event.preventDefault();
  let userEmail = document.getElementById("mail").value;
  let userPass = document.getElementById("pass").value;
  let parsed = JSON.parse(localStorage.getItem("user_credentials"));
  if (parsed == null) {
    localStorage.setItem("user_credentials", JSON.stringify([]));
  }
  let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));
  let isUserExist = false;
  let log_mail = "";
  let log_role = "";

  for (let i = 0; i < userCredentials.length; i++) {
    let a= userCredentials[i];
    let email = a.email_id;
    let password = a.password;
    let role = a.role;

    if (userEmail == email && userPass == password) {
      isUserExist = true;
      log_mail = email;
      log_role = role;
      break;
    }
  }

  if (isUserExist) {
    let object = { email: log_mail, role: log_role };
    localStorage.setItem("loggedInUser", JSON.stringify(object));
    alert("Welcome!You have logged in successfully.");
    window.location.href = "management.html";
  } else {
    document.getElementById("error").innerHTML = "Invalid email id or password";
    return null;
  }
}
