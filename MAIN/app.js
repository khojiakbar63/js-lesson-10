// match(/[0-9]/g)
// parse()
// parseFloat()
// parseInt()
// flat(1/0.1) => for arrays
// join()
// console.log(1/0.1);

// slice(start, end)  => ctrl + c
// splice(start, deleteCount, item1, item2, ...) => ctrl + x

// isNaN()
// console.log(isFinite(1 / 0) ); // false

// isInteger(2.4)
// console.log(Number.isInteger(4));
// console.log(Number.isInteger(4.3));
// console.log(Number.isInteger(Math.floor(2.4)));
// Math.round(2.5) => 3
// 0 , 1 , 2 , 3 , 4 |, 5 , 6 , 7 , 8 , 9
// toFixed(2) => 2.40

// toPrecision(2)
// const num = 123.456789;
// console.log(num.toPrecision(4)); // Output: 123.5

// BigInt("string")  // 423n


// console.log(Number.isSafeInteger(12345678912345678901 + 12345678912345678901));
// 2  daraja 53 check qilish un
// 2 daraja 53 -1 not bit integer

// eval() only for string
// console.log(eval("2 + 3"));

// CHALLENGE: edd Mr 
// const users = ['John', 'Jane', 'Jack', 'Jill', 'Joe'];
// for(let i = 0; i < users.length; i++) {
//     let sum = []
//     sum += `
//     Mr ${users[i]}
//     `
//     console.log(sum);
//     // console.log(`Mr ${users[i]}`);
// }

// const users = ['John', 'Jane', 'Jack', 'Jill', 'Joe'];

// users.forEach((user) => {
//     console.log(`Mr ${user}`);
// });

// forEach()
// fill()

// Long-hand
// if(false) {
//     console.log(true);
// }else {
//     console.log(false);
// }
// Short-hand
// let age = 18
// age >= 18 ? console.log("Adult") : age < 18 && 10 < age ? console.log("Teenager") : console.log("Child");

// // Switch case
// let day = 7;
// switch(day) {
//     case 1:
//         console.log("Workday");
//         break;
//     case 2:
//         console.log("Workday");
//         break;
//     case 3:
//         console.log("Workday");
//         break;
//     case 4:
//         console.log("Workday");
//         break;
//     case 5:
//         console.log("Workday");
//         break;
//     case 6:
//     case 7:
//         console.log("Rest...");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// let age = 8;

// switch(true) {
//     case age < 18:
//         console.log('Teenager');
//         break;
//     case age >= 18 && age < 40:
//         console.log('Adult');
//         break;
//     case age >= 40 && age < 60:
//         console.log('Middle-aged');
//         break;
//     case age >= 60:
//         console.log('Senior');
//         break; 
//     default:
//         console.log('Invalid age');
// }

// // NESTED IF:

// let day = prompt("Enter the day: ");
// let weather = prompt("Enter the weather: ");

// if(day === "Saturday" || day === "Sunday") {

//     console.log("Rest day!");

//     if (weather === "sunny") {
//         console.log("Go outside!");
//     }else {
//         console.log("Stay at home!");
//     }

// }else {

//     console.log("Work day!");

//     if(weather === "sunny") {
//         console.log("Wear something lighter!");
//     } else {
//         console.log("Wear something warmer!");
//     }

// }


// FIND WHITE SPACE
// let sentence = 'how are you ?'.trim();
// let count = 1;
// for(let i = 0; i < sentence.length; i++) {
//     if (sentence[i] == ' '){
//         // console.log(`white space(s) exist in this sentence.`);
//         count++
//     }
// }
// console.log(count);

// // DO WHILE
// const restaurant = "OQTEPA";
// let count = 1;
// do{
//     console.log('Bordim: ' + count);
//     count++

// }while(restaurant === "EVOS" && count <= 5 || restaurant === "OQTEPA" && count <= 10)


// RANDOM NUMBER:
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomNumber = Math.floor(Math.random() * 26) + 1;
// let randomLetter = alphabet[randomNumber];
// console.log(randomLetter);

// TEMPORARRY DEADZONE:
// console.log(id);
// console.log('hello'); // TDZ
// const id = '123456789';

// parseInt()
// let str1 = '123.32sxad';
// let str2 = 'sxad99';

// let num1 = parseInt(str1);
// let num2 = parseInt(str2);
// let num3 = parseFloat(str1);

// console.log(num1);
// console.log(num2);
// console.log(num3);

// Remove letters from string and leave only numbers:
// let str = "123abc456dEf789";

// console.log(str.replace(/[0-9]/g, ''));
// console.log(str.replace(/[a-zA-Z]/g, ''));
// console.log(str.match(/[0-9]/g));