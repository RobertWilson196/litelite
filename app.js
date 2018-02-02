// Variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const gridSizeForm = document.querySelector('#grid-size');
const main =  document.querySelector('main');

// Event Listeners
boxes.forEach(function(box, index){addEventListener('click', toggleColor)});
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit',changeGrid);

// Functions
function toggleColor(e)
{
    const element = e.target;
    const color = e.target.classList.color;
    element.classList.toggle('red');
    if(color == 'red')
    {
        element.classList.remove('red');
        element.classList.remove('blue');
        element.classList.remove('green');
        element.classList.toggle('blue'); 
        console.log("changing from red to blue");
    }
    else if(color == 'blue')
    {
        element.classList.remove('red');
        element.classList.remove('blue');
        element.classList.remove('green');
        element.classList.toggle('green');
        console.log("changing from blue to green");
    }
    else if(color == 'green')
    {
        element.classList.remove('red');
        element.classList.remove('blue');
        element.classList.remove('green');
    }
}

function clearGrid(e)
{
    console.log("Clearing the Grid.")
    boxes.forEach((box,index)=>{box.classList.remove('red')})
    boxes.forEach((box,index)=>{box.classList.remove('blue')})
    boxes.forEach((box,index)=>{box.classList.remove('green')})
}

function changeGrid(e) 
{
    e.preventDefault();
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeForm);
    main.innerHTML = ' '; // this clears the main area
    grid.forEach((row)=> {  //dynamically added a grid of rows
        main.appendChild(row);
    }); 

}

function makeGrid(size) 
{
    const rows = [];
    for(let i = 0; i < size; i += 1)
    {
        // make  a div with class = row
        const row = document.createElement('div');
        row.classList.add('row');
        // make a div with class col-md-12 inside of row
        const column = document.createElement('div');
        column.classList.add('col-md-12');
        row.appendChild(column);
        // make 6 divs with class of box inside of col-md-12
        for(let i = 0; i < size; i += 1) // const breaks the loop and var causes runtime bugs
        {   
            console.log(i);
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('click', toggleColor);
            column.appendChild(box);
        }    
        rows.push(row);
    }
    return rows;
}