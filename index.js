const genre = document.getElementById('genres')


const selectedValue = genre.value

console.log(selectedValue)

const opt = document.createElement("option")
opt.value = "classic"
opt.innerHTML = "classic"
genre.appendChild(opt)
genre.value = "classic"

console.log(genre.value)
