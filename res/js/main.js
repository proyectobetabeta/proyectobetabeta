function myFunction() {
    var rootRef = firebase.database().ref();
    // var usuarios = rootRef.child("usuarios")
    rootRef.once("value")
    .then(function(snapshot) {
        console.log(snapshot.val())
        console.log(snapshot.val().users.projects.tasks.task0)
    });
}