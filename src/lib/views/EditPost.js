export const EditPost = () => {
  const editPostTemplate = `<div class="containerEdit" id="containerEdit"> 
  <div class="modal-header">
            
  <div class="postEdit">     
                <form id="formPostEdit" class= "formPostEdit">
                                             
                    
                        <input type="text"  id= "textPostInputEdit" class="textPostInputEdit" />
                        <button id="btnPostEdit" class = "btnPostEdit" type="submit" > Editar Post</button>
                </form> 
            </div> 
            </div>
        </div> `;
  return editPostTemplate;
};
