let list = [];
function reload() {
  //Reload the page
  window.location.reload();
}
function Admin() {
  window.location.href = "../pages/admin.html";
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

  var pw1 = document.getElementById("password1").value;
  var pw2 = document.getElementById("password2").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email_id").value;

  const y = localStorage.getItem("user_credentials");
  const array = JSON.parse(y);

  let isEmailAlreadyExist = false;

  for (let i of array) {
    let a = i.email_id;
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
      "Oops! Sorry ! This mail id already exists";
    document.getElementById("emailId").style.marginLeft = "65px";
    return;
  }

  let object_to_focus;

  if (pw1 == "") {
    document.getElementById("message1").innerHTML = "Fill the password please!";
    document.getElementById("emailId").style.marginLeft = "65px";
    return;
  }

  if (pw2 == "") {
    document.getElementById("message2").innerHTML =
      "Enter the password please!";
    document.getElementById("emailId").style.marginLeft = "65px";
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
      role: "student",
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
function colorChange() {
  document.getElementById("submit1").style.backgroundColor = "#46a9a9";
  document.getElementById("submit1").style.color = "white";
  document.getElementById("submit1").style.borderColor = "#46a9a9";
}
pageOnLoadHandler();
