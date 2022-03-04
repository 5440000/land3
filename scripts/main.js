const menu = document.getElementById("header__menu")
const closeButton = document.getElementById("close__button")
const openButton = document.getElementById("open__button")

openButton.addEventListener("click", (e) => {
    e.stopPropagation()
    menu.classList.remove("closed")
})

closeButton.addEventListener("click", () => {
    menu.classList.add("closed")
})