$(document).ready(function () {
  // Setup the grid
  createGameBoard(16);

  // Create pixelated trail
  addHover();

  $('#clearButton').click(function () {
    $('.cell').removeClass('highlighted');
    var widthOfGrid = prompt("How many squares per side?");

    createGameBoard(widthOfGrid);
  });

});

function createGameBoard(numCells) {
  var gameboard = $('.gameboard');
  gameboard.empty();
  for (i = 0; i < numCells; i++) {
    gameboard.append('<div class="row">');
    for (j = 0; j < numCells; j++) {
      gameboard.append('<div class="cell"></div>');
    }
    gameboard.append('</div>');
  }
  var cellWidth = (900 - (numCells * 2)) / numCells; // account for the border
  console.log("cellWidth=" + cellWidth);
  $('.cell').width(cellWidth);
  $('.cell').height(cellWidth);
  addHover();
}

function addHover() {
  $('.cell').hover(function () {
    $(this).addClass('highlighted');
  });
}