export const EditPost = () => {
  const editPostTemplate = `<div class="containerEdit" id="containerEdit"> 
  <div class="modal-header">
            
  <div class="postEdit">     
                <form id="formPostEdit" class= "formPostEdit">
                        <div id="btnPostCancelEdit" class = "btnPostCancelEdit" > Cancelar </div>
                        <input type="text"  id= "textPostInputEdit" class="textPostInputEdit" />
                        <button id="btnPostEdit" class = "btnPostEdit" type="submit" > Editar</button>
                </form> 
            </div> 
            </div>
        </div> `;
  return editPostTemplate;
};
