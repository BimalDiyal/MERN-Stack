// 1. Write a function that uses a `for` loop to print numbers from 1 to 10.
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers()

// 2. Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers. 
function sumNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumNaturalNumbers(50));

// 3. Write a function that uses a `for` loop to print all even numbers between 1 and 20. 
function printEvenNumbers() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}
printEvenNumbers();

// 4. Write a function that uses a `for` loop to print all odd numbers between 1 and 20. 
function printOddNumbers() {
    for (let i = 1; i <= 20; i += 2) {
        console.log(i);
    }
}
printOddNumbers();

// 5. Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`.
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

// 6. Write a function that uses a `for` loop to print the multiplication table of 5.
function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }
}
multiplicationTable()

// 7. Write a function that uses a `for` loop to print numbers from 10 to 1 in reverse order. 
function printReverse() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
printReverse();

// 8. Write a function that uses a `for` loop to print all multiples of 3 between 1 and 30. 
function multiplesOfThree() {
    for (let i = 3; i <= 30; i += 3) {
        console.log(i);
    }
}
multiplesOfThree();

// 9. Write a function that uses a `for` loop to calculate and return the sum of all even numbers between 1and 50. 
function sumEvenNumbers() {
    let sum = 0;
    for (let i = 2; i <= 50; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumEvenNumbers());

// 10. Write a function that uses a `for` loop to calculate and return the sum of all odd numbers between 1 and 50. 
function sumOddNumbers() {
    let sum = 0;
    for (let i = 1; i <= 50; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOddNumbers());

// 11. Write a function that uses a `for` loop to print all numbers between 1 and 100 that are divisible by 5. 
function printDivisibleBy5() {
    for (let i = 5; i <= 100; i += 5) {
        console.log(i);
    }
}
printDivisibleBy5();

// 12. Write a function that uses a `for` loop to print the first 10 numbers in the Fibonacci sequence.
function printFibonacci() {
    let a = 0, b = 1, next;
    console.log(a);
    console.log(b);
    for (let i = 2; i < 10; i++) {
        next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
printFibonacci()

// 13. Write a function that uses a `for` loop to count and return the number of digits in a given positive integer. 
function countDigits(num) {
    let count = 0;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        count++;
    }
    return count;
}

console.log(countDigits(665265495765));


// 14. Write a function that uses a `for` loop to print the square of each number from 1 to 10. 
function printSquares() {
    for (let i = 1; i <= 10; i++) {
        console.log(i ** 2);
    }
}
printSquares();

// 15. Write a function that uses a `for` loop to calculate and return the sum of the squares of the first `n` natural numbers. 
function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 2;
    }
    return sum;
}
console.log(sumOfSquares(15));

// 16. Write a function that uses a `for` loop to print the cube of each number from 1 to 10. 
function printCubes() {
    for (let i = 1; i <= 10; i++) {
        console.log(i ** 3);
    }
}
printCubes();

// 17. Write a function that uses a `for` loop to find and return the smallest number greater than 0 that is divisible by both 3 and 4. 
function smallestMultipleOf3And4() {
    for (let i = 1; ; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            return i;
        }
    }
}
console.log(smallestMultipleOf3And4());

// 18. Write a function that uses a `for` loop to print the first 10 even numbers. 
function printFirst10EvenNumbers() {
    for (let i = 2, count = 0; count < 10; i += 2, count++) {
        console.log(i);
    }
}
printFirst10EvenNumbers();

// 19. Write a function that uses a `for` loop to print all numbers from 1 to 100 that are divisible by both 2 and 5. 
function printDivisibleBy2And5() {
    for (let i = 10; i <= 100; i += 10) {
        console.log(i);
    }
}
printDivisibleBy2And5();

// 20. Write a function that uses a `for` loop to calculate and return the sum of all multiples of 3 or 5 below.
function sumOfMultiples() {
    let sum = 0;
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfMultiples());