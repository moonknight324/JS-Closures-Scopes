// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;

// Progression 2: add 3 variables: title, currIndex, check

function createPop(givenArr, element) {
  let title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  // Progression 3: create a function "searchForElement"
  const index = givenArr.indexOf(element);

  if (index !== -1) {
    check = true;
    currIndex = index;
  }

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
  // to return the desired output.

  if (!check) {
    return `The item is not present and is at index -1000000`;
  } else {
    return `The item is present and is at index ${currIndex}`;
  }
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
