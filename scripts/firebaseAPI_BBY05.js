//import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCiPYVrGN6fggikrQ3qvUN5RyxRVPuUOM",
    authDomain: "bby05-13448.firebaseapp.com",
    databaseURL: "https://bby05-13448-default-rtdb.firebaseio.com",
    projectId: "bby05-13448",
    storageBucket: "bby05-13448.appspot.com",
    messagingSenderId: "576679079978",
    appId: "1:576679079978:web:667fa3883eeb7758b29353"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/*

To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.

npm install -g firebase-tools

Doesn't work? Take a look at the Firebase CLI reference or change your npm permissions
npm install -g firebase-tools

*/

/*

You can deploy now or later. To deploy now, open a terminal window, then navigate to or
create a root directory for your web app.

Sign in to Google

firebase login

Initiate your project
Run this command from your app’s root directory:

firebase init

When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory
(the default is “public”). Then, run this command from your app’s root directory:

firebase deploy

After deploying, view your app at bby05-13448.web.app

Need help? Check out the Hosting docs

*/