
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
    
  return  matrix.reduce(function (accumulator, currentValue, index) {
    if (index % 2 === 0) {
      return accumulator.concat(currentValue);
    }

    return accumulator.concat(currentValue.reverse());
  }, []);
}
