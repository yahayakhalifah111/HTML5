

let str1 = "hello" 
let str2 = "man"
function conc() {
 console.log(str1 + " "+ str2);

}
conc()  


let mypoints = 3

function add3Points() {
    mypoints += 3 
    // console.log(mypoints)  
}
add3Points()
add3Points()
add3Points() 

function remove1Points() {
    mypoints = mypoints - 1;
    // console.log(mypoints) 
}
remove1Points() 
remove1Points()

console.log(mypoints )   
