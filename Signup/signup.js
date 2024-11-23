import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js"

let signupButton = document.getElementById("signupButton");
signupButton.addEventListener("click", () => {
      let signupEmail = document.getElementById("signupEmail").value
      let signupPassword = document.getElementById("signupPassword").value

      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  console.log(user, user.id);

                  Toastify({
                        text: "Signup Successfully",
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


            })
            .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(error, errorMessage);

            });

})

onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setTimeout(()=>{
            window.location.href = "../index.html"
        },2000)
        
      } 
    });
    