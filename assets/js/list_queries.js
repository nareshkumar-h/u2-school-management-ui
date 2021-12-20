let str = "";
let add = "";
let localStorageGet = JSON.parse(localStorage.getItem("query"));
function get(x) {
  let array = x.split("", x.length);
  if (array.includes("u") && array.includes("p")) {
    document.getElementById(x).style.border = "tomato";
    document.getElementById(x).style.backgroundColor = "tomato";
  } else if (
    array.includes("d") &&
    array.includes("o") &&
    array.includes("w") &&
    array.includes("n")
  ) {
    document.getElementById(x).style.border = "orange";
    document.getElementById(x).style.backgroundColor = "orange";
  }
}

for (let i of localStorageGet) {
  let date = i.createdAt;
  let name = i.title;
  let desc = i.desc;
  let tag = i.tag;
  let count=i.count;
  str +=
    "<div class='kitkat'><p class='Date'>" +
    date +
    "</p><p class='User'>" +
    name +
    "</p><span> <p class='tag'>" +
    tag +
    "</p> </span><span><p class='desc'>" +
    desc +
    "</p></span><br><span class='upspan' id='uspan'><img class='up' src='../assets/images/up.png' width='50px' height='50px' alt='' onclick='get('up')' id='up'/></span><span class='downspan' id='dspan'><img class='down' src='../assets/images/down.png' width='50px' height='50px' alt='' onclick='get('down"+count+"') id='down"+count+"'/></span></div>";
}
console.log(str);
let div = document.getElementById("new");
div.innerHTML = str;

