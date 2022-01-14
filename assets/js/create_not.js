function reload() {
  window.location.reload();
}
function submitHandler(event) {
  event.preventDefault();
  document.getElementById("submitBtn").style.backgroundColor = "#46a9a9";
  document.getElementById("submitBtn").style.color = "white";
  if (localStorage.getItem("notifications") == null) {
    localStorage.setItem("notifications", JSON.stringify([]));
    let title = document.getElementById("title").value;
    let data = document.getElementById("data").value;
    let st = document.getElementById("st").value;
    let date = new Date();
    updatePage([
      title,
      data,
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
      st,
    ]);
    alert("Notification has been sent to everybody !");
    window.location.href = "../pages/notification.html";
  } else {
    let title = document.getElementById("title").value;
    let data = document.getElementById("data").value;
    let date = new Date();
    let st = document.getElementById("st").value;
    updatePage([
      title,
      data,
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
      st,
    ]);
    alert("Notification has been sent to everybody !");
    window.location.href = "../pages/notification.html";
  }
}

function updatePage(array) {
  let str = getAllFields();
  let object = {
    title: array[0],
    data: array[1],
    date: array[2],
    month: array[3],
    year: array[4],
    hour: array[5],
    minutes: array[6],
    sub: array[7],
  };
  str.push(object);
  console.log(str);
  localStorage.setItem("notifications", JSON.stringify(str));
}
function getAllFields() {
  return JSON.parse(localStorage.getItem("notifications"));
}
