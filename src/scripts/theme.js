

function darkMood(){
  const buttonDarkMood = document.querySelector(".header-button-darkmood")
  const body = document.querySelector(".darkmood")
  const headerContainer = document.querySelector(".header__container")

  buttonDarkMood.addEventListener("click",() => {
    body.classList.toggle("darkmood") 
    headerContainer.classList.toggle("darkmood") 
  })

 
}
darkMood()



function changeImageDark() {
  const buttonDarkMood = document.querySelector(".header-button-darkmood");
  const image = document.querySelector(".image-darkmood");

  buttonDarkMood.addEventListener("click", () => {
    image.classList.toggle("image-darkmood-moon")
    image.classList.toggle("image-darkmood-sun")
  });
}

changeImageDark();

