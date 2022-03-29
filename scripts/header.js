var auth = firebase.auth();

function insertSignIn(){
    //to check if user is logged in
    firebase.auth().onAuthStateChanged(user => {
        var signButton = document.getElementById("signInButton")
        if (user){
            signButton.innerHTML = '<button class="btn btn-light btn-lg" onclick = logOut() class = "inline" type = "button"><a href=\'../main.html\'>Sign Out</a></button>'
        } else {
            signButton.innerHTML = '<button class="btn btn-light btn-lg" onclick="window.location.href=\'../login.html\'" class="inline" type="button">Login/Signup</button>'
        }
    })
}

function logOut() {
    auth.signOut();
    insertContent();
    insertSignIn();
}

insertSignIn()