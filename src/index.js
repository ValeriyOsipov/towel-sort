module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
      matrix[i].sort(function(a, b){return b - a});
    }
  }
  return [].concat(...matrix);
}