// Variables
const resetBtn = document.querySelector('#reset');
const gridSizeForm = document.querySelector('#grid-size');
const main =  document.querySelector('main');

// Event Listeners
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit',changeGrid);

// Initialize

changeGrid();

// Functions


function clearGrid(e)
{
    console.log("Clearing the Grid.")
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box,index)=>{box.classList.remove('red')});
    boxes.forEach((box,index)=>{box.classList.remove('blue')});
    boxes.forEach((box,index)=>{box.classList.remove('green')});
}

function changeGrid(e){
    if(e){
        e.preventDefault();
    }
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    // set the main to the grid
    main.innerHTML = ''; // this clears the main area
    grid.forEach((row) => {
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
            box.classList.add('white');
            box.addEventListener('click', toggleColor);
            column.appendChild(box);
        }    
        rows.push(row);
    }
    return rows;
}

function toggleColor(e)
{
    const element = e.target;

    if(element.classList.contains('white'))
    {
        console.log("white -> red");
        element.classList.remove('white');
        element.classList.add('red');
    }  
    else if(element.classList.contains('red'))
    {
        console.log("red -> blue");
        element.classList.remove('red');
        element.classList.add('blue');
    }
    else if(element.classList.contains('blue'))
    {
        console.log("blue -> green");
        element.classList.remove('blue');
        element.classList.add('green');
    }
    else if(element.classList.contains('green'))
    {
        console.log("green -> white");
        element.classList.remove('green');
        element.classList.add('white');
    }
    else {
        element.classList.remove('red');
        element.classList.remove('blue');
        element.classList.remove('green');
        element.classList.add('white');
    }
}