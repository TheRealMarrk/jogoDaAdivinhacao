const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let random = Math.round(Math.random() * 10)
let trys = 1

// eventos 
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// callBack Functions

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == random) {
    toggleScreen()
    screen1.style.transition = "all 3s";

    screen2.querySelector("h2").innerText = `Voce conseguiu em ${trys} tentativas`
  }
  if (inputNumber.value > 10 || inputNumber.value <= 0 || inputNumber.value == "") {
    alert ("Número maior que 10, menor que 1 ou campo de tentativa em branco")
  } else {
    trys++
  }

  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  trys = 1
  random = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}