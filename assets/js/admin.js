let list = [];
function reload() {
  //Reload the page
  window.location.reload();
}
function Student(){
    window.location.href="../pages/signup.html"
}
function submiHandler(event) {
  //Get form values
  //Validate form credentials
  //Store data in local storage
  //If invalid show error messges
  //If valid Go to login page
  //Show success message

  event.preventDefault();
  
  let parsed = JSON.parse(localStorage.getItem("user_credentials"));
  if (parsed == null) {
    localStorage.setItem("user_credentials", JSON.stringify([]));
  }

  var pw1 = document.getElementById("psw1").value;
  var pw2 = document.getElementById("psw2").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email_id").value;

  const y = localStorage.getItem("user_credentials");
  const array = JSON.parse(y);

  let isEmailAlreadyExist = false;

  for (let i of array) {
    let a= i.email_id;
    if (email == a) {
      isEmailAlreadyExist = true;
      break;
    }
  }
  if (name == "") {
    document.getElementById("message1").innerHTML = "***Name must not be empty";
  }
  if (isEmailAlreadyExist) {
    document.getElementById("emailId").innerHTML =
      "***Oops! Sorry ! This mail id already exists";
    return;
  }

  let object_to_focus;

  if (pw1 == "") {
    document.getElementById("message1").innerHTML =
      "**Fill the password please!";
    return;
  }

  if (pw2 == "") {
    document.getElementById("message2").innerHTML =
      "**Enter the password please!";
    return;
  }

  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML =
      "**Password length must be atleast 8 characters";
    return;
  }

  if (pw1.length > 15) {
    document.getElementById("message1").innerHTML =
      "**Password length must not exceed 15 characters";
    return;
  }

  if (pw1 != pw2) {
    document.getElementById("message2").innerHTML = "**Passwords are not same";
    return;
  } else {
    object_to_focus = {
      name: name,
      email_id: email,
      password: pw1,
      role: "admin",
    };
    alert(`Registration is done successfully `);
  }
  console.log(object_to_focus);
  updateList(object_to_focus);
  window.location.href = "login.html";
}
let inArray = [];
function updateList(object) {
  console.log(object);
  list.push(object);
  const arrayToString = JSON.stringify(list);
  localStorage.setItem("user_credentials", arrayToString);
}
function getAllFields() {
  const arrayToString = localStorage.getItem("user_credentials");
  if (arrayToString) {
    inArray = JSON.parse(arrayToString);
  } else {
    inArray = [];
  }
  return inArray;
}
function pageOnLoadHandler() {
  const all = getAllFields();
  list = all;
}

pageOnLoadHandler();
