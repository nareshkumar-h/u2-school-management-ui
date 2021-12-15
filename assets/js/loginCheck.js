function isUserLoggedIn() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser == null) {
      window.location.href = "../pages/login.html";
    } 
  }
  
  isUserLoggedIn();