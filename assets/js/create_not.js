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
    updatePage(
      title,
      data,
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
      st
    );
    alert("Notification has been sent to everybody !");
    window.location.href = "../pages/notification.html";
  } else {
    let title = document.getElementById("title").value;
    let data = document.getElementById("data").value;
    let date = new Date();
    let st = document.getElementById("st").value;
    updatePage(
      title,
      data,
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
      st
    );
    alert("Notification has been sent to everybody !");
    window.location.href = "../pages/notification.html";
  }
}

function updatePage(
  add_title,
  add_data,
  add_date,
  add_month,
  add_years,
  add_hours,
  add_minutes,
  add_sub
) {
  let str = getAllFields();
  let object = {
    title: add_title,
    data: add_data,
    date: add_date,
    month: add_month,
    year: add_years,
    hour: add_hours,
    minutes: add_minutes,
    sub: add_sub,
  };
  str.push(object);
  console.log(str);
  localStorage.setItem("notifications", JSON.stringify(str));
}
function getAllFields() {
  return JSON.parse(localStorage.getItem("notifications"));
}
