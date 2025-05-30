export class GameBoard {
  constructor(player) {
    this.player = player;
    this.board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => 0)
    );
    this.ships = [];
  }

  placeShips() {
    let isVertical = true;

    this.ships.forEach((ship, index) => {
      let placed = false;
      const shipId = index + 2; // start from 2 to distinguish from 0 (empty)

      while (!placed) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        // Boundary check
        if (isVertical && x + ship.length > 10) continue;
        if (!isVertical && y + ship.length > 10) continue;

        // Overlap check
        let collision = false;
        for (let i = 0; i < ship.length; i++) {
          const row = isVertical ? x + i : x;
          const col = isVertical ? y : y + i;

          if (this.board[row][col] !== 0) {
            collision = true;
            break;
          }
        }

        if (collision) continue;

        // Place ship using shipId
        for (let i = 0; i < ship.length; i++) {
          const row = isVertical ? x + i : x;
          const col = isVertical ? y : y + i;

          this.board[row][col] = shipId;
        }

        placed = true;
        isVertical = !isVertical; // Alternate orientation
      }
    });
  }

  receiveAttack(x, y) {
    if (this.board[x][y] >= 2 && this.board[x][y] <= 5) {
      this.board[x][y] = 1;
    }
    return;
  }
}
