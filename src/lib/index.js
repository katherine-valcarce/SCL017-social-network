/* eslint-disable no-unused-vars */
import { headerTemplateMobile } from './views/menuMobileTemplate.js';
import { verificationTemplate } from './views/registerTemplate.js';
import { EditPost } from './views/EditPost.js';
// eslint-disable-next-line import/no-cycle
import { displayRespectiveTemplate } from './router.js';
import { menuFeedTemplateMobile } from './views/MenuMobileFeed.js';
import { friendsFeedTemplateMobile } from './views/menuFriendsMobileFeed.js';

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
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
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
        const user = userCredential.user;
        // ...
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
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const emailVerified = user.emailVerified;
      let messageVerifiedAccount = '';
      if (emailVerified === false) {
        messageVerifiedAccount = 'Email no verificado';
      } else {
        messageVerifiedAccount = 'Email verificado';
      }
    }
  });
};

export const logIn = () => {
  const loginButton = document.querySelector('#logInForm');

  loginButton.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#user').value;
    const password = document.querySelector('#pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          window.location.assign('#/feed');
        } else {
          // eslint-disable-next-line no-alert
          alert('debes verificar tu cuenta antes de continuar');
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
export function menuFeedMobile() {
  // Abrir menu en feed desde version mobile
  const btnmenuFeedMobile = document.getElementById('btnMenuFeedMobile');
  btnmenuFeedMobile.addEventListener('click', () => {
    const feed = document.getElementById('containerFeedTemplate');
    feed.innerHTML += menuFeedTemplateMobile();
    // Cerrar menu en feed desde version mobile
    const closeMenuMobile = document.getElementById('closeMenuMobile');
    closeMenuMobile.addEventListener('click', () => {
      document.getElementById('wallMenuMobile').remove();
      menuFeedMobile();
      displayRespectiveTemplate('#/feed');
    });
  });
}
export function friendsFeedMobile() {
  // Abrir pestaña amigos en feed desde version mobile
  const btnFriendsFeedMobile = document.getElementById('btnFriendsFeedMobile');
  btnFriendsFeedMobile.addEventListener('click', () => {
    const feed = document.getElementById('containerFeedTemplate');
    feed.innerHTML += friendsFeedTemplateMobile();
    // Cerrar menu en feed desde version mobile
    const closeMenuMobile = document.getElementById('closeMenuMobile');
    closeMenuMobile.addEventListener('click', () => {
      document.getElementById('suggestionsAndFriendsMobile').remove();
      menuFeedMobile();
      friendsFeedMobile();
      displayRespectiveTemplate('#/feed');
    });
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
      postGridContainer.innerHTML += `<div class="newPost"> 
                <p class "userTextPost"> <b> ${textPost.user} </b> dice : </p> 
                <p> ${textPost.description} </p>
                <div class="divLikesEditDelete">
                <i class='fa fa-heart btn-likePost' id="btnLike" style='font-size:25px;' data-id=${textPost.id} ></i>
                <div id = "numLikes" class = "numLikes" data-id=${textPost.id}>${textPost.like.length} </div>
                <i class='fa fa-trash  btn-deletePost' style='font-size:27px;' data-id=${textPost.id}></i>
                <i class='fa fa-edit  btn-editPost' style='font-size:25px;' data-id=${textPost.id}></i>
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
          const docPost = await getPost(e.target.dataset.id);
          const idDocData = (docPost.id);
          const likesRef = db.collection('Post').doc(idDocData);
          const usuario = firebase.auth().currentUser;

          likesRef.get('like').then((postData) => {
            const likesArray = postData.data().like;
            // este es el array con los usuarios que le dieron like al post

            if (likesArray.includes(usuario.uid)) { // chequear si el id del usuario ya le dio like
              //   sacar el id del array
              likesRef.update({
                like: firebase.firestore.FieldValue.arrayRemove(usuario.uid),
              });
              // cambiar de color a negro (o normal)
            } else {
              // agregar el id al array
              likesRef.update({
                like: firebase.firestore.FieldValue.arrayUnion(usuario.uid),
              });
              // cambiar de color a rojo
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
          menuFeedMobile();
        });
        const btnCancelEdit = document.getElementById('btnPostCancelEdit');
        btnCancelEdit.addEventListener('click', () => {
          const containerEdit = document.getElementById('containerEdit');
          containerEdit.remove();
          getPostFirebase();
          menuFeedMobile();
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
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  });
};
