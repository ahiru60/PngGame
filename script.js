import Ball from "./Ball.js"
import Paddel from "./Paddel.js"

const ball = new Ball(document.getElementById("ball"));
const playerPaddel = new Paddel(document.getElementById("player-paddle"))
const computerPaddel = new Paddel(document.getElementById("computer-paddle"))
const playerscore = document.getElementById("player-score")
const computerscore = document.getElementById("computer-score")

let lastTime = null

function update(time){

    if(lastTime != null ){

        const delta = time - lastTime
        ball.update(delta,[playerPaddel.rect(), computerPaddel.rect()])
        computerPaddel.update(delta,ball.y,parseInt(computerscore.innerText))
    }
        if(isLose()){

            handelLose()
    
    }
    
    lastTime = time;
    
    
    window.requestAnimationFrame(update)
    }


function isLose(){
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <=0

}

function handelLose(){
    const rect = ball.rect()

    if(rect.right >= window.innerWidth){

        playerscore.innerText = parseInt(playerscore.innerText)+1
    }
    else{
        computerscore.innerText = parseInt(computerscore.innerText)+1
    }

    ball.reset()
    computerPaddel.reset()

}

document.addEventListener("mousemove", e => {

    playerPaddel.position = (e.y/window.innerHeight) * 100

})

window.requestAnimationFrame(update)