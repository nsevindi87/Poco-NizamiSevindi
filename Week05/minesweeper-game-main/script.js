// Set this constant to true to debug the placement of bombs without
// having to click on all cells to reveal them.
let CHEAT_REVEAL_ALL = false;

const ROWS_COUNT = 5;
const COLS_COUNT = 5;

let numOfCells;

var defeat = false;
var victory = false;

// Cell constructor
function Cell() {
  this.discovered = false;
  this.isBomb = false;
  this.hasBeenFlagged = false;
}

// Initialize cells
var cells = Array(ROWS_COUNT);
for (var row = 0; row < ROWS_COUNT; row++) {
  cells[row] = Array(COLS_COUNT);
  for (var col = 0; col < COLS_COUNT; col++) {
    cells[row][col] = new Cell();
  }
}

// TODO: Task 1 - add some bombs at fixed positions.
/* function locatedBombs() {
  cells[0][0].isBomb = true;
  cells[8][2].isBomb = true;
  cells[9][2].isBomb = true;
  cells[2][7].isBomb = true;
  cells[4][9].isBomb = true;
  cells[9][9].isBomb = true;
} 
locatedBombs();*/

// TODO: Task 2 - Comment out the code of task 1. Instead of adding bombs in fixed places, add 10 of them in random places.
const BOMBS_COUNT = 6;
const BOMBSPLACES = [];
function randomBombPlace() {
  for (let b = 0; b < BOMBS_COUNT; b++) {
    let randomRow = Math.floor(Math.random() * ROWS_COUNT);
    let randomCol = Math.floor(Math.random() * COLS_COUNT);
    cells[randomRow][randomCol].isBomb = true;
    BOMBSPLACES.push(cells[randomRow][randomCol]);
  }
  console.log(BOMBSPLACES);
}
randomBombPlace();

render();

//
// Game functions definitions
//

function discoverCell(row, col, event) {
  // TODO: Task 5 - Reveal cells when clicked.
  //Clicked
  /* if (cells[row][col].hasBeenFlagged) {
    return;
  } else if (cells[row][col].isBomb && !event.shiftKey) {
    defeat = true;
  } */
  if (cells[row][col].isBomb && !event.shiftKey) {
    defeat = true;
  }
  if (cells[row][col].hasBeenFlagged) {
    cells[row][col].discoverCell = false;
  }
  discoverNeighbor(row, col);

  //check it if ibomb true? else go on recursive funk.tower of hanoi= game
  // TODO: Task 6 - Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.
  //Right
  discoverNeighbor(row, col + 1);
  //left
  discoverNeighbor(row, col - 1);
  //top
  discoverNeighbor(row - 1, col);
  //bottom
  discoverNeighbor(row + 1, col);
  //Right-TOP
  discoverNeighbor(row - 1, col + 1);
  //Right- bottom
  discoverNeighbor(row + 1, col + 1);
  //Left-top
  discoverNeighbor(row - 1, col - 1);
  //left-bottom
  discoverNeighbor(row + 1, col - 1);
  // TODO: Task 8 - Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift),set the variable defeat to true.
}

function discoverNeighbor(pRow, pCol) {
  if (pRow < 0 || pRow > ROWS_COUNT - 1 || pCol < 0 || pCol > COLS_COUNT - 1) {
    return;
  } else if (cells[pRow][pCol].isBomb) {
    console.log("Hello");
  } else {
    cells[pRow][pCol].discovered = true;
    getClearedCells();
  }
}

function flagCell(row, col) {
  // TODO: Task 7 - Implement flags. Flags allow the player to mark cells that they think contain a bomb.
  //                When clicking a cell and holding shift, function flagCell() will be called for you.
  cells[row][col].hasBeenFlagged = true;
}

// This function is called once for each cell when rendering the game. The row and col of the current cell is
// passed to the functionn
function countAdjacentBombs(row, col) {
  // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Implement this function
  //                so that it returns the count of adjacent cells with bombs in them.
  let numOfBombs = 0;
  if (row > 0 && row < ROWS_COUNT - 1 && col > 0 && col < COLS_COUNT - 1) {
    if (cells[row][col + 1].isBomb) {
      numOfBombs++;
    }
    if (cells[row][col - 1].isBomb) {
      numOfBombs++;
    }
    if (cells[row - 1][col].isBomb) {
      numOfBombs++;
    }
    if (cells[row + 1][col].isBomb) {
      numOfBombs++;
    }
    if (cells[row + 1][col + 1].isBomb) {
      numOfBombs++;
    }
    if (cells[row + 1][col - 1].isBomb) {
      numOfBombs++;
    }
    if (cells[row - 1][col - 1].isBomb) {
      numOfBombs++;
    }
    if (cells[row - 1][col + 1].isBomb) {
      numOfBombs++;
    }
  }

  return numOfBombs;
}

function getBombsCount() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  return BOMBS_COUNT;
}

function getClearedCells() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  numOfCells = cells.map((cell) => cell.filter((c) => c.discovered === true));
  return numOfCells.flat().length;
}

function getTotalCellsToClear() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  let total = COLS_COUNT * ROWS_COUNT;
  return total;
}

function checkForVictory() {
  //
  // TODO: Task 10 - Implement victory. If the player has revealed as many cells as they must (every cell that isn't a
  //                 bomb), set variable victory to true.
  let clearedCells = getClearedCells();
  let totalCells = getTotalCellsToClear();
  totalCells - BOMBS_COUNT == getClearedCells ? victory == true : null;
}

//
// Rendering functions
//
function getMessage() {
  if (victory == true) {
    return "Well done! 👏🏼<br><br>Refresh the page to start again.";
  } else if (defeat) {
    return "Boom! 💥<br><br>Refresh the page to try again.";
  }
  return "";
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
  var playfield = document.getElementById("playfield");
  var html = "";
  for (var row = 0; row < ROWS_COUNT; row++) {
    html += '<div class="row">';
    for (var col = 0; col < COLS_COUNT; col++) {
      var cell = cells[row][col];
      var cellText = "";
      var cssClass = "";
      var textColor = "";
      if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
        cssClass = "discovered";
        if (cell.isBomb) {
          cellText = "💣";
        } else {
          var adjBombs = countAdjacentBombs(row, col);
          if (adjBombs > 0) {
            cellText = adjBombs.toString();
            if (adjBombs == 1) {
              textColor = "blue";
            } else if (adjBombs == 2) {
              textColor = "green";
            } else if (adjBombs == 3) {
              textColor = "red";
            } else if (adjBombs == 4) {
              textColor = "black";
            }
          }
        }
      } else {
        if (cell.hasBeenFlagged) {
          cellText = "🚩";
        }
      }
      html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
    }
    html += "</div>";
  }
  playfield.innerHTML = html;

  // Defeat screen
  var body = document.getElementsByTagName("body")[0];
  if (defeat) {
    body.classList.add("defeat");
  }

  // Victory screen
  if (victory) {
    body.classList.add("victory");
  }

  // Update stats
  document.getElementById("bombs-count").innerText = getBombsCount().toString();
  document.getElementById("cleared-cells-count").innerText =
    getClearedCells().toString();
  document.getElementById("total-cells-to-clear").innerText =
    getTotalCellsToClear().toString();

  // Update message
  document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set to the relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
  if (event.shiftKey) {
    flagCell(row, col);
  } else {
    if (!cells[row][col].hasBeenFlagged) {
      discoverCell(row, col, event);
    }
    if (cells[row][col].hasBeenFlagged) {
      cells[row][col].hasBeenFlagged = false;
    }
  }
  checkForVictory();
  render();
}
