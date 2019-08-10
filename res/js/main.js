function myFunction() {
    var rootRef = firebase.database().ref();
    console.log(rootRef.child("usuarios"))
}