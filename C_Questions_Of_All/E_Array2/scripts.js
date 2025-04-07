// 1. Question: Write a function that adds the number `7` at the end of the array `let arr = [1, 2, 3, 4]` using  the `push` method. What is the new array? 
function addNumber(arr) {
    arr.push(7);
    return arr;
}
console.log(addNumber([1, 2, 3, 4]))

// 2. Question: Given `let arr = ['apple', 'banana']`, use the `pop` method to remove the last element. What is the modified array? 
function removeElement(arr) {
    arr.pop();
    return arr;
}
console.log(removeElement(['apple', 'banana']));

// 3. Question: Use the `shift` method to remove the first element from `let arr = [10, 20, 30, 40]`. What does the array look like afterward?
function removeFElement(arr) {
    arr.shift();
    return arr;
}
console.log(removeFElement([10, 20, 30, 40]));

// 4. Question: Write a function that adds `'start'` at the beginning of `let arr = ['middle', 'end']` using the `unshift` method. What is the new array? 
function addStart(arr) {
    arr.unshift('start');
    return arr;
}
console.log(addStart(['middle', 'end']));

// 5. Question: Convert `let arr = ['one', 'two', 'three']` to a string using the `toString` method. What is the resulting string? 
function arrToStrg(arr) {
    return arr.toString();
}
console.log(arrToStrg(['one', 'two', 'three']));

// 6. Question: Given `let arr = ['cat', 'dog']`, use the `concat` method to combine it with `['fish', 'bird']`. What is the resulting array? 
function concatMethod(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(concatMethod(['cat', 'dog'], ['fish', 'bird']))

// 7. Question: Use the `slice` method to extract the first two elements from `let arr = ['red', 'green', 'blue']`.What does the new array look like?
function extractFirstTwo(arr) {
    return arr.slice(0, 2);
}
console.log(extractFirstTwo(['red', 'green', 'blue']));

// 8. Question: Write a function that removes the last element from `let arr = ['x', 'y', 'z']` and then adds `'a'` at the beginning using the `unshift` method. What is the final array? 
function removeAndAddArray(arr) {
    arr.pop();
    arr.unshift('a');
    return arr;
}
console.log(removeAndAddArray(['x', 'y', 'z']));

// 9. Question: Use the `toString` method to convert `let arr = [100, 200, 300]` to a string, and then find the length of the resulting string. What is the length? 
function getStrLength(arr) {
    return arr.toString().length;
}
console.log(getStrLength([100, 200, 300, 400]));

// 10. Question: Write a function that uses the `push` method to add `'orange'` and `'grape'` to the end of `let arr = ['apple', 'banana']`. What is the new array? 
function fruits(name) {
    name.push('orange', 'grape');
    return name;
}
console.log(fruits(['apple', 'banana']));

// 11. Question: Use the `shift` method to remove the first element from `let arr = ['sun', 'moon', 'stars']`. What is the modified array?
function removeFirstElement(arr) {
    arr.shift();
    return arr;
}
console.log(removeFirstElement(['sun', 'moon', 'stars']));

// 12. Question: Write a function that adds `42` at the beginning of `let arr = [7, 14, 21]` using the `unshift`method. What is the resulting array?
function addFortyTwo(arr) {
    arr.unshift(42);
    return arr;
}
console.log(addFortyTwo([7, 14, 21]));

// 13. Question: Given `let arr = [5, 10, 15, 20]`, use the `pop` method to remove the last element and store it in a variable. What is the value of the variable?
function removeAndReturnLast(arr) {
    return arr.pop();
}
console.log(removeAndReturnLast([5, 10, 15, 20]));

// 14. Question: Convert `let arr = ['hello', 'world']` to a string using the `toString` method, and then split the string back into an array using `split(',')`. What is the resulting array?
function convertAndSplit(arr) {
    return arr.toString().split(',');
}
console.log(convertAndSplit(['hello', 'world']));

// 15. Question: Use the `concat` method to combine `let arr1 = ['x', 'y']` and `let arr2 = [1, 2]`. What is the resulting array?
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays(['x', 'y'], [1, 2]));

// 16. Question: Write a function that adds `99` at the end of `let arr = [1, 2, 3, 4]` using the `push` method, and then removes the first element using the `shift` method. What is the final array?
function modifyNumbers(arr) {
    arr.push(99);
    arr.shift();
    return arr;
}
console.log(modifyNumbers([1, 2, 3, 4]));

// 17. Question: Use the `slice` method to extract the last two elements from `let arr = ['a', 'b', 'c', 'd']`. What is the resulting array?
function extractLastTwo(arr) {
    return arr.slice(-2);
}
console.log(extractLastTwo(['a', 'b', 'c', 'd']));

// 18. Question: Write a function that adds `'lion'` and `'tiger'` at the beginning of `let arr = ['elephant', 'giraffe']` using the `unshift` method. What is the new length of the array?
function addAnimals(arr) {
    arr.unshift('lion', 'tiger');
    return arr.length;
}
console.log(addAnimals(['elephant', 'giraffe']))

// 19. Question: Convert `let arr = [20, 30, 40]` to a string using the `toString` method, and then convert the string back to an array using `split(',')`. What is the final array?
function convertBack(arr) {
    return arr.toString().split(',');
}
console.log(convertBack([20, 30, 40]));

// 20. Question: Use the `push` method to add `'grape'` to `let arr = ['apple', 'banana', 'orange']`, and then use the `pop` method to remove the last element. What is the resulting array?
function addAndRemove(arr) {
    arr.push('grape');
    arr.pop();
    return arr;
}
console.log(addAndRemove(['apple', 'banana', 'orange']));

