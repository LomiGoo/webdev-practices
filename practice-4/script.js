let jackpotMsg = document.getElementById('jackpotMsg')
let jackpotDisplayGif = document.getElementById('jackpotDisplayGif')
let slot1 = document.getElementById('slot1')
let slot2 = document.getElementById('slot2')
let slot3 = document.getElementById('slot3')
let reel1
let reel2 
let reel3
const gambleBtn = document.getElementById('gambleBtn')

const slotNums = [1, 2, 3, 4, 5, 6, 7]
let slots = []

gambleBtn.addEventListener("click", gamble)


function gamble() {
    reel1 = randomNum()

    if (Math.random() < 0.9) {
        reel2 = reel1
    } else {
        reel2 = randomNum()
    }

    if (Math.random() < 0.9) {
        reel3 = reel1
    } else {
        reel3 = randomNum()
    }
    
    slots.push(reel1)
    slots.push(reel2)
    slots.push(reel3)

    slot1.textContent = slots[0]
    slot2.textContent = slots[1]
    slot3.textContent = slots[2]

    if (slots[0] === 7 && slots[1] === 7 && slots[2] === 7) {
        jackpotMsg.textContent = 'JACKPOTTTTT'
        jackpotDisplayGif.src = './images/kazuma.gif'
        alert('JACKPOTTTTT')
    } else {
        jackpotMsg.textContent = ''
        jackpotDisplayGif.src = ''
    }

    slots.length = 0
}

function randomNum() {
    return slotNums[Math.floor(Math.random() * slotNums.length)]
}