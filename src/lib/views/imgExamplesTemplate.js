export const imgExamples = () => {
  let imgExamplesView = `
    <section class = "imgExamples" style="display:flex">`;
  for (let i = 0; i < 6; i += 1) {
    imgExamplesView += `<figure style="border:solid">
                      <img src="" alt="example" >
                    </figure>`;
  }
  imgExamplesView += `
    </section>`;
  return imgExamplesView;
};
