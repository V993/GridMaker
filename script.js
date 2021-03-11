let rows = 0;
let columns = 0;
let colors_selected;

//adds rows to our grids
function add_rows() {
  const grid = document.querySelector("#grid");
  // there are rows that can be removed
  if (document.getElementsByTagName("tr").length > 0) {
    let rows = document.getElementsByTagName("tr");
    grid.appendChild(rows[0].cloneNode(true));
  } else {
    // there are no existing rows
    let newRow = document.createElement("tr");
    let rowData = document.createElement("td");
    newRow.appendChild(rowData);
    grid.children[0].appendChild(newRow);
  }
}

function remove_rows() {
  // there are rows that can be removed
  if (document.getElementsByTagName("tr").length > 0) {
    let rows = document.getElementsByTagName("tr");
    let lastRow = rows[rows.length - 1];
    lastRow.parentElement.removeChild(lastRow);
  }
}

function add_columns() {
  alert("Column added");
}

function remove_columns() {
  alert("Column removed");
}

// select a color from a dropdown menu of colors
function select_colors() {
  //when a user selects a colors, notify
}
// click on a single cell, changing its color to the currently selected color
function fill_cell() {
  alert("cell colour changed");
}
// fill all uncolored cells with the currently selected color
function fill_all_uncolored() {
  alert("filled uncolored cells with colours");
}
// fill all cells with the currently selected color
function fill_all_cells() {
  alert("filled all cells");
}

// clear all cells/restore all cells to their original/initial color
function clear() {
  alert("cells cleared");
}