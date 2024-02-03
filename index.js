const root = document.getElementById('root');
const container = document.createElement('div');
container.className = 'container';
const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Etch a Sketch!';
const grid = document.createElement('div');
grid.className = 'grid';

let totalSquare = (16 * 16) + 16;

for (let i = 1; i < totalSquare; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  grid.append(square);
}

root.appendChild(container);
container.append(title, grid);
