/* array in javascripts can  includes srings , numbers and objects 
object ca can also includes arrray */

var arr = [1,2,3]
arr.shift() 
// console.log(arr)  
arr.unshift(1,3,4)
// console.log(arr) 

myarr1 = [1,2]
myarr2 = [3,4,5] 
// myarr2.splice(3,1,7)  
marged = myarr1.concat(myarr2)
// console.log(myarr2)   
// console.log(marged) 

const numbers = [1, 2, 3, 4, 5]; 
const result = numbers.find((element) => element < 4); 
// console.log(result);   

// let numbers = [1,2,3,4,5,6]
// const result = number.find(functon() {

// })

const fruits = ['banana','mango', 'apple', 'cherry']; 
const numberss = [4,3,7,5]
numberss.sort()
fruits.sort();
console.log(fruits);
console.log(numberss)

//ascending order 
// numbers.sort((a,b) => a- b 
// decending order
// numberss.sort((a,b) => b-a)
// console.log(numberss) 

const numbers3 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers3.map((element) => element * element);
console.log(squaredNumbers)



// let numbers4 = [7,4,5,6]
// for (let i = 0; i < numbers4.length - 2; i++) {
//     const element = numbers4[i];
//     console.log(element)
    
// }


const numbers5 = [6, 2,6];
const sum = numbers5.reduce((accumulator, currentValue, indexOfCurrentValue, totalArrayElement) => 
accumulator + currentValue, 2 );
// alert(sum); 

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Create a new array with even numbers using filter
const evenNumbers = numbers6.filter(function(number) {
return number % 2 === 0;
});
// console.log(evenNumbers);  

// const numbers7 = [ 5, 6, 7, 8, 9, 10,11,12,13,14,15];
// // Create a new array with even numbers using filter
// const lessthanten = numbers7.filter(function(number) {
// return number < 11 === 0;
// });
// console.log(lessthanten);  

const numbers7 = [ 5, 6, 7, 8, 9, 10,11,12,13,14,15];
let lessthanten = numbers7.map((element) =>  element < 11); 
let less2 =  numbers7.filter((element) => element < 10);
console.log(lessthanten)
console.log(less2)












