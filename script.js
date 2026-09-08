function AlterarTema() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#avatar img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  const imgAlt = document.querySelector("#avatar img")

  if (html.classList.contains("light")) {
    imgAlt.setAttribute("alt", "Avatar Light Mode")
  } else {
    imgAlt.setAttribute("alt", "avatar")
  }
}
