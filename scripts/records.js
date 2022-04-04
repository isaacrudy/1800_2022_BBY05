var currentUser          //put this right after you start script tag before writing any functions.

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().nameRecord;
                    var userAge = userDoc.data().age;
                    var userAllergies = userDoc.data().allergies;
                    var userInsurance = userDoc.data().insurance;
                    var userCondition = userDoc.data().conditions;
                    var userMedication = userDoc.data().medications;
                    var userOther = userDoc.data().other;


                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userAge != null) {
                        document.getElementById("ageInput").value = userAge;
                    }
                    if (userAllergies != null) {
                        document.getElementById("allergiesInput").value = userAllergies;
                    }
                    if (userInsurance != null) {
                        document.getElementById("insuranceInput").value = userInsurance;
                    }
                    if (userCondition != null) {
                        document.getElementById("conditionInput").value = userCondition;
                    }
                    if (userMedication != null) {
                        document.getElementById("medicationInput").value = userMedication;
                    }
                    if (userOther != null) {
                        document.getElementById("otherInput").value = userOther;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}
populateInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
 }

function saveUserInfo() {
    userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    userAge = document.getElementById('ageInput').value;     //get the value of the field with id="schoolInput"
    userAllergies = document.getElementById('allergiesInput').value;       //get the value of the field with id="cityInput"
    userInsurance = document.getElementById('insuranceInput').value;
    userCondition = document.getElementById('conditionInput').value;
    userMedication = document.getElementById('medicationInput').value;
    userOther = document.getElementById('otherInput').value;
    currentUser.update({
        nameRecord: userName,
        age: userAge,
        allergies: userAllergies,
        insurance: userInsurance,
        conditions: userCondition,
        medications: userMedication,
        other: userOther
    })
    .then(() => {
        console.log("Document successfully updated!");
    });
    document.getElementById('personalInfoFields').disabled = true;
}