export const feedTemplate = () => {
  const feedHTML = `<div id= "containerFeedTemplate" class= "containerFeedTemplate">
  <div id= "headerFeedTemplate" class= "headerFeedTemplate"> 
    <nav class ="categoriesDesktopFeed">CATEGORIAS </nav>
      <nav class = "categoriesMenu">
      <i class= "fa fa-bars"></i></nav>
      <div class = "searchInputBar">
      <i class= "fa fa-search"></i>
      <input type="text" id="searchProjects" class= "searchProjectsInput" onkeyup="searchFunction()" placeholder="¿Qué proyecto quieres hacer hoy?">
      </div>
      <div class = "friendsIcon">
      <i class= "fa fa-users" ></i>
      </div>
  </div>
  <div id= "containerWallFeedTemplate" class= "containerWallFeedTemplate" >
      <div id= "wallMenu" class = "wallMenu">
          <div class="sidebar">
              <a href="#home" class= "wallMenuCategories"> Inicio</a>
              <a href="#notifications" class= "wallMenuCategories"> Notificaciones</a>
              <a href="#messages" class= "wallMenuCategories">  Mensajes</a>
              <a href="#saved" class= "wallMenuCategories"> Guardados</a>
              <a href="#subscription" class= "wallMenuCategories">Suscripciones</a>
              <a href="#profile" class= "wallMenuCategories"> Mi Perfil</a>
              <a href="#settings"class= "wallMenuCategories">Configuración</a>
              <a href="" class= "wallMenuCategories" id="signOut"> Cerrar Sesión</a>
           </div>
      </div>
      <div id= "postAreaContainer" class= "postAreaContainer">
          <div id= "postContainer" class = "postContainer">
              <div id = "profilePic" class= "profilePic">
                  <img alt="" id="userPhoto" class= "profilePicture"/>
                  <div id = "profileName" class = "profileName"> Susana Horia</div>
              </div>
              <div id = "postInputContainer" class= "postInputContainer" >
                  <div id ="uploadPicAndPostButtonContainer" class= "uploadPicAndPostButtonContainer">
                      <form id="formPost" class= "formPost">
                            <input type="text" id= "textPostInput" class="textPostInput"  placeholder="¿Cómo va tu proyecto? ¡Cuéntanos!" />
                            <div id = "btnpostAndUploadPic" class = "btnpostAndUploadPic">
                            <div class = "uploadPicDiv">
                            <i class= "fa fa-camera" > </i> 
                            <div class = "uploadYourPicBtn"> Sube tu foto</div> 
                            </div>
                            <button id="btnPost" type="submit" class = "btn-post"> Compartir </button>
                            </div>
                            </form>
                  </div>
              </div>
          </div>
          <div id = "postGrid" class ="postGrid">
          </div>
      </div>
      <div id = "suggestionsAndFriendsContainer" class= "suggestionsAndFriendsContainer">
        <div class='suggestionsDiv'>
             <h1>Sugerencias</h1>
              <div class='suggestions1'>
                <img src='' alt="Sugerencia de amistad" class= "suggestionsPicture" />
                <p>elba.lazo</p>
              </div>
              <p>.Macramé</p>
              <div class='suggestions2'>
                <img src='' alt="Sugerencia de amistad" class= "suggestionsPicture" />
                <p>elmer.figueroa.lazo</p>
              </div>
              <p>.Origami</p>
              <div class='suggestions3'>
                <img src='' alt="Sugerencia de amistad" class= "suggestionsPicture" />
                <p>maría.mercedes</p>
              </div>
              <p>.Carpintería</p>
        </div>
        <div class='FriendsDiv'>
            <h1>Amigos</h1>
              <div class='friend1'>
              </div>
              <div class='friend2'>
              </div>
              <div class='friend3'>
              </div>
       </div>
  </div>
</div>`;
  return feedHTML;
};
