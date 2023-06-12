

function darkMood(){
  const buttonDarkMood = document.querySelector(".header-button-darkmood")
  const body = document.querySelector(".darkmood")
  

  buttonDarkMood.addEventListener("click",() => {
    body.classList.toggle("darkmood") 
    
  })

 
}
darkMood()



export function changeImageDark() {
    const buttonDarkMood = document.querySelector(".header-button-darkmood");
    let btnsun = document.querySelector(".image-darkmood-sun");
    let btnmoon = document.querySelector(".image-darkmood-moon");
    let buttonCategory = document.querySelectorAll(".btn-music")

  
    buttonDarkMood.addEventListener("click", () => {
      buttonCategory.forEach(button => {button.classList.toggle("backgroundButtons")});
      buttonDarkMood.classList.toggle("backgroundButtonSun");
      btnsun.classList.toggle("invisible")
      btnmoon.classList.toggle("invisible")
    });
  }
  
  changeImageDark();