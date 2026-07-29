const easterImg = document.getElementById('easterImg')
const diceDisplay = document.getElementById("diceDisplay")
const rollBtn = document.getElementById("rollBtn")
const numDisplay = document.getElementById("numDisplay")
const msgDisplay = document.getElementById("msgDisplay")

const images = [
    "./images/dice-six-faces-one.png",
    "./images/dice-six-faces-two.png",
    "./images/dice-six-faces-three.png",
    "./images/dice-six-faces-four.png",
    "./images/dice-six-faces-five.png",
    "./images/dice-six-faces-six.png",
]

rollBtn.addEventListener("click", roll);

document.addEventListener("keydown", (event) => {
    if (event.key === "r") {  
       roll();
    }
})

function roll() {
    const randomNum = Math.floor(Math.random() * images.length) + 1
    
    diceDisplay.src = images[randomNum - 1]
    numDisplay.textContent = randomNum
    msgDisplay.textContent = 'You Rolled!'
    easterTrigger()
}

function easterTrigger() {
    const randomNum = (Math.floor(Math.random() * 10)) + 1

    if (randomNum === 2) {
        easterImg.src = './images/doc-ron-easter.png'
    } else {
        easterImg.src = ''
    }
}