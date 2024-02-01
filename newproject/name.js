let x = 10
let y = 5 
let z = 7
let z1 = x+y
z2 = x-z 
z3 = x/y 
z4 = x*y

console.log(z1) 
console.log(z2) 
console.log(z3) 
console.log(z4)

//arithmethic 
let age = 3
age+= 2
console.log(age)

let total = 100 
total -= 25
console.log(total)

let quantity = 8
quantity *= 3
console.log(quantity) 

// comparison operator 
let fname =10;
 let lname = "10";
 result = fname===lname
 result2 = fname==lname
 console.log(result , result2);

 let fname1 ="Apple";
 let lname2 = "banana";
 console.log(fname1===lname2); 


//  Logical operators
// && and || 
let isRaining = false;
let haveUmbrealla = false; 
let haveBoots = false;
sol = isRaining || haveUmbrealla || haveBoots;
console.log(sol) 

// not operator 
let isSnowing = true;
console.log(!isSnowing);

let number = 9;
result = number> 5 && number < 10;
console.log(result) 

// if else statement  
if (isRaining && haveUmbrealla) {
    console.log("it is raining, you can go out")
} else  if(isRaining && !haveUmbrealla){
    console.log("it is not raining,you can not go out ")
} else {
    console.log("it is not Raining, you can go out")
} 



function addnumbers(num1, num2) {
    let total = num1 + num2;
    return total;
console.log
    
}
addnumbers(3, 10);

function writewelcomenote(name) {
    let note = "welcomejoo" + name 
    return note;
    
}
writewelcomenote("musa");

console.log(addnumbers(3,10))
console.log(writewelcomenote("musa")) 
// console.log(note) 







 