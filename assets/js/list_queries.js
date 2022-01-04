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
  let array = x.split("", x.length);

  if (array.includes("u") && array.includes("p")) {
    let id_change = 0;
    let hello = "up";
    const digits_only = (string) =>
      [...string].every((c) => "0123456789".includes(c));
    let numbers = [];
    for (let j of array) {
      if (digits_only(j)) {
        numbers.push(j);
      }
    }
    console.log(numbers);
    for (let k of numbers) {
      id_change = id_change * 10 + parseInt(k);
    }
    console.log(id_change);
    let numInString = JSON.stringify(id_change);
    console.log(numInString);
    let isLikeAlreadyExist = false;
    
    for (let i of like) {
      console.log(i.email);
      console.log(loggedInUser.email);

      if (loggedInUser.email === i.email && i.like == "true") {
        isLikeAlreadyExist = true;
        break;
      } else if (loggedInUser.email === i.email && i.like == "false") {
        isLikeAlreadyExist = true;
        index = like.indexOf(i);

        console.log("true");
        console.log(index);
        break;
      }
    }
    if (isLikeAlreadyExist) {
      like[index].like = "true";
      like[index].queryId = hello + numInString;
      window.location.href = "../pages/list_queries.html";
    }
    if (!isLikeAlreadyExist) {
      document.getElementById(x).style.border = "tomato";
      document.getElementById(x).style.backgroundColor = "tomato";
      let likeObject = {
        email: loggedInUser.email,
        like: "true",
        queryId: x,
      };
      like.push(likeObject);
      localStorage.setItem("boolean", JSON.stringify(like));
      alert("hello");
      window.location.href = "../pages/list_queries.html";
    }
  } else if (
    array.includes("d") &&
    array.includes("o") &&
    array.includes("w") &&
    array.includes("n")
  ) {
    document.getElementById(x).style.border = "orange";
    document.getElementById(x).style.backgroundColor = "orange";
    let likeObject = {
      email: loggedInUser.email,
      like: "false",
      queryId: x,
    };
    like.push(likeObject);
    localStorage.setItem("boolean", JSON.stringify(like));
  }
  return index;
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
    "'/></span><span class='downspan' id='dspan'><img class='down' src='../assets/images/down.png' width='50px' height='50px' alt='' onclick=\"get('down" +
    count +
    "')\" id='down" +
    count +
    "'/></span><br /><span><a href='#' onclick=\"cli('thread" +
    count +
    "')\">Reply in thread</a></span><span><a href='#' onclick=\"clic('thread" +
    count +
    "')\">View all replies</a></span></div>";
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

  let array = queryId.split("", queryId.length);
  if (array.includes("u") && array.includes("p")) {
    document.getElementById(queryId).style.border = "tomato";
    document.getElementById(queryId).style.backgroundColor = "tomato";
  } else if (
    array.includes("d") &&
    array.includes("o") &&
    array.includes("w") &&
    array.includes("n")
  ) {
    document.getElementById(queryId).style.border = "orange";
    document.getElementById(queryId).style.backgroundColor = "orange";
  }
}
function cli(x) {
  localStorage.setItem("qId", x);
  window.location.href = "../pages/add_reply.html";
}
function clic(x) {
  localStorage.setItem("IdAsk", x);
  window.location.href = "../pages/threads.html";
}
