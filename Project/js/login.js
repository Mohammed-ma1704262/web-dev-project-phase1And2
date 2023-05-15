document.getElementById("login-btn").addEventListener("click", login);


function login() {
    // Get the values of the username and password input fields
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Load the JSON data
    fetch("users.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(users) {
        // Check if the login and password match any of the objects in the JSON data
        for (var i = 0; i < users.length; i++) {
          if (users[i].email === email && users[i].password === password) {
            // If there is a match, check the type attribute and redirect the user to a new HTML page
            if (users[i].role === "organizer") {
              window.location.href = "organizerTest.html";
            } else if (users[i].role === "reviewer") {
              window.location.href = "reviewerTest.html";
            } else if (users[i].role === "author"){
                window.location.href = "authorTest.html";
            }
            return;
          }
        }
        // If there is no match, display an error message
        document.getElementById("error-msg").innerHTML = "Invalid username or password.";
      })
      .catch(function(error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
        document.getElementById("popup").style.display = "block";
      });
  }
  