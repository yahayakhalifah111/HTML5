

let myArray = ['Alice','wednesday','tom']
// console.log(myArray.includes('Alice '))  
let sum = myArray.reduce((accumulator, currentValue, indexOfCurrentValue, totalArrayElement) => 
accumulator + currentValue.length,0);
// console.log(sum);    


let myArray2 =[  {  title : "java" , author: "john max"},
{title: "css", author:"charles"},
{title: "javaScript",author: "thompson"},
{title: "Node", author: "J.K Rowlings"}

]

let onlyJk = myArray2.map((item) => {
    return item.author === "J.K Rowlings" ? item.title : "";

}) 

// console.log(onlyJk) 

const justice  = myArray.find((item) => item.title === "javaScript")
// console.log(justice) 
 

const person = {
    name: "man",
    age:30,
    gender:"male"

}
let info = Object.keys(person)
// console.log(info)   

const student = {
name: "wall",
age:30, 
height: 6,
course: "front-end",  

} 
console.log(student.name) 
person.surname = "john"
console.log(person) 
person.age = 54
// console.log(person)
// console.log(Object.entries(person))
// console.log(Object.values(person))


console.log(JSON.stringify(student))  

let txt = "";
 for (let a in student) {
    txt += student[a] + "";   

}
console.log(txt)

// Note: strings are iterable Objects 
const numbers = [1, 2, 3, 4, 5]; for (const number of numbers) 
{
     console.log(number); }

const message = 'Hello'; for (const char of message) { console.log(char); }


const arr = [1, 2, 3, 4, 5]; for (const number of numbers) 
{ console.log(number); }   


  




