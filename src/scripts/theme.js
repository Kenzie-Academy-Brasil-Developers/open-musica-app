

function darkMood(){
  const buttonDarkMood = document.querySelector(".header-button-darkmood")
  const body = document.querySelector(".darkmood")
  

  buttonDarkMood.addEventListener("click",() => {
    body.classList.toggle("darkmood") 
    
  })

 
}
darkMood()



function changeImageDark() {
  const buttonDarkMood = document.querySelector(".header-button-darkmood");
  let image = document.createElement("img");
  image.classList.add("image-darkmood-sun")
  buttonDarkMood.appendChild(image)

  buttonDarkMood.addEventListener("click", () => {
    image.classList.toggle("image-darkmood-moon")
    image.classList.toggle("image-darkmood-sun")
  });
}

changeImageDark();

