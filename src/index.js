import './styles/main.css';

import { variable } from './module';

var turnCount = 0;

const gameState = [null,null,null,null,null,null,null,null,null];

const clickHandler = event => {
	const buttonId = event.target.id
	const button = event.target;
	console.log(button);
	if (button.innerHTML !== 'x' && button.innerHTML !== 'o'){
		var gameSymbol = (turnCount % 2 === 0) ? 'o' : 'x';
		button.innerHTML = gameSymbol; 
		gameState[button] = gameSymbol;
		turnCount++
	}
};



console.log('put whatever you want here');

var gameButtons = document.getElementsByClassName('gamebutton');
for(let i = 0; i < gameButtons.length; i++){
	gameButtons[i].addEventListener('click', clickHandler);
}

console.log(gameButtons);
