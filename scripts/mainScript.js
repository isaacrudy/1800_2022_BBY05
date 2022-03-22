function insertContent(){
    //to check if user is logged in
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            db.collection("Main").doc("myContent")
            .onSnapshot(title => {
                console.log("current document data: " + title.data());                        
                document.getElementById("myContentText").innerHTML = title.data().Text;
                var icon = document.getElementById("myContentImage");
                icon.innerHTML += "<img src= './images/user.png' height='80'>"

            })

            db.collection("Main").doc("Feedback")
            .onSnapshot(title => {
                document.getElementById("feedbackText").innerHTML = title.data().Text;
                var icon2 = document.getElementById("feedbackImage");
                icon2.innerHTML += "<img src= './images/feedback.png' height='80'>"
            })
        } else {
            document.getElementById("myContentText").innerHTML = null;
            document.getElementById("myContentImage").innerHTML = null;
            document.getElementById("feedbackImage").innerHTML = null;
            document.getElementById("feedbackText").innerHTML = null;
        }
    })
}
insertContent()