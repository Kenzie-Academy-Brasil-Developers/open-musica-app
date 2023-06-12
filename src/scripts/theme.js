import {addFilters} from "./index.js"
import {categories,products} from "./productsData.js"

function darkMood(){
  const buttonDarkMood = document.querySelector(".header-button-darkmood")
  const body = document.querySelector(".body")
  
  buttonDarkMood.addEventListener("click",() => {
    body.classList.toggle("darkmood") 
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
    });

 

    precoInput.addEventListener("input", (e) => {
      if (body.classList.contains("darkmood")) {
        cardButton.forEach(button => {button.classList.add("buttonsCard")})
        divCard.forEach(button => {button.classList.add("colorCards")})
        albumAge.forEach(button => {button.classList.add("textCardsColor")});
        albumTitle.forEach(button => {button.classList.add("textCardsColor")});
        cardValue.forEach(button => {button.classList.add("textcolor")});
      }
    });

   
  }
  

// export function changeImageDark() {
//   const buttonDarkMood = document.querySelector(".header-button-darkmood");
//   let btnsun = document.querySelector(".image-darkmood-sun");
//   let btnmoon = document.querySelector(".image-darkmood-moon");
//   let buttonCategory = document.querySelectorAll(".btn-music")
//   let headerLogo = document.querySelector(".header-logo");
//   let sectionOneTitle = document.querySelector(".section-one-title");
//   let divTitle = document.querySelector(".div-title");
//   let divText = document.querySelector(".div-text");
//   let sectionThreeTitle = document.querySelector(".section-three-title");
//   let divCard = document.querySelectorAll(".div-card");
//   let cardButton = document.querySelectorAll(".card-button");
//   let albumTitle = document.querySelectorAll(".album-title");
//   let albumAge = document.querySelectorAll(".album-age");
//   let cardValue = document.querySelectorAll(".card-value");
//   const body = document.body;


//   buttonDarkMood.addEventListener("click", (e) => {
//     e.preventDefault()
//     if(body.classList.contains('darkmood')){
//       buttonDarkMood.classList.add("backgroundButtonSun");
//       btnsun.classList.toggle("invisible")
//       btnmoon.classList.toggle("invisible")
//       headerLogo.classList.add("textcolor")
//       sectionOneTitle.classList.add("textcolor")
//       divText.classList.add("textcolor")
//       divTitle.classList.add("textcolor")
//       sectionThreeTitle.classList.add("textcolor")
//       cardButton.forEach(button => {button.classList.add("buttonsCard")})
//       divCard.forEach(button => {button.classList.add("colorCards")})
//       buttonCategory.forEach(button => {button.classList.add("backgroundButtons")});
//       albumAge.forEach(button => {button.classList.add("textCardsColor")});
//       albumTitle.forEach(button => {button.classList.add("textCardsColor")});
//       cardValue.forEach(button => {button.classList.add("textcolor")});
//     }else{
//       buttonDarkMood.classList.remove("backgroundButtonSun");
//       btnsun.classList.toggle("invisible")
//       btnmoon.classList.toggle("invisible")
//       headerLogo.classList.remove("textcolor")
//       sectionOneTitle.classList.remove("textcolor")
//       divText.classList.remove("textcolor")
//       divTitle.classList.remove("textcolor")
//       sectionThreeTitle.classList.remove("textcolor")
//       cardButton.forEach(button => {button.classList.remove("buttonsCard")})
//       divCard.forEach(button => {button.classList.remove("colorCards")})
//       buttonCategory.forEach(button => {button.classList.remove("backgroundButtons")});
//       albumAge.forEach(button => {button.classList.remove("textCardsColor")});
//       albumTitle.forEach(button => {button.classList.remove("textCardsColor")});
//       cardValue.forEach(button => {button.classList.remove("textcolor")});

      
//     }
//   });
// }
// changeImageDark()
