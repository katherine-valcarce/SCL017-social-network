/* eslint-disable no-unused-vars */
import { headerTemplateMobile } from './views/menuMobileTemplate.js';
import { verificationTemplate } from './views/registerTemplate.js';
import { EditPost } from './views/EditPost.js';

export const googleLogIn = () => {
  const googleLoginButton = document.querySelector('#googleLoginButton');
  googleLoginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location.assign('#/feed');
        console.log('user', user); // BORRAR CONSOLELOG DESPUÉS DE PROBAR!
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
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
        const user = userCredential.user;
        // ...
        console.log('user', user);
      })
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        emailVerification();
        document.getElementById('root').innerHTML = verificationTemplate();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
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

// Botón para desplegar menu desde mobile //
export const menuMobile = () => {
  const menuMobileBtn = document.querySelector('#menuMobileBtn');
  menuMobileBtn.addEventListener('click', () => {
    document.getElementById('root').innerHTML = headerTemplateMobile();
  });
};
// ----- POST ---------
const db = firebase.firestore();
// Función para tomar el nombre e imagen del usuario
export function userNameImg() {
  const userName = document.getElementById('profileName');
  const userImg = document.getElementById('userPhoto');

  firebase.auth().onAuthStateChanged((user) => {
    const displayName = user.displayName;
    const userPhoto = user.photoURL;
    userName.textContent = displayName;
    userImg.style.backgroundImage = `url(${userPhoto})`;
  });
}
// Funcion para agregar la fecha del post
function date() {
  function addZero(i) {
    if (i < 10) {
      // eslint-disable-next-line no-param-reassign
      i = `0${i}`;
    }
    return i;
  }
  const hoy = new Date();
  let second = hoy.getSeconds();
  let hour = hoy.getHours();
  let minute = hoy.getMinutes();
  let dd = hoy.getDate();
  let mm = hoy.getMonth() + 1;
  const yyyy = hoy.getFullYear();

  second = addZero(second);
  hour = addZero(hour);
  minute = addZero(minute);
  dd = addZero(dd);
  mm = addZero(mm);
  return `${dd}/${mm}/${yyyy}   ${hour}:${minute}:${second} hrs`;
}

// Funcion para guardar Post en BBDD de Firebase
export function savePostFirebase() {
  const descriptionPost = document.querySelector('#textPostInput');
  const user = firebase.auth().currentUser;
  db.collection('Post').add({
    user: user.displayName,
    description: descriptionPost.value,
    fecha: date(),
    like: [],
  });
}
// Funcion para actualizar el Feed y ordenar post
export const feedupdate = (callback) => {
  db.collection('Post').orderBy('fecha', 'desc').onSnapshot(callback);
};
// Funcion que contiene los eventos que suceden al hacer click en Enviar post
export function post() {
  const formPost = document.querySelector('#formPost');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    savePostFirebase();
    formPost.reset();
  });
}
// Funcion para recuperar los Post guardados en BBDD Firebase e insertarlos en el feed
export function getPostFirebase() {
  const postGridContainer = document.getElementById('postGrid');
  feedupdate((querySnapshot) => {
    postGridContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const textPost = doc.data();
      textPost.id = doc.id;
      const getArrayLikes = textPost.like;
      const NumberLikes = getArrayLikes.length;
      postGridContainer.innerHTML += `<div class="newPost"> 
                <p> ${textPost.user} dice : </p> 
                <p> ${textPost.description} </p>
                <div class="divLikesEditDelete">
                <i class='fa fa-heart btn-likePost' id="btnLike" data-id=${textPost.id} ></i>
                <div id = "numLikes" class = "numLikes" data-id=${textPost.id}><p> ${NumberLikes} Me gusta</p></div>
                <button class='btn-primary  btn-deletePost' data-id=${textPost.id}>Eliminar</button>
                <button class='btn-secondary btn-editPost'  data-id=${textPost.id}>Editar</button>
                </div>
              </div>`;
      // Eliminar post
      const deletePost = (id) => db.collection('Post').doc(id).delete();
      const btnDelete = document.querySelectorAll('.btn-deletePost');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
      // Dar Like (corazón)
      const likeBtn = document.querySelectorAll('.btn-likePost');
      likeBtn.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          // obteniendo ID del post clikeado
          const getPost = (id) => db.collection('Post').doc(id).get();
          const data = await getPost(e.target.dataset.id);
          const idData = (data.id);
          const getData = data.data();
          const getArrayLike = getData.like;
          console.log(getArrayLike);
          // obteniendo nombre de usuario que hace like
          firebase.auth().onAuthStateChanged((user) => {
            const userName = user.displayName;
            const likesRef = db.collection('Post').doc(idData);
            console.log(userName);
            const findLike = getArrayLike.includes(userName);
            const btnLikes = document.getElementById('.btn-likePost');
            // eslint-disable-next-line eqeqeq
            if (findLike == true) {
              console.log('dislike');
              likesRef.update({
                like: firebase.firestore.FieldValue.arrayRemove(userName),
              });
              document.getElementById('btnLike').className = 'fa fa-heart btn-likePost';
            } else {
              console.log('agregado tu like a la BBDD');
              likesRef.update({
                like: firebase.firestore.FieldValue.arrayUnion(userName),
              });
            }
          });
        });
      });

      // Editar post
      const btnEdit = document.querySelectorAll('.btn-editPost');
      btnEdit.forEach((btnE) => btnE.addEventListener('click', async (e) => {
        document.getElementById('root').innerHTML += EditPost();

        const editPost = (id) => db.collection('Post').doc(id).get();
        const getEditPost = await editPost(e.target.dataset.id);
        const editPostData = getEditPost.data();
        const idPostedit = (getEditPost.id);

        const formPost = document.querySelector('#textPostInputEdit');
        formPost.value = editPostData.description;

        console.log(idPostedit);
        // --------------
        const EditPostBtn = document.querySelector('#btnPostEdit');

        EditPostBtn.addEventListener('click', async () => {
          e.preventDefault();
          const edit = db.collection('Post').doc(idPostedit);
          edit.update({
            description: document.getElementById('textPostInputEdit').value,
          });
          const containerEdit = await document.getElementById('containerEdit');
          containerEdit.remove();
          getPostFirebase();
        });
      }));
    });
  });
}

// Función paara cerrar sesión
export const signOutLogin = () => {
  const signOutBtn = document.getElementById('signOut');
  signOutBtn.addEventListener('click', async () => {
    await firebase.auth().signOut()
      .then(() => {
        console.log('Sesion finalizada');
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  });
};
