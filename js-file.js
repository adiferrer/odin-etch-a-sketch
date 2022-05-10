const container = document.querySelector('#container');
container.style.gridTemplateColumns = 'repeat(16, 1fr)';

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const squareDivs = document.createElement('div');
        squareDivs.classList.add('square-divs');
        container.appendChild(squareDivs);

        squareDivs.addEventListener('mouseover', () =>  squareDivs.style.backgroundColor = '#BB8FCE');
        squareDivs.addEventListener('mouseout', () =>  squareDivs.style.backgroundColor = '#BB8FCE');
    }
}