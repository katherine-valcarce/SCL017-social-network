export const EditPost = () => {
  const editPostTemplate = `<div class="containerEdit" id="containerEdit"> 
            <div class="postEdit">     
                <form id="formPostEdit" class= "formPostEdit">
                    <div class="modal-header">
                                             
                    </div>
                        <input type="text" id= "textPostInputEdit" class="textPostInputEdit" />
                        <button id="btnPostEdit" type="submit" > Editar Post</button>
                        <button id="close" class="close">CERRAR</button>  
                </form> 
            </div> 
        </div> `;
  return editPostTemplate;
};
