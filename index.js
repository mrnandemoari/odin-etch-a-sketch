// Structure Elements
const app = document.getElementById('app');
const appContainer = document.createElement('div');
appContainer.className = 'app-container';
const appTitle = document.createElement('h1');
appTitle.className = 'app__title';
appTitle.textContent = 'Etch a Sketch!';
const appMenu = document.createElement('div');
appMenu.className = 'app-menu';
const menuResize = document.createElement('button');
menuResize.textContent = 'Resize';
menuResize.className = 'button';
const menuColorize = document.createElement('button');
menuColorize.textContent = 'Colorize On';
menuColorize.className = 'button';
const menuReset = document.createElement('button');
menuReset.textContent = 'Reset';
menuReset.className = 'button';
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';

// Functions and Events
const createGrid = (row = 16) => {
  gridContainer.innerHTML = '';

  for (let i = 0; i < row * row; i++) {
    const square = document.createElement('div');
    square.style.border = 'solid 1px #222222';
    square.style.width = `${100 / row}%`;
    square.style.height = `${100 / row}%`;
    gridContainer.appendChild(square);

    square.addEventListener('mouseover', () => {
      if (isColorize) {
        square.style.backgroundColor = generateRandomColors();
      } else {
        square.style.backgroundColor = 'rgba(0, 0, 0, 1)';
      }
    });

    menuReset.addEventListener('click', () => {
      square.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    });
  }
};

let isColorize = false;

menuColorize.addEventListener('click', () => {
  isColorize = !isColorize;
  menuColorize.textContent = isColorize ? 'Colorize Off' : 'Colorize On';
});

createGrid();

menuResize.addEventListener('click', () => {
  let newSize = prompt('Enter the number of squares per side (max 100):');

  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert('Please enter a valid number from 1 to 100');
    newSize = prompt('Enter the number of squares per side (max 100):');
  }

  createGrid(newSize);
});

const generateRandomNumbers = (max) => {
  return Math.floor(Math.random() * max);
};

const generateRandomColors = () => {
  let red = generateRandomNumbers(256);
  let green = generateRandomNumbers(256);
  let blue = generateRandomNumbers(256);
  let alpha = `0.${generateRandomNumbers(10)}`;
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return rgba;
};

app.appendChild(appContainer);
appContainer.append(appTitle, appMenu, gridContainer);
appMenu.append(menuResize, menuColorize, menuReset);
