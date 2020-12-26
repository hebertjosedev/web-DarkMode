const btnSwitch = document.querySelector("#switch");
const items = document.querySelector(".header__nav--items");
const iconos = document.querySelector(".creditos-contenedor");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("activee");
  items.classList.toggle("color-letra");
  iconos.classList.toggle("color-letra");

  //Guardamos el modo en localstorage.
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Obtenemos el modo actual de la pagina web.
if (localStorage.getItem("dark-mode") == "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.toggle("activee");
  items.classList.add("color-letra");
  iconos.classList.add("color-letra");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("activee");
  items.classList.remove("color-letra");
  iconos.classList.remove("color-letra");
}
