// To get Variables
const inputsColors = document.querySelectorAll('.input-color');
const inputRange = document.querySelectorAll('.input-range');
const buttons = document.querySelectorAll('button');
const rangeBgColor = document.querySelector('.random-button');
const bodyColor = document.body;

//To initialize the colors
let colorsValue = ['#3857EB', '#357E4C', '#A6A418'];
let inclination = 0;

for (let i = 0; i < inputsColors.length; i++) {
  inputsColors[i].value = colorsValue[i];
  inputsColors[i].style.backgroundColor = colorsValue[i];
  buttons[i].style.backgroundColor = colorsValue[i];
  rangeBgColor.style.backgroundColor = colorsValue[i];
  bodyColor.style.background = `linear-gradient(${inclination}deg, ${colorsValue})`;
}

// To calculate the range's inclination
const rangeValue = document.querySelector('.input-range');

rangeValue.addEventListener('input', e => {
  inclination = e.target.value * 3.6;
  bodyColor.style.background = `linear-gradient(${inclination}deg, ${colorsValue})`;
  console.log(inclination);
});

// To manage colors
buttons.forEach(button => {
  button.addEventListener('click', addDeleteColors);
});

const btnRandom = document.querySelector('.random-button');

function addDeleteColors(e) {
  // body
  const allInputs = document.querySelectorAll('.input-color');

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  if (e.target.className === 'add-1') {
    allInputs[0].value = `#${randomColor.toUpperCase()}`;
    allInputs[0].style.backgroundColor = `#${randomColor}`;
    return;
  }

  if (e.target.className === 'add-2') {
    allInputs[1].value = `#${randomColor.toUpperCase()}`;
    allInputs[1].style.backgroundColor = `#${randomColor}`;
    return;
  }

  if (e.target.className === 'add-3') {
    allInputs[2].value = `#${randomColor.toUpperCase()}`;
    allInputs[2].style.backgroundColor = `#${randomColor}`;
    return;
  }

  btnRandom.addEventListener('click', () => {
    colorsValue = allInputs;
    bodyColor.style.background = `linear-gradient(${inclination}deg, ${allInputs[0].value}, ${allInputs[1].value}, ${allInputs[2].value})`;
  });
  rangeValue.addEventListener('click', () => {
    colorsValue = allInputs;
    bodyColor.style.background = `linear-gradient(${inclination}deg, ${allInputs[0].value}, ${allInputs[1].value}, ${allInputs[2].value})`;
  });
}
