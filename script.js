import { update as updateSnake, draw as drawSnake,SNAKE_SPEED } from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED)
    {
        return;
    }
    console.log("RENDERING");
    lastRenderTime = currentTime;
        
    update();
    draw();
}

window.requestAnimationFrame(main);

// Update the snake and food
function update()
{
    updateSnake();
}

// Draw/Render the snake and food
function draw()
{
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
}