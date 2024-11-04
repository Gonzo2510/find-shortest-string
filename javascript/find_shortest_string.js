function findShortestString(arr) {
  let shortestString = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestString.length)
      shortestString = arr[i]
  }
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  function benchmark() {
    const smallInput = [3, 1, 2];
    const largeInput = Array.from({ length: 100 }, (_, i) => 100 - i);

    const startTime = Date.now();

    for (let i = 0; i < 1000; i++) {
      selectionSort([...smallInput]);
      selectionSort([...largeInput]);
    }

    const endTime = Date.now();
    const averageRuntime = (endTime - startTime) / 2000;

    return averageRuntime;

  }
}

module.exports = findShortestString;

// Please add your pseudocode to this file

// And a written explanation of your solution
