const container = document.querySelector('#container');
const red = Math.floor(Math.random() * 253) + 1; // stores the red value for a random rgb value
const green = Math.floor(Math.random() * 253) + 1; // stores the green value for a random rgb value
const blue = Math.floor(Math.random() * 253) + 1; // stores the blue value for a random rgb value

// This function creates a square grid based on the number provided by the user
// and adds an event listener to each square div
function createGrid(n) {
    let div = container.querySelector('.square-divs');
    while(div) {
        container.removeChild(div);
        div = container.querySelector('.square-divs');
    }

    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-divs');
            container.appendChild(squareDiv);
    
            squareDiv.addEventListener('mouseover', () => {
                if (squareDiv.style.backgroundColor = `rgb(255, 255, 255)`) {
                    squareDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
                }
            });
        }
    }
}

// creates the initial 16x16 grid
createGrid(16);

const newGridButton = document.querySelector('#grid-numbers');
newGridButton.addEventListener('click', () => {
    let number = Number(prompt("Enter the number of rows and columns for the new square grid", "16"));
    if (number != null && number > 0 && number <= 100) {
        createGrid(number);
    } else {
        alert('Invalid input! Enter a number less than or equal to 100.');
    }
})