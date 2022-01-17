let Admin = JSON.parse(localStorage.getItem("loggedInUser"));
let role = Admin.role;
console.log(role);
if (role == "student") {
  alert("Oops! Sorry! You are not an admin !");
  window.history.back();
}
