/*
Create a function that, given a list of integers, returns the highest product between three of those numbers.
For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300
*/

const arrayOfNumbers = [1, 10, 2, 6, 5, 3];

const threeHighestNumbers = (array) => {
  let max = -999,
    maxNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    const newArray = arrayOfNumbers.filter((nr) => nr !== max);
    console.log(newArray);
  }
  console.log(max);
};

threeHighestNumbers(arrayOfNumbers);
