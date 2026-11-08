// <-- Maze Runner -->

/*
  Introduction
  Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
  Task
  You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
  The Maze array will look like

  maze = [[1,1,1,1,1,1,1],
          [1,0,0,0,0,0,3],
          [1,0,1,0,1,0,1],
          [0,0,1,0,0,0,1],
          [1,0,1,0,1,0,1],
          [1,0,0,0,0,0,1],
          [1,2,1,0,1,0,1]]
  ..with the following key

        0 = Safe place to walk
        1 = Wall
        2 = Start Point
        3 = Finish Point
    direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
*/

// <-- My Solution -->
function mazeRunner(maze, dirs) {
  const y = maze.findIndex((arr) => arr.includes(2));
  const x = maze[y].indexOf(2);
  let curPos;

  for (var i = 0; i < dirs.length; i++) {
    if (dirs[i] === "N") y--;
    if (dirs[i] === "S") y++;
    if (dirs[i] === "W") x--;
    if (dirs[i] === "E") x++;
    if (!maze[y]) return "Dead";

    curPos = maze[y][x];

    if (curPos === 3) return "Finish";
    if (curPos === 1 || curPos === undefined) return "Dead";
  }

  return "Lost";
}
