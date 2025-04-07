// // 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`. 
// let str = "Hello EveryOne";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i].toLowerCase() === 'e') {
//     count++;
//   }
// }
// console.log(count);

// // 2. Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `if-else` statements. 
// let str = 'hello everyone'
// if(str.startsWith('H') && str.endsWith('e')){
//     console.log("The string is start with H and end with e.")
// }
// else{
//     console.log("The string is not start with H and end with e..")
// }

// // 3. Write a program that loops through a string and prints only the uppercase letters. 
// let str = "Hello EveryOne";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//     console.log(str[i]);
//   }
// }

// // 4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given string.
// let word = 'Hello EveryOne Hello!.'
// for(i = 0; i < word.length; i++){
//     let newWord = word.replaceAll('Hello', 'Hi');
//     console.log(newWord)
// } 
// let str = "Hello Hello Hello";
// let words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "Hello") {
//     words[i] = "Hi";
//   }
// }
// console.log(words.join(" "));

// // 5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`. 
// let str = "Hello EveryOne";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     count++;
//   }
// }
// console.log(count);

// // 6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello EveryOne"` to form a new string. 
// let str = "Hello EveryOne";
// let words = str.split(" ");
// let newStr = "";
// for (let i = 0; i < words.length; i++) {
//   newStr += words[i][0];
// }
// console.log(newStr);

// // 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `if-else` statements. 
// let str = "radar";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// if (str === reversed) {
//   console.log("A string is a Palindrome..");
// } else {
//   console.log("A string is not a palindrome..");
// }

// // 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the string is empty.
// let str = "  ";
// str = str.trim();
// if (str === "") {
//   console.log("The string is empty..");
// } else {
//   console.log("The string is not empty");
// }

// // 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and to uppercase if it’s lowercase. 
// let str = "Hello EveryOne";
// let convert = "";
// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (ch === ch.toUpperCase()) {
//     convert += ch.toLowerCase();
//   } else {
//     convert += ch.toUpperCase();
//   }
// }
// console.log(convert);

// // 10. Write a program that slices the first 5 characters of a string and checks if this substring is equal to `"Hello"`. 
// let str = "Hello EveryOne";
// let subStr = str.slice(0, 5);
// if (subStr === "Hello") {
//   console.log("The substring is equal to 'Hello.");
// } else {
//   console.log("The substring is not equal to 'Hello.");
// }

// // 11. Create a program that replaces every vowel in a string with an asterisk (*) using a loop. 
// let str = "Hello EveryOne";
// let result = "";
// let vowels = "aeiouAEIOU";
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     result += "*";
//   } else {
//     result += str[i];
//   }
// }
// console.log(result);

// // 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it does, replace it with `"Hi"`. 
// let str = "Hello everyOne";
// if (str.includes("Hello")) {
//   str = str.replace("Hello", "Hi");
// }
// console.log(str);

// // 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`. 
// let str = "Hello EveryOne";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     count++;
//   }
// }
// console.log(count);

// // 14. Write a program that checks if the length of a string is greater than 10. If it is, print the string in uppercase; otherwise, print it in lowercase. 
// let str = "Hello EveryOne";
// if (str.length > 10) {
//   console.log(str.toUpperCase());
// } else {
//   console.log(str.toLowerCase());
// }

// // 15. Create a program that loops through a string and prints the index of each letter 'o' in the string `"Hello EveryOne"`. 
// let str = "Hello EveryOne";
// for (let i = 0; i < str.length; i++) {
//   if (str[i].toLowerCase() === 'o') {
//     console.log(i);
//   }
// }

// // 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statements. 
// let str = "   Hellos  ";
// str = str.trim();
// if (str.length % 2 === 0) {
//   console.log("It's length is even.");
// } else {
//   console.log("It's length is odd..");
// }

// // 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use `if-else` statements to print the result. 
// let str = "radars";
// if (str.length > 0 && str[0] === str[str.length - 1]) {
//   console.log("The first and last characters of a string are the same..");
// } else {
//   console.log("The first and last characters of a string are the different.");
// }

// // 18. Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else` statements.
// let str = "HelloWorld";
// if (str.length >= 3) {
//   str = "ABC" + str.slice(3);
// }
// console.log(str);

// // 19. Create a program that uses a loop to reverse a string and print the reversed string.
// let str = "Hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed);

// // 20. Write a program that counts how many times a substring `"One"` appears in the string `"Hello EveryOne"` using a loop. 
// let str = "Hello EveryOne";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'O' && str[i+1] === 'n' && str[i+2] === 'e') {
//         count++;
//     }
//     console.log(str[i])
// }
// console.log(count)

