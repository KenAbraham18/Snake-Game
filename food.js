import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
var audio = document.getElementById("myAudio"); 

export function update() {
  if (onSnake(food)) {
    console.log("AUDIO");
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, "0")
  audio.play();
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }

}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}


// if (onSnake(food)) {
  
//   expandSnake(EXPANSION_RATE)
//   food = getRandomFoodPosition()
// }


function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}