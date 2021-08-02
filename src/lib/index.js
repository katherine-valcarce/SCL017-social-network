/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
import { headerTemplateMobile } from './views/menuMobileTemplate.js';
// eslint-disable-next-line import/no-cycle
import { verificationTemplate } from './views/registerTemplate.js';
import { feedTemplate } from './views/principalFeedTemplate.js';

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const googleRegister = () => {
  const googleRegisterButton = document.querySelector('#googleRegisterButton');
  googleRegisterButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    const provider = new firebase.auth.GoogleAuthProvider();
    // eslint-disable-next-line no-use-before-define
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location.assign('#/feed');
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

    // eslint-disable-next-line no-use-before-define
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log('user', user);
      })
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        emailVerification();
        document.getElementById('root').innerHTML = verificationTemplate();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // eslint-disable-next-line eqeqeq
        if (errorCode == 'auth/email-already-in-use') {
          // eslint-disable-next-line no-alert
          alert('El correo electronico tiene asociada una cuenta, por favor inicie sesión');
        // eslint-disable-next-line eqeqeq
        } else if (errorCode == 'auth/invalid-email') {
          // eslint-disable-next-line no-alert
          alert('El correo no es valido');
        } else {
          // eslint-disable-next-line no-alert
          alert(errorMessage);
        }
        // ..
      });
  });
};
export const emailVerification = () => {
  // eslint-disable-next-line no-use-before-define
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    // Email verification sent!
  }).catch(() => {
    // An error happened
  });
};
export const authObserver = () => {
  // eslint-disable-next-line no-use-before-define
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var displayName = user.displayName;
      const email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      let messageVerifiedAccount = '';
      if (emailVerified === false) {
        messageVerifiedAccount = 'Email no verificado';
      } else {
        messageVerifiedAccount = 'Email verificado';
      }
      console.log('Logueado');
      console.log(email, messageVerifiedAccount, uid);
    } else {
      console.log('No Logueado');
    }
  });
};

export const logIn = () => {
  const loginButton = document.querySelector('#logInForm');

  loginButton.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#user').value;
    const password = document.querySelector('#pass').value;

    // eslint-disable-next-line no-use-before-define
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user.emailVerified) {
          // eslint-disable-next-line no-alert
          window.location.assign('#/feed');
        } else {
          // eslint-disable-next-line no-alert
          alert('debes verificar tu cuenta antes de continuar');
          // eslint-disable-next-line no-use-before-define
          firebase.auth().signOut();
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line eqeqeq
        if (errorCode == 'auth/user-not-found') {
          // eslint-disable-next-line no-alert
          alert('No tienes una cuenta creada, Registrate');
        // eslint-disable-next-line eqeqeq
        } else if (errorCode == 'auth/wrong-password') {
          // eslint-disable-next-line no-alert
          alert('Contraseña incorrecta');
        } else {
          // eslint-disable-next-line no-alert
          alert(errorMessage);
        }
      });
  });
};
export const googleLogIn = () => {
  const googleLogInButton = document.querySelector('#googleLoginButton');
  googleLogInButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    const provider = new firebase.auth.GoogleAuthProvider();
    // eslint-disable-next-line no-use-before-define
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // eslint-disable-next-line no-alert
        window.location.assign('#/feed');
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

// Botón para desplegar menu desde mobile //
export const menuMobile = () => {
  // eslint-disable-next-line no-shadow
  const menuMobile = document.querySelector('#menuMobileBtn');
  menuMobile.addEventListener('click', () => {
    document.getElementById('root').innerHTML = headerTemplateMobile();
  });
};

const db = firebase.firestore();
const updatePost = (id, updatedPost) => db.collection('Post').doc(id).update(updatedPost);
let id = '';
let editStatus = false;

// Funcion para guardar Post en BBDD de Firebase
export function savePostFirebase() {
  const descriptionPost = document.querySelector('#textPostInput');
  db.collection('Post').add({
    description: descriptionPost.value,
  });
}
// Funcion para actualizar el Feed
export const feedupdate = (callback) => {
  db.collection('Post').onSnapshot(callback);
};
// Funcion para recuperar los Post guardados en BBDD Firebase e insertarlos en el feed
export function getPostFirebase() {
  const postGridContainer = document.getElementById('postGrid');
  feedupdate((querySnapshot) => {
    postGridContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const textPost = doc.data();
      textPost.id = doc.id;
      postGridContainer.innerHTML += `<div class="newPost"> 
                <p> ${textPost.description} </p>
                <div id = "postLikesEditAndDeleteBtn" class = "postLikesEditAndDeleteBtn">
                <i class = "fa fa-heart"></i>
                <div id = "likes" class = "likesNumber"> 1 </div>
                <button class='btn-primary  btn-deletePost' data-id=${textPost.id}>Eliminar</button>
                <button class='btn-secondary btn-edit' data-id = ${textPost.id}>Editar</button>
              </div>
              </div>`;
      // Eliminar post
      // eslint-disable-next-line no-shadow
      const getPostToEdit = (id) => db.collection('Post').doc(id).get();

      // eslint-disable-next-line no-shadow
      function deletePost(id) {
        return db.collection('Post').doc(id).delete();
      }
      const btnDelete = document.querySelectorAll('.btn-deletePost');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
      const btnsEdit = document.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const postToEdit = await getPostToEdit(e.target.dataset.id);
          const editPostData = postToEdit.data();
          editStatus = true;
          id = textPost.id;
          const editPostBtn = document.querySelector('#btnPost');
          editPostBtn.innerHTML = 'Editar';

          const formPost = document.querySelector('#textPostInput');
          formPost.value = editPostData.description;
        });
      });
    });
  });
}
// eslint-disable-next-line no-shadow
export function editPost(id, updatedPost) {
  db.collecion('Post').doc(id).update(updatedPost);
}

// Funcion que contiene los eventos que suceden al hacer click en Enviar post
export function post() {
  const formPost = document.querySelector('#formPost');

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!editStatus) {
      await savePostFirebase();
    } else {
      await updatePost(id, {
        // eslint-disable-next-line no-undef
        description: description.value,
      });
    }
    formPost.reset();
  });
}
