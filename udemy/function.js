
// function declaration
function calcAge1(birthYear) {
    const age = 2034- birthYear
    return age; 
} 

const age1 = calcAge1(2003)
// console.log(age1)  

// function expression
const calcAge2 = function(birthYear) {
    return 2034 - birthYear
}
const age2 = calcAge2(2003);
console.log(age1, age2)  


//Arrow function 
const calcAge3 =  birthYear => 2037 - birthYear; 
const age3 =  calcAge3(2003)

console.log(age3 )  

const YearsUntilRetirement = (birthYear , firstName) => {
    const age4 = 2034 - birthYear
    const retirement = 65 - age4
    // return retirement  
    return  `${firstName} retires in ${retirement} years` 

}
// console.log(YearsUntilRetirement(2003))

console.log(YearsUntilRetirement(2003, 'bob')) 


// function calling other function
function cutFruitPieces(fruit) {
     return fruit * 4
}

function fruitProcessor(apples,orange) { 
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(orange) 

    const juice = `juice with ${applePieces} pieces of apple and
      ${orangePieces} pieces of oranges.`
    return juice 
}
console.log(fruitProcessor(3,4))  


const calcAge5 =  function(birthYear) {
    return 2034 - birthYear
}  

const yearofRetirement = function(birthYear,firstName) {
    const age6 = calcAge5(birthYear)
    const retirement = 60 - age6  
    if(retirement > 0 ) {
        console.log( `${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log( `${firstName} has already retires `)
        return -1
    }
    
}
console.log(yearofRetirement(2005, 'khan'))   
console.log(yearofRetirement(1970, 'malik'))  


// exercise
const calcAverage = (a,b,c) => (a+b+c)/3 ;
console.log(calcAverage(4,4,4)) 

//test 1 
const  scoreDolphins = calcAverage(44,23,71) 
const  scorekoalas = calcAverage(65,54,49) 
console.log(scoreDolphins,scorekoalas)  

const checkWinner = function(aveDolphins, aveKoalas) {
   
    if(aveDolphins >= 2* aveKoalas) { 
    console.log("Dolphins wins ")
} else {
    console.log("No team wins... ")
}

}
checkWinner(scoreDolphins,scorekoalas)  


// const dolAveNum = function(firstName1, x,y,z) { 
//     totalAverage = (x+y+z)/3  
//     console.log(`${firstName1} Average score is  ${totalAverage}`) 
//     // if(A >= 2 * ) 
//     return averageNum = x+y+z/3 

// } 


// console.log(dolAveNum('dolphin',4,4,4)) 

