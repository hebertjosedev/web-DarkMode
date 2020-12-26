const btnSwitch = document.querySelector("#switch");
const items = document.querySelector(".header__nav--items");
const iconos = document.querySelector(".creditos-contenedor");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("activee");
  items.classList.toggle("color-letra");
  iconos.classList.toggle("color-letra");
});
