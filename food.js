import {onSnake, expandSnake} from './snake.'
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = (x:20, y:10)
    }
}

export function draw(gameboard)
{
    const foodElement = document.createElement('div')
}