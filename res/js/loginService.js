function registrar(){
    var email = document.getElementById("txtUser").value;
    var password=document.getElementById("txtPass").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });email-password.html
}

function redirect(){
    window.location.href="registro.html";
}

function logear(){
  var email = document.getElementById("txtUser").value;
  var password=document.getElementById("txtPass").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  alert("Logeada");
}