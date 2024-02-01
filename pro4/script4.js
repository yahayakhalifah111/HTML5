// function sum(num1,num2) {
//     const sum1 =  num1 + num2 
//     return sum1
//     }
//     // console.log(sum(1,2))
    
//     // sum(1,2)


// const  functionName = (a,b,c) => {a+b+c} 
// () => {} 
// function() {}  

// sum of first, Middle and last element of an  array 

// let name = [1,2,3]
// console.log(name[0] + name[2])  

const sumOfFirstMiddleAndLast = (array) => {
    let first = Number(array.shift()); 
    let second = Number(array.pop());  
    //array.length/2 + 1 
    // let middle = (array.length/2)  
    // indexOfMiddleNumber = 0 
    const evenFormula = (array.length/2)
    const oddFormula = (array.length + 1) / 2 
    array.length % 2 == 0
    const indexOfMiddleNumber =  arraylength % 2 == 0 ? evenFormula : oddFormula  

    const middle = Number(array[indexOfMiddleNumber])  
    return first + second + middle
}   
// console.log(sumOfFirstMiddleAndLast('20,','30','70','60','13', '45'))   

// Q2 

const dayChecker = (input) => {
    const dayOfWeek = ['mon','tue','wed','thur','fir','sat','sun']  
    const index = input + 1   
    if(input > 7) {
        return 'Error'
    } else {
        return dayOfWeek[index] 
    }
   

}

console.log(dayChecker(0))  

// Q3 

const reverse = (n,array) => {
    let newArray = []  
    let newString = ""
    let reduceValue = 1 

    for(let i = 0; i < n; i++) {
        // newArray.push(array[n-reduceValue])  
        newString = newString + " " + array[n-reduceValue]
        reduceValue++
    }
    return newString
}
console.log(reverse(3,[2,4,6,7]))    







const nums = (numbers) => {
    const reverseVal = []
    for(let i = number.length - 1 ; i> 0;i-- ) {
        reversednums.push(numbers[i])
    }
 return reversednums.join()
} 
console.log() 




