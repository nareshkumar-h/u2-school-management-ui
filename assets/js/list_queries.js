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
// axios
// .get("https://61bb259de943920017784cc7.mockapi.io/query")
// .then(function (res) {
//   console.table(res.data);
//   object=res.data.length;
//   for(let i of res.data){
//     console.table(i);
//     let date=i.createdAt;
//     let name=i.title;
//     let desc=i.desc;
//     let tag=i.tag;
//     str+=
// "<div class='kitkat'><p class='Date'>" +
//   date +
//   "</p><p class='User'>" +
//   name +
//   "</p><span> <p class='tag'>" +
//   tag +
//   "</p> </span><span><p class='desc'>" +
//   desc +
//   "</p></span></div>";
//   }

// });
