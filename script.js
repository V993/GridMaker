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
  //setting up the pre-fixed properties for grid 
  const grid_ = document.querySelector("#grid");
  let table_row = grid_.getElementsByTagName("tr")[0];

  //if there are no existing columns
  if (table_row.length == 0) {
    let new_cols = document.createElement("tc");
    let cols_data = document.createElement("td");
    new_cols.appendChild(cols_data);
    table_row.appendChild(new_cols);
  }
  else {
    let columns = grid_.getElementsByTagName("td")
    // document.createElement('tc');
    table_row.appendChild(columns[0].cloneNode(true));

  }
}

function remove_columns() {
  //parent 
  let columns = document.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let lastCol = columns[rows.length - 1];
    rows[i].removeChild(lastCol)
  }


}

// select a color from a dropdown menu of colors
function select_colors() {
  selected = document.getElementById("selectedID").value;
  document.getElementById("cell").style.backgroundColor = selected;
  alert("Color selected")
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
  const grid = document.querySelector("#grid")

  for(let i = 0; i < document.getElementsByTagName("tr").length; i++ )
  {
    grid[i].style.backgroundcolor = "white";
  }
  alert("cells cleared");
}
