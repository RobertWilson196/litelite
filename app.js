// Variables
const resetBtn = document.querySelector('#reset');
const box = document.querySelector('.box');

// Event Listeners
box.addEventListener('click', turnRed);
resetBtn.addEventListener('click', clearGrid);

// Functions
function turnRed(e)
{
    console.log("Changing to RED.");
    const element = e.target;
    console.dir(element);
    element.style.backgroundColor = 'red';
    
}

function clearGrid(e)
{
    console.log("Clearing the Grid.")
}