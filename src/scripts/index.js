import {products,categories} from "./productsData.js"

function createCard(product){
  const cardsContainer = document.querySelector(".cards__container")
  cardsContainer.innerHTML = "";
  
  products.forEach(product => {
  const cardBox = document.createElement("div")
  const figure = document.createElement("figure")
  const image = document.createElement("img")
  const divCard = document.createElement("div")
  const cardNameAlbum = document.createElement("div")
  const albumTitle = document.createElement("h3")
  const albumAge = document.createElement("p")
  const titleNameBand = document.createElement("h3")
  const cardValueButton = document.createElement("div")
  const cardValue = document.createElement("p")
  const cardButton = document.createElement("button")

  cardBox.classList.add("card-box")
  divCard.classList.add("div-card")
  cardNameAlbum.classList.add("card-name-album")
  cardValueButton.classList.add("card-value-button")
  albumTitle.classList.add("album-title")
  albumAge.classList.add("album-age")
  cardValue.classList.add("card-value")
  cardButton.classList.add("card-button")

  image.src = product.img
  albumTitle.innerText = product.band
  albumAge.innerText = product.year
  titleNameBand.innerText = product.title
  cardValue.innerText = `R$ ${product.price}.00`
  cardButton.innerText = "Comprar"

  cardValueButton.append(cardValue,cardButton)
  cardNameAlbum.append(albumTitle,albumAge)
  divCard.append(cardNameAlbum,titleNameBand,cardValueButton)
  figure.appendChild(image)
  cardBox.append(figure,divCard)
  cardsContainer.appendChild(cardBox)
  });
}
createCard(products)


function createButtons(category){
  const listButtons = document.querySelector(".group__buttons")

  categories.forEach(category => {
    const buttonCategory = document.createElement("li")

    buttonCategory.classList.add("btn-music")

    buttonCategory.innerText = category
    buttonCategory.setAttribute("value", category);

    listButtons.appendChild(buttonCategory)
    
  });
}
createButtons(categories)

function addFilters(categories, products) {
  const buttonCategory = document.querySelectorAll(".btn-music");

  buttonCategory.forEach((button) => {
    button.addEventListener("click", () => {
      const index = categories.findIndex(category => category === button.innerText);
      const filter = products.filter(product => product.category === index)
      console.log(filter);
      createCard(filter);
    });
  });

}
addFilters(categories, products)
console.log()