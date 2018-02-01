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
    element.classList.toggle('red');
    if(color == 'red')
    {
        element.classList.toggle('blue'); 
        console.log("changing from red to blue");
    }
    else if(color == 'blue')
    {
        element.classList.toggle('green');
        console.log("changing from blue to green");
    }
    else if(color == 'green')
    {
        element.classList.remove('green');
    }
}

function clearGrid(e)
{
    console.log("Clearing the Grid.")
    boxes.forEach((box,index)=>{box.classList.remove('red')})
}