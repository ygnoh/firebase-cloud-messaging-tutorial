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
messaging.requestPermission()
    .then(() => {
        console.log("have permission");
        return messaging.getToken();
    })
    .then(token => {
        console.log(token);
    })
    .catch(err => {
        console.log("error occured: ", err);
    })