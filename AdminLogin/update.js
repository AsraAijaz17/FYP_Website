
        // Extract user ID from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');

        // Get user data and prepopulate form fields
        const userRef = db.collection("users").doc(userId);
        userRef.get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                document.getElementById('updateUserName').value = userData.UserName;
                document.getElementById('updatePassword').value = userData.Password;
                document.getElementById('updateRole').value = userData.Role;
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        // Form submission logic
        document.getElementById('updateForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Get updated values from form fields
            const updatedUserName = document.getElementById('updateUserName').value;
            const updatedPassword = document.getElementById('updatePassword').value;
            const updatedRole = document.getElementById('updateRole').value;

            // Update the data in Firestore
            userRef.update({
                UserName: updatedUserName,
                Password: updatedPassword,
                Role: updatedRole
            }).then(() => {
                console.log("Document successfully updated!");


            }).catch((error) => {
                console.error("Error updating document: ", error);
            });
        });





