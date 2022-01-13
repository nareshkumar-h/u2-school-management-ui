let str = "";
      function reload() {
        window.location.reload();
      }
      function submitHandler(event) {
        event.preventDefault();
        if (localStorage.getItem("notifications") == null) {
          localStorage.setItem("notifications", JSON.stringify([]));
          let title = document.getElementById("title").value;
          let data = document.getElementById("data").value;
          let st = document.getElementById("st").value;
          let date = new Date();
          updatePage(title, data, date, st);
          alert("Notification has been sent to everybody !");
          window.location.href = "../pages/notification.html";
        } else {
          let title = document.getElementById("title").value;
          let data = document.getElementById("data").value;
          let date = new Date();
          let st = document.getElementById("st").value;
          updatePage(title, data, date, st);
          alert("Notification has been sent to everybody !");
          window.location.href = "../pages/notification.html";
        }
      }

      function updatePage(add_title, add_data, add_date, add_sub) {
        let str = getAllFields();
        let object = {
          title: add_title,
          data: add_data,
          date: add_date,
          sub: add_sub,
        };
        str.push(object);
        console.log(str);
        localStorage.setItem("notifications", JSON.stringify(str));
      }
      function getAllFields() {
        const stringInArray = JSON.parse(localStorage.getItem("notifications"));

        return stringInArray;
      }
      function pageOnLoadHandler() {
        const all = getAllFields();
        str = all;
      }

      pageOnLoadHandler();