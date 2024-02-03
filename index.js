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
menuResize.className = 'resize__button';
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';

// Functions
const createGrid = (row = 16) => {
  gridContainer.innerHTML = '';

  for (let i = 0; i < row * row; i++) {
    const square = document.createElement('div');
    square.style.border = 'solid 1px #222222';
    square.style.width = `${100 / row}%`;
    square.style.height = `${100 / row}%`;
    gridContainer.appendChild(square);

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'violet';
    });
  }
};

createGrid();

menuResize.addEventListener('click', () => {
  let newSize = prompt('Enter the number of squares per side (max 100):');

  // Validate user input
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize <= 0) {
    alert('Please enter a valid number from 1 to 100');
    return;
  }

  // Limit the size to a maximum of 100 squares
  newSize = Math.min(newSize, 100);

  // Generate new grid
  createGrid(newSize);
});

app.appendChild(appContainer);
appContainer.append(appTitle, appMenu, gridContainer);
appMenu.append(menuResize);
