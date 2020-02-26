module.exports = function countCats(matrix) {
  return matrix.reduce((sum, item) => sum + item.filter(x => x === '^^').length, 0);
};
