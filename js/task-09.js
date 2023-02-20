function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const text= document.querySelector('.color');
btn.addEventListener('click', changeBgColor);

function changeBgColor(){
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = body.style.backgroundColor;
}