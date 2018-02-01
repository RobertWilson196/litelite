// Variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');

// Event Listeners
boxes.forEach(function(box, index){addEventListener('click', toggleColor)});
resetBtn.addEventListener('click', clearGrid);

// Functions
function toggleColor(e)
{
    const element = e.target;
    const color = e.target.classList.color;
    console.log(color);
    element.classList.toggle('red'); 
}

function clearGrid(e)
{
    console.log("Clearing the Grid.")
}