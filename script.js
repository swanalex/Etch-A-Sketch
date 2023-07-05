for (let i = 1; i<=10000; i++) {
    const div = document.createElement('div');
    const container = document.querySelector('#container');
    div.classList.add('gridDiv')
    container.appendChild(div);
    
    div.onmousedown = () => div.style.backgroundColor = 'red';

    if (i%16 === 0) {
        const div = document.createElement('div');
        div.classList.add('break')
        container.appendChild(div);
    }
}

const newGrid = document.querySelector('#newGrid');


