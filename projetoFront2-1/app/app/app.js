//Função para a criação de cards
let elements = 0
let urlImg = ""
let title = ""
let description = ""



function createCard() {
    title = document.getElementById("carName").value
    description = document.getElementById("carValor").value
    urlImg = document.getElementById("url_img").value


    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `<div class= "cdi"><img src="${urlImg}">
                                    <h2>${title}</h2>
                                    <p>${description}<p></div>`;
}

function form() {
  document.getElementById('form').style.display='block';
}

function fechar() {
    document.getElementById('form').style.display='none';
}