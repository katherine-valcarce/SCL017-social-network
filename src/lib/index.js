/* eslint-disable no-unused-vars */
import { headerTemplateMobile } from './views/menuMobileTemplate.js';
import { verificationTemplate } from './views/registerTemplate.js';
import { EditPost } from './views/EditPost.js';

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
        const credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // eslint-disable-next-line no-alert
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

// Botón para desplegar menu desde mobile //
export const menuMobile = () => {
  // eslint-disable-next-line no-shadow
  const menuMobile = document.querySelector('#menuMobileBtn');
  menuMobile.addEventListener('click', () => {
    document.getElementById('root').innerHTML = headerTemplateMobile();
  });
};
// ----- POST ---------
const db = firebase.firestore();
let editStatus = false;
// Funcion para guardar Post en BBDD de Firebase
export function savePostFirebase() {
  const descriptionPost = document.querySelector('#textPostInput');
  const user = firebase.auth().currentUser;
  db.collection('Post').add({
    user: user.email,
    description: descriptionPost.value,
  });
}
// Funcion para actualizar el Feed
export const feedupdate = (callback) => {
  db.collection('Post').onSnapshot(callback);
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
      postGridContainer.innerHTML += `<div class="newPost"> 
                <p> ${textPost.user} dice : </p> 
                <p> ${textPost.description} </p>
                <div class = "divLikesEditDelete">
                <i class='fa fa-heart btn-likePost'  data-id=${textPost.id} ></i>
                <div id = "numLikes" class = "numLikes" >2</div>
                <button class='btn-primary  btn-deletePost' data-id=${textPost.id}>Eliminar</button>
                <button class='btn-secondary btn-editPost'  data-id=${textPost.id} >Editar</button>
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
      // Editar post
      const btnEdit = document.querySelectorAll('.btn-editPost');
      btnEdit.forEach((btn) => btn.addEventListener('click', async (e) => {
        document.getElementById('root').innerHTML += EditPost();

        const editPost = (id) => db.collection('Post').doc(id).get();
        const getEditPost = await editPost(e.target.dataset.id);
        const editPostData = getEditPost.data();
        const idPostedit = (getEditPost.id);

        editStatus = true;

        const formPost = document.querySelector('#textPostInputEdit');
        formPost.value = editPostData.description;

        console.log(idPostedit);
        // --------------
        const EditPostBtn = document.querySelector('#formPostEdit');

        EditPostBtn.addEventListener('submit', async () => {
          e.preventDefault();
          const edit = db.collection('Post').doc(idPostedit);
          edit.update({
            description: document.getElementById('textPostInputEdit').value,
          });
          const containerEdit = document.getElementById('containerEdit');
          containerEdit.remove();
          getPostFirebase();
        });
        document.getElementById('close').addEventListener('click', () => {
          const containerEdit = document.getElementById('containerEdit');
          containerEdit.remove();
          getPostFirebase();
        });
      }));
      // Like
      const likeBtn = document.querySelectorAll('.btn-likePost');

      likeBtn.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          console.log(textPost);
        });
      });
    });
  });
}

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
/* export const showPost = () => {
  const db = firebase.firestore();
  db.collection('Post').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const idText = doc.id;
      const text = doc.data().textPost;
      const postGrid = document.querySelector('#postGrid');
      const newPost1 = document.createElement('div');
      newPost1.textContent = text;
      newPost1.className = 'newPost1';
      postGrid.appendChild(newPost1);
      document.querySelector('#postGrid').appendChild(newPost1);
    });
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
        textPost: textPost.value,
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          db.collection('Post').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const text = docRef.data().textPost;
              if (doc) {
                const newPost = document.createElement('div');
                newPost.className = 'divNuevo';
                const textNewPost = document.createTextNode(text);
                newPost.appendChild(textNewPost);
                document.getElementById('postGrid').appendChild(newPost);

                // console.log(`${doc.id} => ${doc.data()}`);
                console.log(text);
              }
            });
          });
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
    formPost.reset();
  });
}; */
