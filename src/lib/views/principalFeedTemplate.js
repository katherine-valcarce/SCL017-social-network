export const feedTemplate = () => {
  const feedHTML = `<div id= "containerFeedTemplate" class= "containerFeedTemplate">
  <div id= "headerFeedTemplate" class= "headerFeedTemplate"> 
      <nav class = "categoriesMenu">
      <i class= "fa fa-bars"></i></nav>
      <div class = "searchInputBar">
      <i class= "fa fa-search" ></i>
      <input type="text" id="searchProjects" class= "searchProjectsInput" onkeyup="searchFunction()" placeholder="¿Qué proyecto quieres hacer hoy?">
      </div>
      <div class = "friendsIcon">
      <i class= "fa fa-users" ></i>
      </div>
  </div>
  <div id= "containerWallFeedTemplate" class= "containerWallFeedTemplate" >
      <div id= "wallMenu" class = "wallMenu">
          <div class="sidebar">
              <a href="#home" class= "wallMenuCategories"><i class="fa fa-fw fa-home" ></i> Inicio</a>
              <a href="#notifications" class= "wallMenuCategories"><i class="fa fa-bell"></i> Notificaciones</a>
              <a href="#messages" class= "wallMenuCategories"><i class="fa fa-fw fa-envelope"></i> Mensajes</a>
              <a href="#saved" class= "wallMenuCategories"><i class="fa fa-bookmark"></i> Guardados</a>
              <a href="#subscription" class= "wallMenuCategories"><i class="fa fa-address-card-o"></i> Suscripciones</a>
              <a href="#profile" class= "wallMenuCategories"><i class="fa fa-user-circle"></i> Mi Perfil</a>
              <a href="#settings"class= "wallMenuCategories"><i class="fa fa-cog"></i> Configuración</a>
              <a href="" class= "wallMenuCategories" id="signOut"><i class="fa fa-times-circle"></i> Cerrar Sesión</a>
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
      </div>
  </div>
</div>`;
  return feedHTML;
};
