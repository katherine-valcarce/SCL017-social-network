export const feedTemplate = () => {
  const feedHTML = `¨<div id= "containerFeedTemplate" class= "containerFeedTemplate">
  <div id= "headerFeedTemplate" class= "headerFeedTemplate"> 
      <nav class = "categoriesMenu">Categorías</nav>
      <input type="text" id="searchProjects" class= "searchProjectsInput" onkeyup="searchFunction()" placeholder="¿Qué proyecto quieres hacer hoy?">
  </div>
  <div id= "containerWallFeedTemplate" class= "containerWallFeedTemplate" >
      <div id= "wallMenu" class = "wallMenu">
          <div class="sidebar">
              <a href="#home"><i class="fa fa-fw fa-home"></i> Inicio</a>
              <a href="#notifications"><i class="fa fa-bell"></i> Notificaciones</a>
              <a href="#messages"><i class="fa fa-fw fa-envelope"></i> Mensajes</a>
              <a href="#saved"><i class="fa fa-bookmark"></i> Guardados</a>
              <a href="#subscription"><i class="fa fa-address-card-o"></i> Suscripciones</a>
              <a href="#profile"><i class="fa fa-user-circle"></i> Mi Perfil</a>
              <a href="#settings"><i class="fa fa-cog"></i> Configuración</a>
              <a href="#closeSession"><i class="fa fa-times-circle"></i> Cerrar Sesión</a>
        </div> 
      </div>
      <div id= "postAreaContainer" class= "postAreaContainer">
          <div id= "postContainer" class = "postContainer">
              <div id = "profilePic" class= "profilePic">
                  <img src="profilepic.jpg" alt="" class= "profilePicture">
                  <div id = "profileName" class = "profileName"> Susana Horia</div>
              </div>
              <div id = "postInputContainer" class= "postInputContainer" >
                  <input type= "text" id= "textPostInput" class="textPostInput"  placeholder="¿Cómo va tu proyecto? ¡Cuéntanos!">
                  <div id ="uploadPicAndPostButtonContainer" class= "uploadPicAndPostButtonContainer">
                      <i class= "fa fa-camera"></i>
                      <form action="/action_page.php" class= "formPost">
                      <input type="file" id="myFile" name="filename">
                      <input type="submit" >
                      </form>
                  </div>
              </div>
          </div>
          <div id = "postGrid" class ="postGrid">
              hola hola
          </div>
      </div>
      <div id = "suggestionsAndFriendsContainer" class= "suggestionsAndFriendsContainer">
      </div>
  </div>
</div>`;
  return feedHTML;
};
