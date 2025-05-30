// import { startGame } from "./gameLogic";

const startBtn = document.querySelector("#start-btn");
const gridContainer = document.querySelector(".grids");

startBtn.addEventListener("click", generateGrids);

function generateGrids() {
  startBtn.textContent = "restart";
  gridContainer.replaceChildren();

  let width = 10;

  const playerGrid = document.createElement("div");
  playerGrid.classList.add("player-grid");

  const computerGrid = document.createElement("div");
  computerGrid.classList.add("computer-grid");
  
  for (let row = 0; row < width; row++) {
    for (let col = 0; col < width; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      playerGrid.append(cell);
    }
  }
  for (let row = 0; row < width; row++) {
    for (let col = 0; col < width; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      computerGrid.append(cell);
    }
  }
  gridContainer.append(playerGrid, computerGrid);
}

