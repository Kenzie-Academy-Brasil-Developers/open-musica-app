import {products,categories} from "./productsData.js"
import {changeImageDark} from "./theme.js"

function createCard(product) {
  const cardBox = document.createElement("div");
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const divCard = document.createElement("div");
  const cardNameAlbum = document.createElement("div");
  const albumTitle = document.createElement("h3");
  const albumAge = document.createElement("p");
  const titleNameBand = document.createElement("h3");
  const cardValueButton = document.createElement("div");
  const cardValue = document.createElement("p");
  const cardButton = document.createElement("button");

  cardBox.classList.add("card-box");
  divCard.classList.add("div-card");
  divCard.classList.add("colorCards");
  cardNameAlbum.classList.add("card-name-album");
  cardValueButton.classList.add("card-value-button");
  albumTitle.classList.add("album-title");
  albumTitle.classList.add("textCardsColor");
  albumAge.classList.add("album-age");
  albumAge.classList.add("textCardsColor");
  cardValue.classList.add("card-value");
  cardValue.classList.add("textcolor");
  cardButton.classList.add("card-button");
  cardButton.classList.add("buttonsCard");

  image.src = product.img;
  albumTitle.innerText = product.band;
  albumAge.innerText = product.year;
  titleNameBand.innerText = product.title;
  cardValue.innerText = `R$ ${product.price}.00`;
  cardButton.innerText = "Comprar";

  cardValueButton.append(cardValue, cardButton);
  cardNameAlbum.append(albumTitle, albumAge);
  divCard.append(cardNameAlbum, titleNameBand, cardValueButton);
  figure.appendChild(image);
  cardBox.append(figure, divCard);

  return cardBox;
}

function renderCards(products) {
  const cardsContainer = document.querySelector(".cards__container");

  cardsContainer.innerHTML = "";

  products.forEach((product) => {
    const card = createCard(product);
    cardsContainer.appendChild(card);
  });
  
}

renderCards(products);



function createButtons(category){
  const listButtons = document.querySelector(".group__buttons")

  categories.forEach(category => {
    const buttonCategory = document.createElement("li")

    buttonCategory.classList.add("btn-music")
    buttonCategory.classList.add("backgroundButtons")

    buttonCategory.innerText = category
    buttonCategory.setAttribute("value", category);

    listButtons.appendChild(buttonCategory)
    
  });
  changeImageDark();
}
createButtons(categories)


function addFilters(categories, products) {
  const buttonCategory = document.querySelectorAll(".btn-music");
  const inputPrice = document.querySelector("#precoInput");
  const priceParagraph = document.querySelector(".div-text");

  let filteredArray = products;
  let categoryIndex = 0;
  let inputValue = inputPrice.value;

  inputPrice.addEventListener("input", () => {
    inputValue = inputPrice.value;
    priceParagraph.textContent = `Até R$ ${inputValue}`;
    applyFilters();
  });

  buttonCategory.forEach((button) => {
    button.addEventListener("click", () => {
      categoryIndex = categories.findIndex(category => category === button.innerText);
      applyFilters();
      inputPrice.value = inputValue;
    });
  });

  function applyFilters() {
    if (categoryIndex === 0) {
      filteredArray = products.filter(product => product.price <= inputValue);
    } else {
      filteredArray = products.filter(product => product.category === categoryIndex && product.price <= inputValue);
    }
    
    renderCards(filteredArray);
  }
}

addFilters(categories, products);

