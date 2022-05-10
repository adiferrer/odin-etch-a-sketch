const container = document.querySelector('#container');
const newGridButton = document.querySelector('#grid-numbers');

function createGrid(n) {
    let div = container.querySelector('.square-divs');
    while(div) {
        container.removeChild(div);
        div = container.querySelector('.square-divs');
    }

    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const squareDivs = document.createElement('div');
            squareDivs.classList.add('square-divs');
            container.appendChild(squareDivs);
    
            squareDivs.addEventListener('mouseover', () =>  squareDivs.style.backgroundColor = '#BB8FCE');
            squareDivs.addEventListener('mouseout', () =>  squareDivs.style.backgroundColor = '#BB8FCE');
        }
    }
}

createGrid(16);

newGridButton.addEventListener('click', () => {
    let number = Number(prompt("Enter the number of rows and columns for the new square grid", "16"));
    if (number != null && number > 0 && number <= 100) {
        createGrid(number);
    }
})