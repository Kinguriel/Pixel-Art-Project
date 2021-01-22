/*const is block scoped but cant be updated
let is block scoped but can be updated*/

// Select color variable
const color = document.getElementById('colorPicker');

// Select size variables
const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('click', (e) => {
    //prevent page refresh
    e.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    //stops tables from stacking
    table.firstElementChild.remove();
    makeGrid(height, width);
});

// Your code goes here!
function makeGrid(height, width) {
    //make rows
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        //make columns
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            //color cells here
            cell.addEventListener('click', (e) => {
                cell.style.background = color.value;

            });
        }
    }
    
}