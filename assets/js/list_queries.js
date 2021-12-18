let str = "";
let add = "";
let localStorageGet = JSON.parse(localStorage.getItem("query"));
for (let i of localStorageGet) {
  
  let date = i.createdAt;
  let name = i.title;
  
  let desc = i.desc;
  let tag = i.tag;
  
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
