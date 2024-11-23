// Import firebase functions
import { auth, signInWithEmailAndPassword, provider, signInWithPopup,GoogleAuthProvider, signInAnonymously  } from "../firebase.js";

//Call the Dom Elements from the HTML
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');

// Get the Login Button
let loginButton = document.getElementById('loginButton');

// Add Event Listener to the Login Button
loginButton.addEventListener('click', async(e) => {


      // SignIn function
      signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
            .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user, user.id);

                        Toastify({
                              text: "Login Successfully",
                              duration: 3000,
                              destination: "https://github.com/apvarun/toastify-js",
                              newWindow: true,
                              close: true,
                              gravity: "top", // `top` or `bottom`
                              position: "right", // `left`, `center` or `right`
                              stopOnFocus: true, // Prevents dismissing of toast on hover
                              style: {
                                    background: "linear-gradient(to right, #f6ad55, #f9cb93)",
                                    width: "200px",
                                    height: "50px",
                              },
                              onClick: function () { } // Callback after click
                        }).showToast();

                        setTimeout(()=>{
                              window.location.href = "../index.html"
                          },2000)
                        
                  })
                  .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        console.log(error);

                  });
})


// Get the Google Button
let googleButton = document.getElementById('googleButton');

// Add Event Listener to the Login Button
googleButton.addEventListener('click', (e) => {

      signInWithPopup(auth, provider)
            .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential = GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  // IdP data available using getAdditionalUserInfo(result)
                   console.log(user);
                   setTimeout(()=>{
                        window.location.href = "../index.html"
                    },2000)
                   
            }).catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential = GoogleAuthProvider.credentialFromError(error);
                  console.log(errorMessage);
            });


})


// Get the guest Button
let guestButton = document.getElementById('guestButton');

// Add Event Listener to the guest Button
guestButton.addEventListener('click', (e) => {

      signInAnonymously(auth)
      .then(() => {
            Toastify({
                  text: "Login as a guest",
                  duration: 3000,
                  destination: "https://github.com/apvarun/toastify-js",
                  newWindow: true,
                  close: true,
                  gravity: "top", // `top` or `bottom`
                  position: "right", // `left`, `center` or `right`
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                  style: {
                        background: "linear-gradient(to right, #f6ad55, #f9cb93)",
                        width: "200px",
                        height: "50px",
                  },
                  onClick: function () { } // Callback after click
            }).showToast();

            setTimeout(()=>{
                  window.location.href = "../index.html"
              },2000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("guest Login " + errorMessage);
        
      });

});

