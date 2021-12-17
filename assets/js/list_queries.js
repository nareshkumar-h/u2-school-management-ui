let str = "";
let add = "";
let localStorageGet = JSON.parse(localStorage.getItem("query"));
for (let i = 0; i < localStorageGet.length; i++) {
  let a=localStorageGet[i];
  let date = a.createdAt;
  let name = a.title;
  
  let desc = a.desc;
  let tag = a.tag;
  
  str +=
    "<div class='kitkat'><p class='Date'>" +
    date +
    "</p><p class='User'>" +
    name +
    "</p><span> <p class='tag'>" +
    tag +
    "</p> </span><span><p class='desc'>" +
    desc +
    "</p></span></div>";
}
let div = document.getElementById("new");
div.innerHTML = str;
