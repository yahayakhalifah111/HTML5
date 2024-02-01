// CallBack = a function that is passsed as an argument to another,

//     used to handle asynchronous operations;
//     1. reading a file 
//     2. Network requests
//     3. Interacting with databases 

//     "hey, wen you're done, call this next"


hello(bye) 
// bye() 
function hello(callback) {
    console.log("hello! "); 
    callback();
} 

function bye() {
    console.log("goodbye! "); 

}  

sum(displayPage,5,3)  
sum(displayConsole, 2,3)


function sum(callback, x , y){
    let result = x + y;
    callback(result)
}  
function displayConsole(result) {
    console.log(result)
}


function displayPage(result) {
    document.getElementById("myh1").textContent = result  
} 

