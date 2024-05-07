// -------- ------- ------- ------- ----------- -----------
1. // Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

let str = "Hi!!!";

function removeLastExcMark (str) {
    if (str[str.length - 1] === '!') {
        return changedStr = str.slice(0, -1).trim()
    } else {
        return str
    }
}

// console.log(removeLastExcMark(str));

// -------- ------- ------- ------- ----------- -----------

2. /*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/

// ?

// -------- ------- ------- ------- ----------- -----------

3. // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//     if (num > 0){
//         return -num;
//     }else{
//         return num;
//     }
// }

// console.log(makeNegative(-8));

// -------- ------- ------- ------- ----------- -----------
4. /*
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.
*/
// function flickSwitch(arr) {
//     let toggle = true;
//     const result = [];
//     for (const item of arr) {
//       if (item === 'flick') {
//         toggle = !toggle;
//       }
//       result.push(toggle);
//     }
//     return result;
//   }
  
//   console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']))
//   console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))
// -------- ------- ------- ------- ----------- -----------
5. /*  ??
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/

// function excludingVatPrice(priceIncludingVat) {
//     if (priceIncludingVat === null) {
//       return -1;
//     }
//     const priceWithoutVat = priceIncludingVat / 1.15;
//     return Math.round(priceWithoutVat * 100) / 100;
//   }

//   console.log(excludingVatPrice(230.00)); // ➞ 200.00

// -------- ------- ------- ------- ----------- -----------
6. // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeFirstAndLast(str) {
    return str.slice(1, -1);
  }
  
 
//   console.log(removeFirstAndLast("hello"))

// -------- ------- ------- ------- ----------- -----------

7. // Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
    let count = 0;
      for(let i = 0; i < str.length; i++) {
          if(str[i] === letter) {
              count++;
          }
      }
      return count;
  }

//   console.log(strCount("hello", "l"));


// -------- ------- ------- ------- ----------- -----------

8. // When provided with a letter, return its position in the alphabet.

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function position(letter){
    let letterPosition;
    for(let i = 0; i < alphabet.length; i++){
        if(alphabet[i] === letter){
            letterPosition = alphabet.indexOf(letter)+1;
            return letterPosition;
        }
    }

}
// console.log(position('a'));

// -------- ------- ------- ------- ----------- -----------

9. // Write a function which takes a number and returns the corresponding ASCII char for that value.
let code;
function getChar(code){
    return String.fromCharCode(code)
}
// console.log(getChar(66));

// -------- ------- ------- ------- ----------- -----------

10. // ?? What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array? Ex: "apple ban" --> ["apple 5", "ban 3"]

let sentence = 'Hey, what are you doing ?';

function addLength(sentence) {
    let words = sentence.split(' ');
    words.forEach(word => {
        word = word.split(' ');
        let count = 0;
        for(let letter of word){
            console.log(letter.split(' '));
            count++
        }
    })
        
}


let result = addLength(sentence.words)
// console.log(result);