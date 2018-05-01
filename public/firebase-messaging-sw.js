importScripts("https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js");

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBYZa9JdF_mmkUf7Yo1lWJm9w7YQ5ULr2s",
    authDomain: "tutorial-69a13.firebaseapp.com",
    databaseURL: "https://tutorial-69a13.firebaseio.com",
    projectId: "tutorial-69a13",
    storageBucket: "",
    messagingSenderId: "927229004284"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
    const title = "hello";
    const options = {
        body: payload.data.status
    }
    return self.registration.showNotification(title, options);
});