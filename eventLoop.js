// Part 1: Stack Overflow

// Declare a global counter variable
let counter = 1;

// Create a function that increments the variable and calls itself recursively.

function recursiveFunction(){
    try{
           // Increment the counter variable
    counter++;

    // Call itself recursively
    recursiveFunction(); 
    }
 
catch (error) {
    // Log the error and the value of the counter variable
    console.error("Stack Overflow Error:", error.message);
    console.log("Number of Recursive Calls:", counter);
  }
}

// Start the process
recursiveFunction();


// Part 2: Trampolines

// Recursive function to flatten an array
function flattenArrayRecursive(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }

  const [head, ...tail] = arr;

  if (Array.isArray(head)) {
    // If the element is an array, flatten it and continue
    return () => flattenArrayRecursive([...head, ...tail], result);
  } else {
    // If the element is not an array, add it to the result and continue
    result.push(head);
    return () => flattenArrayRecursive(tail, result);
  }
}

// Trampoline function
function trampoline(fn) {
  return function (...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}

// Trampolined version of the recursive function
const trampolinedFlattenArray = trampoline(flattenArrayRecursive);
  
// Example usage
const nestedArray = [1, [2, [3, 4, [5, 6]]]];
const flattenedArray = trampolinedFlattenArray(nestedArray);

console.log("Original Nested Array:", nestedArray);
console.log("Flattened Array:", flattenedArray);

