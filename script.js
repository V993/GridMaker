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
  //setting up the pre-fixed properties for grid 
  // const grid_ = document.querySelector("#grid");
  let table_row = grid.getElementsByTagName("tr")[0];

  //if there are no existing columns
  if (table_row.length == 0) {
    let new_cols = document.createElement("tr");
    let cols_data = document.createElement("td");
    new_cols.append(cols_data);
    table_row.append(new_cols);
  }
  else {
    let allRows = document.getElementsByTagName("tr");

    for (let i = 0; i < allRows.length; i++) {
      let lastCol = allRows[i].children;
      allRows[i].appendChild(lastCol[0].cloneNode(true));
    }
    columns = allRows.length;
    console.log(columns);

    let columns = grid.getElementsByTagName("td")
    // document.createElement('tc');
    table_row.append(columns[0].cloneNode(true));
  }
  // columns++;
  console.log("number of columns: ", columns);
}

function remove_columns() {
  //parent 
  let allRows = document.getElementsByTagName("tr");
  for (let i = 0; i < allRows.length; i++) {
    let lastCol = allRows[i].lastElementChild;
    allRows[i].removeChild(lastCol);

  }

  // columns = allRows;
  columns--;
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
  document.documentElement.style.setProperty("--background-color", colors_selected);
}
// fill all uncolored cells with the currently selected color
function fill_all_uncolored() {
  
}
// fill all cells with the currently selected color
function fill_all_cells() {
  document.documentElement.style.setProperty("--background-color", colors_selected);
}

// clear all cells/restore all cells to their original/initial color
function clearAll() {
  console.log("Clearing and setting all cells to white");
  document.documentElement.style.setProperty("--background-color", "White");

  // const grid = document.querySelector("#grid")

  // for(let i = 0; i < document.getElementsByTagName("tr").length; i++ )
  // {
  //   grid[i].style.backgroundcolor = "white";
  // }
  // alert("cells cleared");
}
