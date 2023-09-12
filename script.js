function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  html.classList.toggle("ligth")

  if (html.classList.contains("ligth")) {
    img.src = "./assets/avatar-light.jpg"
    img.alt = "Foto de um gato de oclulos olhando pro universo"
  } else {
    img.src = "./assets/avatar.png"
    img.alt = "Foto de Wanderley de oclulos e camisa preta e fundo"
  }
}
