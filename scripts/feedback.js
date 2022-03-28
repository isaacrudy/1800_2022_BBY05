const feedbackForm = document.querySelector(".contact100-form validate-form");
const name = document.getElementById('name');
const email = document.getElementById('email');
const title = document.getElementById('title');
const message = document.getElementById('message');
const submit = document.querySelector(".contact100-form-btn");

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    db.collection('feedback').doc().set({
        name: name.value,
        email: email.value,
        title: title.value,
        message: message.value,
    }).then(() => {
        console.log("Thanks for your feedback.");
    })
});

