let Admin=JSON.parse(localStorage.getItem("loggedInUser"));
let role=Admin.role;
console.log(role);
if(role=="student"){
  window.location.href="./../pages/not_admin_error.html";
}
