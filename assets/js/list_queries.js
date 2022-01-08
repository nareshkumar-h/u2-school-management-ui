let str = "";
let add = "";
let count = 3;
let like = [];
let index = 0;

let localStorageGet = JSON.parse(localStorage.getItem("query"));
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));
let bool = localStorage.getItem("boolean");
if (bool == null) {
  localStorage.setItem("boolean", JSON.stringify([]));
}
function get(x) {
  let array = split(x);
  let thumb_direction = direction(array);
  let noList = [];
  const digits_only = (string) =>
    [...string].every((c) => "0123456789".includes(c));
  for (let j of array) {
    if (digits_only(j)) {
      noList.push(j);
    }
  }

  console.log(noList);
  if (thumb_direction == "up") {
    if (ILAET(x) !== "true") {
      document.getElementById(x).style.border = "red";
      document.getElementById(x).style.backgroundColor = "red";
      setLS("boolean", "true", x);
    } 
  } 
}
function split(y) {
  return y.split("", y.length);
}
function direction(list) {
  if (list.includes("u") && list.includes("p")) {
    return "up";
  } else if (
    list.includes("d") &&
    list.includes("o") &&
    list.includes("w") &&
    list.includes("n")
  ) {
    return "down";
  }
}
function ILAET(y) {
  let freak = "";
  for (let i of like) {
    if (i.email == loggedInUser.email) {
      if (i.like == "true" && i.queryId == y) {
        freak = "true";
        break;
      } else if (i.like == "false" && i.queryId == y) {
        freak = like.indexOf(i);
        console.log(freak);
        break;
      }
    }
  }
  return freak;
}


function setLS(key, boolean_value, queryIDis) {
  let object = {
    email: loggedInUser.email,
    like: boolean_value,
    queryId: queryIDis,
  };
  like.push(object);
  localStorage.setItem(key, JSON.stringify(like));
}
for (let i of localStorageGet) {
  let date = i.createdAt;
  let name = i.title;
  let desc = i.desc;
  let tag = i.tag;
  count += 1;
  str +=
    "<div class='kitkat'><p class='Date'>" +
    date +
    "</p><p class='User'>" +
    name +
    "</p><span> <p class='tag'>" +
    tag +
    "</p> </span><span><p class='desc'>" +
    desc +
    "</p></span><br><span class='upspan' id='uspan'><img class='up' src='../assets/images/up.png' width='50px' height='50px' alt='' onclick=\"get('up" +
    JSON.stringify(count) +
    "')\" id='up" +
    JSON.stringify(count) +
    "','true'/><span><a class=\"link\" href='#' onclick=\"cli(" +
    i.qNo +
    ')">Reply in thread</a></span></div>';
}
console.log(str);
let div = document.getElementById("new");
div.innerHTML = str;

function getAllFields() {
  const arrayToString = localStorage.getItem("boolean");

  let inArray = [];
  if (arrayToString) {
    inArray = JSON.parse(arrayToString);
  } else {
    inArray = [];
  }
  return inArray;
}

const all = getAllFields();

like = all;

for (let j of like) {
  let queryId = j.queryId;

  let array = split(queryId);
  if (array.includes("u") && array.includes("p")) {
    document.getElementById(queryId).style.border = "tomato";
    document.getElementById(queryId).style.backgroundColor = "tomato";
  } 
}
function cli(x) {
  localStorage.setItem("qId", x);
  window.location.href = "../pages/add_reply.html";
}
