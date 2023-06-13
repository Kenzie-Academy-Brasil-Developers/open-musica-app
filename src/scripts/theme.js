import {addFilters, renderCards, clearClickedButtons} from "./index.js"
import {products} from "./productsData.js"

export function darkMood(){
  const buttonDarkMood = document.querySelector(".header-button-darkmood")
  const body = document.querySelector(".body")
  
  buttonDarkMood.addEventListener("click",() => {
    body.classList.toggle("darkmood") 
    renderCards(products);
    clearClickedButtons()
  })
  changeImageDark() 
}
darkMood()


export function changeImageDark() {
  const buttonDarkMood = document.querySelector(".header-button-darkmood");
  let btnsun = document.querySelector(".image-darkmood-sun");
  let btnmoon = document.querySelector(".image-darkmood-moon");
  let buttonCategory = document.querySelectorAll(".btn-music")
  let headerLogo = document.querySelector(".header-logo");
  let sectionOneTitle = document.querySelector(".section-one-title");
  let divTitle = document.querySelector(".div-title");
  let divText = document.querySelector(".div-text");
  let sectionThreeTitle = document.querySelector(".section-three-title");
  let divCard = document.querySelectorAll(".div-card");
  let cardButton = document.querySelectorAll(".card-button");
  let albumTitle = document.querySelectorAll(".album-title");
  let albumAge = document.querySelectorAll(".album-age");
  let cardValue = document.querySelectorAll(".card-value");
  let body = document.querySelector(".body")
  let precoInput = document.querySelector("#precoInput")

  buttonDarkMood.addEventListener("click", () => {
    buttonDarkMood.classList.toggle("backgroundButtonSun");
    btnsun.classList.toggle("invisible")
    btnmoon.classList.toggle("invisible")
    headerLogo.classList.toggle("textcolor")
    sectionOneTitle.classList.toggle("textcolor")
    divText.classList.toggle("textcolor")
    divTitle.classList.toggle("textcolor")
    sectionThreeTitle.classList.toggle("textcolor")
    buttonCategory.forEach(button => {button.classList.toggle("backgroundButtons")});
    cardButton.forEach(button => {button.classList.toggle("buttonsCard")})
    divCard.forEach(button => {button.classList.toggle("colorCards")})
    albumAge.forEach(button => {button.classList.toggle("textCardsColor")});
    albumTitle.forEach(button => {button.classList.toggle("textCardsColor")});
    cardValue.forEach(button => {button.classList.toggle("textcolor")});
    renderCards(products);
    clearClickedButtons()
  });
}
  
export function cardColor() {
  let sectionThreeTitle = document.querySelector(".section-three-title");
  let divCards = document.querySelectorAll(".div-card");
  let cardButton = document.querySelectorAll(".card-button");
  let albumAge = document.querySelectorAll(".album-age");
  let albumTitle = document.querySelectorAll(".album-title");
  let cardValue = document.querySelectorAll(".card-value");

  if (sectionThreeTitle.classList.contains("textcolor")) {
    divCards.forEach(divCard => {
      divCard.classList.add("colorCards");
    });
    cardButton.forEach(button => {
      button.classList.add("buttonsCard");
    });
    albumAge.forEach(age => {
      age.classList.add("textCardsColor");
    });
    albumTitle.forEach(title => {
      title.classList.add("textCardsColor");
    });
    cardValue.forEach(value => {
      value.classList.add("textcolor");
    });
  }
}

