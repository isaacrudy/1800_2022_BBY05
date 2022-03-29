function hospitalMap() {
    db.collection("Map").doc("HTML")
        .onSnapshot(title => {
            console.log("current document data: " + title.data());
            document.getElementById("theMap").innerHTML = null;
            document.getElementById("theMap").innerHTML = title.data().hospital;
        })
};

function pharmacyMap() {
    db.collection("Map").doc("HTML")
        .onSnapshot(title => {
            console.log("current document data: " + title.data());
            document.getElementById("theMap").innerHTML = null;
            document.getElementById("theMap").innerHTML = title.data().pharmacy;
        })
}

function icbcMap() {
    db.collection("Map").doc("HTML")
            .onSnapshot(title => {
                console.log("current document data: " + title.data());   
                document.getElementById("theMap").innerHTML = null;
                document.getElementById("theMap").innerHTML = title.data().icbc;
            })
        };

