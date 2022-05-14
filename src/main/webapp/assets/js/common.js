let BurgerIcon = document.querySelector(".burger_icon");
BurgerIcon.addEventListener("click", () => {
  document.querySelector("aside").classList.toggle("active");
});
