let array = [];
let local = [];
let str = "";
let count=3;
function redirect() {
  window.location.href = "../pages/management.html";
}
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
}
function commit_1(x) {
  if (!array.includes(x)) {
    document.getElementById("add").innerHTML += x;
    array.push(x);
  }
  return array;
}


function submitHandler() {
  event.preventDefault();

  let createdBy = localStorage.getItem("loggedInUser");
  console.log(array);
  alert(
    `Your query has been sent successfully ! They will respond in mail or slack call ! Thank you`
  );
  let tag = document.getElementById("add").value;
  let name = document.getElementById("name").value;
  let desc = document.getElementById("w3review").value;
  let date = new Date();
  count+=1;
  console.log(str);
  let localStorageSetObject = {
    title: name,
    tag: tag,
    desc: desc,
    createdAt: date,
    createdBy: createdBy,
    count:count
  };

  local.push(localStorageSetObject);
  localStorage.setItem("query", JSON.stringify(local));
  axios
    .post(
      "https://61bb259de943920017784cc7.mockapi.io/query",
      localStorageSetObject
    )

    .then(function (response) {
      console.table(response.data);
      window.location.href = "../pages/list_queries.html";
    });

  // window.location.href = "../pages/list_queries.html";
}
function getAllFields() {
  const arrayToString = localStorage.getItem("query");
  let inArray = [];
  if (arrayToString) {
    inArray = JSON.parse(arrayToString);
  } else {
    inArray = [];
  }
  return inArray;
}

const all = getAllFields();
local = all;
