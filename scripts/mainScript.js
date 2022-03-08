function insertContent(){
    //to check if user is logged in
    firebase.auth().onAuthStateChanged(user => {
        console.log(user.uid);
        if (user){
            db.collection("Main").doc("myContent")
            .onSnapshot(title => {
                console.log("current document data: " + title.data());                        
                document.getElementById("myContentText").innerHTML = title.data().Text;
                var icon = document.getElementById("myContentImage");
                icon.innerHTML += "<img src= './images/user.png' height='80'>"
            })
        }
    })
}
insertContent()