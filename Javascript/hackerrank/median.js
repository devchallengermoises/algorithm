/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function findMedian(arr) {
    return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
  }