const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSwvhlhYKMXG9lep4iiuHh0JVzjSY2kBE",
    authDomain: "iotlab-f212a.firebaseapp.com",
    projectId: "iotlab-f212a",
    storageBucket: "iotlab-f212a.appspot.com",
    messagingSenderId: "1037560476724",
    appId: "1:1037560476724:web:0bc193c67ea638a6918661"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//----------------------------------------------------------------------------------



// SignIN Function
const LoginIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Redirect to index.html after successful login
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Display error message on the UI
            switch (error.code) {
                case 'auth/invalid-email':
                    emailError.textContent = "Invalid email";
                    passwordError.textContent = "";
                    break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    emailError.textContent = "";
                    passwordError.textContent = "Incorrect password";
                    break;
                default:
                    emailError.textContent = "Invalid email or password";
                    passwordError.textContent = "";
            }
            emailError.style.color = 'red';
            passwordError.style.color = 'red';
        });
}

//--------------------------------------------------------------------------------------

// Logout Function
const logout = () => {
    firebase.auth().signOut().then(() => {
        // Redirect to AdminLogin.html after successful logout
        console.log("logout clicked");
        window.location.href = 'AdminLogin.html';
    }).catch((error) => {
        // An error happened.
        console.error('Logout Error:', error);
    });
};


//---------------------------------------------------------------------------

//-----------------ye update wali chz add krne s phle ka code---------------------------------

// // ShowData Function On Ui

// const populateTable = () => {
//     var users = db.collection("users");
//     const tbody = document.querySelector('tbody');

//     users.get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             const userData = doc.data();
//             const tr = document.createElement('tr');

//             tr.innerHTML = `
//                 <td>${doc.id}</td>
//                 <td>${userData.UserName}</td>
//                 <td>${userData.Password}</td>
//                 <td>${userData.Role}</td>

//                 <td>
//                     <button class="btn btn-delete" onclick="deleteUser('${doc.id}')">Delete</button>
//                     <button class="btn btn-update">Update</button>
//                 </td>
//             `;

//             tbody.appendChild(tr);
//         });
//     });
// }
// // Function to open modal with existing data

// //------------------------------------------------------------------------------------------------------

// //Delete Function
// const deleteUser = (userId) => {
//     db.collection("users").doc(userId).delete().then(() => {
//         console.log("Document successfully deleted!");
//         // Refresh the table after deletion
//         // populateTable();
//         // Display success message
//         showSnackbar("Document successfully deleted from database.");
//     }).catch((error) => {
//         console.error("Error removing document: ", error);
//     });
// }
// //----------------------------------------------------------------------------------------------

// //snackbar code

// const showSnackbar = (message) => {
//     var snackbar = document.getElementById("snackbar");
//     snackbar.textContent = message;
//     snackbar.className = "show";
//     snackbar.style.backgroundColor = "#f44336"; // Red color
//     setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
// }






// //------------------------






// populateTable();


//-----------------ye update wali chz add krne s phle ka code---------------------------------


const populateTable = () => {
    var users = db.collection("users");
    const tbody = document.querySelector('tbody');

    users.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const userData = doc.data();
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${doc.id}</td>
                <td>${userData.UserName}</td>
                <td>${userData.Password}</td>
                <td>${userData.Role}</td>

                <td>
                    <button class="btn btn-delete" onclick="deleteUser('${doc.id}')">Delete</button>
                    <button class="btn btn-update" onclick="openUpdateModal('${doc.id}')">Update</button>
                </td>
            `;

            tbody.appendChild(tr);
        });
    });
}

const deleteUser = (userId) => {
    db.collection("users").doc(userId).delete().then(() => {
        console.log("Document successfully deleted!");
        showSnackbar("Document successfully deleted from database.");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

const showSnackbar = (message) => {
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = "show";
    snackbar.style.backgroundColor = "#f44336"; // Red color
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

populateTable();

// Function to open modal with existing data and redirect to update.html
const openUpdateModal = (userId) => {
    // Redirect the user to update.html with the user ID as a query parameter
    window.location.href = `update.html?userId=${userId}`;
}

