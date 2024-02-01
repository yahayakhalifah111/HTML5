let country = "Nigeria";  
let continent = "Africa";  
let population = 40; 
// console.log(country,continent,population); 

// let isIsland = true;
// let language;
// console.log(typeof(country)) 
// console.log(typeof(language)) 
// console.log(isIsland)
let language = "Hausa";  

// basic operations 
// let country = 12;
//  country = (12/2) 
//  console.log(country) 


  description = country + " is in " + continent +", and its " + population + " million people speak " + language;
console.log(description); 
const khali = ` ${country} is in ${continent}, and its ${population} million people speak ${language}`    
console.log(khali)

if (population > 33 ) {
    console.log(`${country}'s population is above average`)

} else  {
    console.log(`${country}'s population is ${33-population} million below average`)
}  

num = '9' - '5';
num2 = '19' - '13' + '17'  
num3 = '19' - '13' + 17;
num4 = '123' < 57;   
num5 = 5 + 6 + '4' + 9 - 4 - 2; 
console.log( num ,num2 , num3, num4, num5) 

// 5 falsy values = "" 0 null NaN undefined 
const money = 10;
if(money) {
    console.log(`dont spend it all`)
} else {
    console.log(`blabalbla`)
}

let height = 10  ;
if(height) {
    console.log(`height is defined` )
} else {
    console.log(`height is undefined `)
}


    

let numNeighbours = prompt(`how many neighbour countries does your country have?`);

// console.log(numNeigbours);  
if(numNeighbours == 1) {
    console.log(`only 1 border `)
}
 else if(numNeighbours > 1) {
    console.log(`more than 1 border `)
 } else if(!numNeighbours >= 1) {
    console.log(`No border`)
 } 




