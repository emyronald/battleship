import { Player } from "./player.js";
import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";

const player = new Player("player");

const computer = new Player("computer");

const playerBoard = new GameBoard(player);

const computerBoard = new GameBoard(computer);

export function startGame() {
  const destroyer = new Ship(2);
  const submarine = new Ship(3);
  const cruiser = new Ship(3);
  const battleship = new Ship(4);
  const carrier = new Ship(5);
  playerBoard.ships.push(destroyer, submarine, cruiser, battleship, carrier);
  computerBoard.ships.push(destroyer, submarine, cruiser, battleship, carrier);
}
// startGame()
// console.log(playerBoard);
// playerBoard.placeShips()
// console.log(playerBoard.board);
