const profileImage = document.querySelector("#profile-img")
const profileName = document.querySelector("#name")
const mainCard = document.querySelector("#card-xl")
const subCard = document.querySelector("#card")
const closeIcon = document.querySelector(".fa-window-close")

profileImage.addEventListener("click", () => {
  mainCard.classList.add("open")
  subCard.classList.add("open")
})

profileName.addEventListener("click", () => {
  mainCard.classList.add("open")
  subCard.classList.add("open")
})

closeIcon.addEventListener("click", () => {
  mainCard.classList.remove("open")
  subCard.classList.remove("open")
})
