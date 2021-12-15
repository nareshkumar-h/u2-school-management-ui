let array = [];
let local = [];

function redirect() {
  window.location.href = "../pages/management.html";
}
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
}
function commit_1(x) {
  if (array.includes(x) == false) {
    document.getElementById("add").innerHTML += x;
    array.push(x);
  }
}

function submitHandler() {
  event.preventDefault();
  let createdBy=localStorage.getItem("loggedInUser");
  console.log(array);
  alert(
    `Your query has been sent successfully ! They will respond in mail or slack call ! Thank you`
  );
  let tag = document.getElementById("add").value;
  let name = document.getElementById("name").value;
  let desc = document.getElementById("w3review").value;
  let date = new Date();
  

  let localStorageSetObject = {
    title: name,
    tag: array,
    desc: desc,
    createdAt: date,
    createdBy:createdBy
  };

  local.push(localStorageSetObject);
  localStorage.setItem("query", JSON.stringify(local));

  window.location.href = "../pages/list_queries.html";
}
function getAllFields() {
  const arrayToString = localStorage.getItem("query");
  if (arrayToString) {
    inArray = JSON.parse(arrayToString);
  } else {
    inArray = [];
  }
  return inArray;
}

const all = getAllFields();
local = all;
