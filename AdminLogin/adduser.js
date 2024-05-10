const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSwvhlhYKMXG9lep4iiuHh0JVzjSY2kBE",
    authDomain: "iotlab-f212a.firebaseapp.com",
    projectId: "iotlab-f212a",
    storageBucket: "iotlab-f212a.appspot.com",
    messagingSenderId: "1037560476724",
    appId: "1:1037560476724:web:0bc193c67ea638a6918661"
});

const db = firebaseApp.firestore();

const addUserForm = document.getElementById('addUserForm');



addUserForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = addUserForm['username'].value;
    const password = addUserForm['password'].value;
    const role = addUserForm['role'].value;

    // Add user to Firestore
    db.collection("users").add({
        UserName: username,
        Password: password,
        Role: role
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("User added successfully!");
            // Redirect to user table page

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            alert("Error adding user. Please try again later.");
        });
});
