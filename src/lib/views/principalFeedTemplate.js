export const feedTemplate = () => {
  const feedHTML = `<div id= "containerFeedTemplate" class= "containerFeedTemplate">
  <div id= "headerFeedTemplate" class= "headerFeedTemplate"> 
    <nav class ="categoriesDesktopFeed">CATEGORIAS </nav>
      <nav class = "categoriesMenu">
      <i class= "fa fa-bars" id='btnMenuFeedMobile'></i></nav>
      <div class = "searchInputBar">
      <i class= "fa fa-search"></i>
      <input type="text" id="searchProjects" class= "searchProjectsInput" onkeyup="searchFunction()" placeholder="¿Qué proyecto quieres hacer hoy?">
      </div>
      <div class = "friendsIcon">
      <i id='btnFriendsFeedMobile' class= "fa fa-users" ></i>
      </div>
  </div>
  <div id= "containerWallFeedTemplate" class= "containerWallFeedTemplate" >
      <div id= "wallMenu" class = "wallMenu">
          <div class="sidebar">
              <a href="#home" class= "wallMenuCategories"> Inicio</a>
              <a href="#profile" class= "wallMenuCategories"> Mi Perfil</a>
              <a href="#notifications" class= "wallMenuCategories"> Notificaciones</a>
              <a href="#messages" class= "wallMenuCategories">  Mensajes</a>
              <a href="#saved" class= "wallMenuCategories"> Guardados</a>
              <a href="#subscription" class= "wallMenuCategories">Suscripciones</a>
              <a href="#settings"class= "wallMenuCategories">Configuración</a>
              <a href="" class= "wallMenuCategoriesCloseDesktop" id="signOut"> Cerrar Sesión</a>
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
             <h1 class='titleSuggestionsAndFriends'>Sugerencias</h1>
              <div class='suggestions'>
                <img src='img/suggestions1.png' alt="Sugerencia de amistad" class= "suggestionsPicture" />
                <p class='nameSuggestions'>elba.lazo</p>
              </div>
              <p class='categorySuggestions'>Macramé</p>
              <div class='suggestions'>
                <img src='img/suggestions2.png' alt="Sugerencia de amistad" class= "suggestionsPicture" />
                <p class='nameSuggestions'>elmer.figueroa</p>
              </div>
              <p class='categorySuggestions'>Origami</p>
              <div class='suggestions'>
                <img src='img/suggestions3.png' alt="Sugerencia de amistad" class= "suggestionsPicture" />
                <p class='nameSuggestions'>maría.mercedes</p>
              </div>
              <p class='categorySuggestions'>Carpintería</p>
        </div>
        <div class='FriendsDiv'>
            <h1 class='titleSuggestionsAndFriends'>Amigos</h1>
              <div class='friend'>
                <img src='img/friend1.png' alt="Amigos" class= "suggestionsPicture" />
                <p class='nameSuggestions'>juanita.perez</p>
              </div>
              <p class='categoryFriend'>Tejido</p>
              <div class='friend'>
                <img src='img/friend2.png' alt="Amigos" class= "suggestionsPicture" />
                <p class='nameSuggestions'>lola.mento</p>
               </div>
              <p class='categoryFriend'>Tejido</p>
              <div class='friend'>
                <img src='img/friend3.png' alt="Amigos" class= "suggestionsPicture" />
                <p class='nameSuggestions'>Clarita.deguevo</p>
             </div>
              <p class='categoryFriend'>Tejido</p>
       </div>
  </div>
</div>`;
  return feedHTML;
};
