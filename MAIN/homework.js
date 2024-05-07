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
let arr = ['codewars', 'flick', 'code', 'wars'];



