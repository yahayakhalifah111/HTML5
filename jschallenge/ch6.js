let num1 = 9;
let num2 =  2;                     //Number(prompt("enter second Number")) 

document.getElementById("num1-El").textContent = "First Number: " +num1
document.getElementById("num2-El").textContent = "Second Number: " + num2   
let sumEl = document.getElementById("sumOf")    

// let addEl = document.getElementById("")

function add() {
    let result = num1 + num2 
    sumEl.textContent = "sum: "+ result
    // console.log(num1 + num2) 
}

function subtracts() {
    let result = num1 - num2 
    sumEl.textContent = "sum: " + result
  // console.log(num1 - num2) 
}

function divide() {
    let result = num1 / num2 
    sumEl.textContent = "sum: " + result
    // console.log(num1 / num2)  
}

function multiply() {
    let result = num1 * num2 
    sumEl.textContent = "sum: " +  result
    // console.log(num1 * num2)
}  


//  sumEl.textContent = "sum: " +  



