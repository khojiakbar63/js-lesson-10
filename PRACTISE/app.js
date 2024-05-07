// 1.
function UserData(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return `
        Ism: ${this.firstName},
        Familiya: ${this.lastName},
        Yoshi: ${this.age}
        `;
    }
}
let user1 = new UserData('Alisher', 'Umarov', 23);
// console.log(user1.fullName());

2. // find max number use Math.max()
let arr = [3,1,14,2,5];

function FindMax(arr) {
    let max = Math.max(...arr);
    return max;
}
// console.log(FindMax(arr));

3. // find letter count

function strCount(str, letter){  
    let count = 0;
      for(let i = 0; i < str.length; i++) {
          if(str[i] === letter) {
              count++;
          }
      }
      return count;
  }

let count1 = strCount('Alisheir', 'i');
// console.log(count1);


4. // Summary
function SumNumbers(arr) {
    this.arr = arr;
    this.count = 0;

    for(let item of this.arr){
        this.count += item;
    }

    // this.count = this.arr.reduce((sum, value) => sum + value, 0)
}
const numbers1 = new SumNumbers([1,2,3,4,5]);
// console.log(numbers1.count);



// FIZZ BUZZ
let number = 1;

function fizzBuzz (number) {
    if(number % 3 === 0 && number % 5 === 0)return `FizzBuzz`
    if(number % 3 === 0) return `Fizz`
    if(number % 5 === 0) return `Buzz`
    return `Invalid number`
}

// console.log(fizzBuzz(number));

let strNum = `aa32dsAf5737xc9`;

function extractNumber(strNum) {
    // let number = strNum.replace(/[a-zA-Z]/g,'');
    let number = strNum.match(/[0-9]/g);
    return +number.join('') // for match
    return Number(number) // for replace
}

console.log(extractNumber(strNum));