/*
Create a function that, given a list of integers, returns the highest product between three of those numbers.
For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300
*/

const arrayOfNumbers = [1, 412, 5124, 13, 421, 412];

const threeHighestNumbers = (array) => {
  const sortedArray = arrayOfNumbers.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a == b) {
      return 0;
    } else {
      return -1;
    }
  });
  console.log(sortedArray);

  let highestP = 1;
  for (let i = sortedArray.length - 1; i > 0; i--) {
    highestP *= sortedArray[i];
    if (i === sortedArray.length - 3) {
      break;
    }
  }
  return highestP;
};

// threeHighestNumbers(arrayOfNumbers);
console.log('Result ', threeHighestNumbers(arrayOfNumbers));
