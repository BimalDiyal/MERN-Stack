// 1. Find Even Numbers: - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`. 
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = [];
for (let num of numbers1) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);

// 2. Find Odd Numbers: - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`. 
const numbers2 = [10, 15, 20, 25, 30];
const oddNumbers = [];
for (let num of numbers2) {
    if (num % 2 !== 0) {
        oddNumbers.push(num);
    }
}
console.log(oddNumbers);

// 3. Sum of Array Elements: - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`. 
const numbers3 = [5, 10, 15];
let sum = 0;
for (let num of numbers3) {
    sum += num;
}
console.log(sum);

// 4. Find Maximum Value: - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`. 
const numbers4 = [3, 5, 7, 2, 8];
let maxValue = numbers4[0];
for (let num of numbers4) {
    if (num > maxValue) {
        maxValue = num;
    }
}
console.log(maxValue);

// 5. Find Minimum Value: - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`.
const numbers5 = [12, 4, 6, 9, 41];
let minValue = numbers5[0];
for (let num of numbers5) {
    if (num < minValue) {
        minValue = num;
    }
}
console.log(minValue);

// 6. Count Array Elements: - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`. 
const numbers6 = [8, 3, 7, 5];
let count = 0;
for (let _ of numbers6) {
    count++;
}
console.log(numbers6)
console.log(count);

// 7. Multiply Array Elements: - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result. 
const numbers7 = [2, 3, 4];
let product = 1;
for (let num of numbers7) {
    product *= num;
}
console.log(product);

// 8. Check for a Specific Number: - Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found" or "Not Found". 
const numbers8 = [5, 6, 7, 8];
let found = false;
for (let num of numbers8) {
    if (num === 67) {
        found = true;
        break;
    }
}
console.log(found ? "Found" : "Not Found");

// 9. Remove Duplicates: - Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the new array. 
const numbers9 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
for (let num of numbers9) {
    if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
    }
}
console.log(uniqueArray);

// 10. Create an Array with Squares: - Write a code to create a new array containing the squares of the elements from the array `[1, 2, 3]`. 
const numbers10 = [1, 2, 3];
const squaredArray = [];
for (let num of numbers10) {
    squaredArray.push(num * num);
}
console.log(squaredArray);

// 11. Filter Numbers Greater than 10: - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`. 
const numbers11 = [5, 12, 7, 14, 3];
const filteredNumbers = [];
for (let num of numbers11) {
    if (num > 10) {
        filteredNumbers.push(num);
    }
}
console.log(filteredNumbers);

// 12. Combine Two Arrays: - Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array. 
const numbers12a = [1, 2, 3];
const numbers12b = [4, 5, 6];
const combinedArray = [];
for (let num of numbers12a) {
    combinedArray.push(num);
}
for (let num of numbers12b) {
    combinedArray.push(num);
}
console.log(combinedArray);

// 13. Find Array Length: - Write a code to print the length of the array `[9, 7, 5, 3, 1]`. 
const numbers13 = [9, 7, 5, 3, 1];
let length = 0;
for (let _ of numbers13) {
    length++;
}
console.log(length);

// 14. Find Average Value: - Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`. 
const numbers14 = [10, 20, 30, 40];
let total = 0;
for (let num of numbers14) {
    total += num;
}
const average = total / numbers14.length;
console.log(average);

// 15. Reverse an Array: - Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array. 
const numbers15 = [1, 2, 3, 4, 5, 6];
const reversedArray = [];
for (let i = numbers15.length - 1; i >= 0; i--) {
    reversedArray.push(numbers15[i]);
}
console.log(reversedArray);

// 16. Find Common Elements: - Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3, 4]`. 
const numbers16a = [1, 2, 3, 4];
const numbers16b = [2, 3, 4];
const commonElements = [];
for (let num of numbers16a) {
    if (numbers16b.includes(num)) {
        commonElements.push(num);
    }
}
console.log(commonElements);

// 17. Split Array into Two: - Write a code to split the array `[1, 2, 3, 4, 5]` into two arrays: one with the first half and one with the second half. 
const numbers17 = [1, 2, 3, 4, 5];
const mid = Math.ceil(numbers17.length / 2);
const firstHalf = [];
const secondHalf = [];
for (let i = 0; i < numbers17.length; i++) {
    if (i < mid) {
        firstHalf.push(numbers17[i]);
    } else {
        secondHalf.push(numbers17[i]);
    }
}
console.log(firstHalf, secondHalf);

// 18. Find Index of an Element: - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`. 
const numbers18 = [10, 45, 55, 20, 5, 30];
let index = -1;
for (let i = 0; i < numbers18.length; i++) {
    if (numbers18[i] === 5) {
        index = i;
        break;
    }
}
console.log(index);

// 19. Check if Array Contains a Number: - Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No". 
const numbers19 = [2, 4, 6, 8];
let contains = false;
for (let num of numbers19) {
    if (num === 4) {
        contains = true;
        break;
    }
}
console.log(contains ? "Yes" : "No");

// 20. Create an Array with String Lengths: - Write a code to create a new array containing the lengths of each string from the array `["apple", "banana", "cherry"]`.
const strings = ["apple", "banana", "cherry"];
const stringLengths = [];
for (let str of strings) {
    stringLengths.push(str.length);
}
console.log(stringLengths);
