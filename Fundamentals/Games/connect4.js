// <-- Connect 4 -->

/*
  Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games
  
  Task
  The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

  Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
  Rules
  If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

  If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

  If the game has been won by a player, any following moves should return ”Game has finished!”.

  Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
  
  Player 1 starts the game every time and alternates with player 2.

  The columns are numbered 0-6 left to right.
*/

// <-- Solution -->
class Connect4 {
  constructor() {
    this.player = 1;
    this.board = Array.from({ length: 7 }, () => []);
    this.finished = false;
  }

  play(col) {
    if (this.finished) {
      return "Game has finished!";
    }

    if (this.board[col].length >= 6) {
      return "Column full!";
    }

    const row = this.board[col].length;
    this.board[col].push(this.player);
    const range4 = Array.from({ length: 4 }, (_, i) => i);

    this.finished = range4.some(
      (i) =>
        range4.every((j) => this.board[col][row - i + j] === this.player) ||
        range4.every((j) => (this.board[col - i + j] || [])[row] === this.player) ||
        range4.every((j) => (this.board[col - i + j] || [])[row - i + j] === this.player) ||
        range4.every((j) => (this.board[col - i + j] || [])[row + i - j] === this.player),
    );

    if (this.finished) {
      return `Player ${this.player} wins!`;
    }

    let ret = `Player ${this.player} has a turn`;
    this.player = this.player === 1 ? 2 : 1;

    return ret;
  }
}
