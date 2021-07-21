/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
import { headerTemplateMobile } from './views/menuMobileTemplate.js';

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const googleRegister = () => {
  const googleRegisterButton = document.querySelector('#googleRegisterButton');
  googleRegisterButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('user', user); // BORRAR CONSOLELOG DESPUÉS DE PROBAR!
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('error', errorMessage); // BORRAR CONSOLELOG DESPUÉS DE PROBAR
        // ...
      });
  });
};

export const register = () => {
  const registerForm = document.querySelector('#registerForm');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log('user', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });

  /*     const emailVerification = () => {
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
        // Email verification sent!
        // ...
        });
    }; */
  });
};

export const authObserver = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log('Logueado');
      console.log(email);
    } else {
      console.log('No Logueado');
    }
  });
};
export const menuMobile = () => {
  // eslint-disable-next-line no-shadow
  const menuMobile = document.querySelector('#menuMobileBtn');
  menuMobile.addEventListener('click', () => {
    document.getElementById('root').innerHTML = headerTemplateMobile();
  });
};
