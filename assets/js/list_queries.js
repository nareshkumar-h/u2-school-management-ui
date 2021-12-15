
let str = "";
let add = "";
let localStorageGet = JSON.parse(localStorage.getItem("query"));
for (i = 0; i < localStorageGet.length; i++) {
  let date = localStorageGet[i].createdAt;
  let name = localStorageGet[i].title;
  
  let desc = localStorageGet[i].desc;
  let tag = localStorageGet[i].tag;
  for (i = 0; i < tag.length; i++) {
    add += tag[i];
  }
  
  str +=
    "<div class='kitkat'><p class='Date'>" +
    date +
    "</p><p class='User'>" +
    name +
    "</p><span> <p class='tag'>" +
    add +
    "</p> </span><span><p class='desc'>" +
    desc +
    "</p></span></div>";
}
let div = document.getElementById("new");
div.innerHTML = str;
