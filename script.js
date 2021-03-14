let rows = 0;
let columns = 0;
let colors_selected;

//adds rows to our grids
function add_rows() {
  const grid = document.querySelector("#grid");
  // there are rows that can be removed
  if (document.getElementsByTagName("tr").length > 0) {
    let clone = document.querySelector('tr').cloneNode(true);
    let cells = [...clone.querySelectorAll('td')];
    cells.forEach((cell) => {
      cell.removeAttribute('style');
      cell.style.backgroundColor = 'white';
    });
    grid.children[0].appendChild(clone);
  } else {
    // there are no existing rows
    let newRow = document.createElement("tr");
    let rowData = document.createElement("td");
    newRow.appendChild(rowData);
    grid.children[0].appendChild(newRow);
  }
  rows++;
  console.log("number of rows: ", rows);
}

function remove_rows() {
  // there are rows that can be removed
  if (document.getElementsByTagName("tr").length > 0) {
    let rows = document.getElementsByTagName("tr");
    let lastRow = rows[rows.length - 1];
    lastRow.parentElement.removeChild(lastRow);
  }
  rows--;
  console.log("number of rows: ", rows);
}

function add_columns() {
  [...document.querySelectorAll('#grid tr')].forEach((row, i) => {
    const cell = document.createElement("td");
    row.appendChild(cell);
});
}

function remove_columns() {
  //parent
  let allRows = document.getElementsByTagName("tr");
  for (let i = 0; i < allRows.length; i++) {
    let lastCol = allRows[i].lastElementChild;
    allRows[i].removeChild(lastCol);
  }

  columns = allRows.length;

  // columns = allRows;
  console.log("number of columns: ", columns);
}

// select a color from a dropdown menu of colors
function select_colors() {
  colors_selected = document.getElementById("selectedID").value;
  console.log(colors_selected);
}

// click on a single cell, changing its color to the currently selected color
function fill_cell() {
  console.log("setting cell color to: ", colors_selected);
  document.documentElement.style.setProperty(
    "--background-color",
    colors_selected
  );
}
// fill all uncolored cells with the currently selected color
function fill_all_uncolored() {
  // there's at least one row
  if (document.querySelector("tr") != null) {
    [...document.querySelectorAll("td")].forEach((box, i) => {
      let selected = document.getElementById("selectedID").value;
      if ( (box.style.backgroundColor != 'green' || box.style.backgroundColor != 'blue' || box.style.backgroundColor != 'red' || box.style.backgroundColor != 'yellow') && (box.style.backgroundColor === 'white' || box.style.backgroundColor === '')) box.style.backgroundColor = selected;
    });
  }
}

// fill all cells with the currently selected color
function fill_all_cells() {
  [...document.querySelectorAll("td")].forEach((box, i) => {
    let selected = document.getElementById("selectedID").value;
    if (selected != "Select colors") box.style.backgroundColor = selected;
  });
}

// clear all cells/restore all cells to their original/initial color

function clearAll() {
  [...document.querySelectorAll("td")].forEach((box, i) => {
    box.style.backgroundColor = "#fff";
  });
}
