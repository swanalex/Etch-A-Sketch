
// let boxes_per_row = prompt('enter grid size - max is 64');
// createGrid(boxes_per_row);



function createGrid(boxes_per_row) {

    // and this as well
    let board_size = boxes_per_row**2;
    let px_width = 500/boxes_per_row;
    let px_height = 500/boxes_per_row;

    // try putting this inside of a function
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

}


const newGrid = document.querySelector('#newGrid');

function changeGridSize() {
    // get the container div
    const container = document.querySelector('#container');
    // while loop to remove all children (the current grid-boxes)
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    // new prompt which calls createGrid() function with new grid size
    let size = prompt("Please enter a new size for the grid. Max is 64");
    if (size != null) {
        createGrid(size);
    }
}

function resetGrid() {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
