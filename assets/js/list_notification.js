function redirect() {
  document.getElementById("redirect").style.backgroundColor = "#ec745a";
  window.location.href = "./../pages/create_not.html";
}
let lS = JSON.parse(localStorage.getItem("notifications"));
let str = "";
for (let i of lS) {
  str += `<div class=\"grid-container-element12\">
  <div class=\"a1\"><img src=\"../assets/images/bell.png\" height=\"50px\" width=\"50px\" alt=\"\"></div>
  <div class=\"a2\">
      ${i.title}
  </div><br><br>
  <div class=\"a3\">
     <span class=\"w12\">${i.sub} </span><span class=\"w13\"> <a href=\"https://freshworks.zoom.us/my/b2classroom\">${i.data}</a></span>
     <span class="w14">${i.hour}:${i.minutes}(${i.date}/${i.month}/${i.year}) </span>
  </div>

</div>`;
}
console.log(str);
document.getElementById("new").innerHTML = str;
function onc(){
  window.location.href="./../index.html";
}
function logout(){
  localStorage.removeItem("loggedInUser");
  window.location.href="./../index.html";
}