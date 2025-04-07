// // Sum of Odd Numbers: Use a loop to calculate the sum of odd numbers between 1 and 10.

// let OddNumSum = 0;
// for(i = 1; i <= 10; i++){
//     if(OddNumSum%2==1){
//         OddNumSum += i;
//         console.log(OddNumSum);
//     }
//     else{
//         console.log("Error")
//     }
// }

let sum = 0;
let count = 0;
let num = 1;

while (count < 5) {
    sum += num;
    num += 2;  // Move to the next odd number
    count++;
}

console.log("Sum of the first 5 odd numbers:", sum);
