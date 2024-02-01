// initialize the count as 0 
// listen for clicks on the increment button 
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count 



let countEl = document.getElementById("count-el")  //pass in argument
console.log(countEl) 
let count = 0; 


function increment() {
    // console.log(`the button was clicked `)
      count += 1;
      countEl.innerText = count;
        // console.log(count)  
    

}
// increment()  
let saveEl = document.getElementById("save-el")

function saved() {

    let countstr =   count + " - " 
    // saveEl.innerText += countstr  
    saveEl.textContent  += countstr  
       countEl.textContent = 0  
       count = 0

        
      



    


// console.log(count)   



    // console.log(count)   

}
// saved()







let name = "youf";
let message = (`you have new notifications`)
// console.log( message + "," + name +"!")   

let messageToUser = message + "," + name + "!";
console.log(messageToUser)












// let welcomeEl = document.getElementById("welcome-el") 


// let name2 = "bob";
// let greeting = "good morning, my name is ";  
// welcomeEl.innerText = greeting + name2; 


// console.log(myGreeting) 



 
/*







function countdown() {
    console.log("hello")
}
countdown() 
countdown()
function number() {
    console.log(42) 
}
number()

let lap1 = 2
let lap2 = 3
let lap3 = 4

function sum() {
    let totalLaps = lap1 + lap2 + lap3
    console.log(totalLaps)

}
sum()

let lapcompleted = 0

function loglap() {
    lapcompleted = lapcompleted + 1
    console.log(lapcompleted)
}
loglap() 
loglap()
loglap()  





*/

