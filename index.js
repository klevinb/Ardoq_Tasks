/*
Create a function that, given a list of integers, returns the highest product between three of those numbers.
For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300
*/

const arrayOfNumbers = [1, 10, 2, 6, 5, 3];

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

const anotherWay = (array) => {
  let firstNumber = -999,
    secondNumber = -999,
    thirdNumber = -999,
    i;

  for (i = 0; i < array.length; i++) {
    if (array[i] > firstNumber) {
      thirdNumber = secondNumber;
      secondNumber = firstNumber;
      firstNumber = array[i];
    } else if (array[i] > secondNumber) {
      thirdNumber = secondNumber;
      secondNumber = array[i];
    } else if (array[i] > thirdNumber) {
      thirdNumber = array[i];
    }
  }
  console.log(firstNumber * secondNumber * thirdNumber);
};

console.log('Result ', threeHighestNumbers(arrayOfNumbers));
anotherWay(arrayOfNumbers);
