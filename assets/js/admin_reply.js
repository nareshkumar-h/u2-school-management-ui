let queryIdInLS = parseFloat(localStorage.getItem("qId"));
  console.log(queryIdInLS);
  let queriesInLocalStorage = JSON.parse(localStorage.getItem("query"));
  let isTrue = false;
  
  for (let i of queriesInLocalStorage) {

    console.log("HEllo")
    if (i.qNo == queryIdInLS) {
      let name = i.title;
      let desc = i.desc;
      let time = i.createdAt;
      let tag=i.tag
      console.log("Hello");
      
      document.getElementById("queryAsked").innerHTML = `<div class=\"toBeDecorated\"><p class=\"Name\">${name}</p><br><p class=\"Time\">${time}</p><br><br><p class=\"tag\">${tag}</p><br><br><br><p class=\"Query\">${desc}</p></div>`;
      break;
    }
  }
  function returning(){
    let LS = JSON.parse(localStorage.getItem("loggedInUser"));
    let name="";
    let UC=JSON.parse(localStorage.getItem("user_credentials"));
    console.log(UC);
    for(let i of UC){
      if (i.email_id==LS.email){
        console.log("Hi")
        name=i.name;
        
        break;
      }
    }
    return name;
  }
  function submitHandler1() {

    let LS = JSON.parse(localStorage.getItem("loggedInUser"));

    let reply = document.getElementById("b1").value;
    if(reply==""){
      document.getElementById("p").innerHTML="Type a reply";
      console.log("null");
      return null;
    }
    let index=0;
    
    
    let name=returning();
    console.log(name);
    let FromEmail = LS.email;
    console.log(FromEmail);
    for (let i of queriesInLocalStorage) {

      console.log("HEllo")
      if (i.qNo == queryIdInLS) {
        
        index = queriesInLocalStorage.indexOf(i);
        console.log(index);
        
        break;
        }}
      let qUserLS = JSON.parse(localStorage.getItem("query"))[index].createdBy;
      console.log(qUserLS);
      let setObject={qNo:queryIdInLS,replied_person:name,desc:reply,time:new Date()};
      let pushingObj=JSON.parse(localStorage.getItem("replies"));
      if(pushingObj==null){
        localStorage.setItem("replies",JSON.stringify([]));
        pushingObj=[];
      }
      pushingObj.push(setObject);

      localStorage.setItem("replies",JSON.stringify(pushingObj));
      let ToEmail = JSON.parse(qUserLS).email;
      console.log(ToEmail);
    }
    let objectGet=JSON.parse(localStorage.getItem("replies"));
    let str="";
    for(let j of objectGet){
       if(j.qNo==parseFloat(localStorage.getItem("qId"))){
           str+=`<div class=\"kitkat\"><p class=\"person\">${j.replied_person}</p><p class=\"desc\">${j.desc}</p><p class=\"time\">${j.time}</p></div><br>`;
       }
    }
    document.getElementById("p").innerHTML=str;
    


