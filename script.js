
let boxes_per_row = 10;
let board_size = boxes_per_row**2;
let px_width = 500/boxes_per_row;
let px_height = 500/boxes_per_row;

for (let i = 1; i<=board_size; i++) {
    const div = document.createElement('div');
    const container = document.querySelector('#container');
    div.classList.add('gridDiv');
    container.appendChild(div);

    div.style.width = px_width + 'px';
    div.style.height = px_height + 'px';
    div.onmouseover = () => div.style.backgroundColor = 'red';

    if (i%boxes_per_row === 0) {
        const div = document.createElement('div');
        div.classList.add('break')
        container.appendChild(div);
    }
}

const newGrid = document.querySelector('#newGrid');

function enterGridSize() {
    let size = prompt("Please enter a new size for the grid. Max is 64");
    if (size != null) {
        boxes_per_row = size;
        location.reload();
    }
}

function resetGrid() {
    location.reload();
}
