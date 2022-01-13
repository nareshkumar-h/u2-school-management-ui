let lS=JSON.parse(localStorage.getItem("notifications"));
     let str="";
     for(let i of lS){
      
      str+=`<div class='grid-container-element12'>
              <div class='a1'>
                  <img src='../assets/images/bell.png' height='50px' width='50px'></div>
                  <div class='a2'>${i.title}</div>
                  <br><br>
                  <div class='a3'>
                    <span class='w12'>${i.sub}</span>
                    <span class='w13'><a href='#'>${i.data}</a></span>
                    <span class='w14'>${i.date}</span>
                    </div>
                    </div>
                    <br>`;
     }
     console.log(str);
     document.getElementById("new").innerHTML=str;