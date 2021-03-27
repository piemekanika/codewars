/**
 * 
 * @param {[]} board Board
 */
function isSolved(board) {
  if (board.some(line => line.some(spot => spot === 0))) {
    return -1
  }

  if (board.some(line => line.some(spot => spot !== 0 && spot)))

  return 0
}

console.log(isSolved([[0,0,1], [0,1,2], [2,1,0]]) === -1)