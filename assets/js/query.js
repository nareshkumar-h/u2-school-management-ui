let array = [];
function redirect(){
  window.location.href="../pages/management.html";
}
function logout(){
  localStorage.removeItem("loggedInUser");
  window.location.href="../index.html";
}
function commit_1() {
  if (array.includes("@Chitra Muthukumaran") == false) {
    document.getElementById("add").innerHTML += "@Chitra Muthukumaran";
    array.push("@Chitra Muthukumaran");
  }
}
function commit_2() {
  if (array.includes("@Shanmuga Anantharaman") == false) {
    document.getElementById("add").innerHTML += "@Shanmuga Anantharaman";
    array.push("@Shanmuga Anantharaman");
  }
}
function commit_3() {
  if (array.includes("@Revathi Iyer") == false) {
    document.getElementById("add").innerHTML += "@Revathi Iyer";
    array.push("@Revathi Iyer");
  }
}
function commit_4() {
  if (array.includes("@Prasannabharathi Ram") == false) {
    document.getElementById("add").innerHTML += "@Prasannabharathi Ram";
    array.push("@Prasannabharathi Ram");
  }
}
function commit_5() {
  if (array.includes("@Selvi") == false) {
    document.getElementById("add").innerHTML += "@Selvi";
    array.push("@Selvi");
  }
}
function commit_6() {
  if (array.includes("@Surya Umapathy")==false) {
    document.getElementById("add").innerHTML += "@Surya Umapathy";
    array.push("@Surya Umapathy");
  }
}
function commit_7() {
  if (array.includes("@Jayanthi") == false) {
    document.getElementById("add").innerHTML += "@Jayanthi";
    array.push("@Jayanthi");
  }
}
function commit_8() {
  if (array.includes("@Naresh") == false) {
    document.getElementById("add").innerHTML += "@Naresh";
    array.push("@Naresh");
  }
}
function submitHandler() {
  event.preventDefault();
  console.log(array);
  alert(
    `Your query has been sent successfully ! They will respond in mail or slack call ! Thank you`
  );
  window.location.reload();
}
