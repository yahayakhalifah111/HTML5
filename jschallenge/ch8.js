

let exprience = ["i am familier with HTML,CSS,JAVA,PYTHON, and a bit of javascript",
"3rd year computer science Student",
"None", "working on it " ]

 console.log(exprience[0]) 
 console.log(exprience.length) 


 

 let describe = ["name" , 12 , true ]
 console.log(describe[1])

 let cards = [7,4]
 cards.push(6)
 console.log(cards)


 let messages =["hello", "fine" ,"alright"]
 let newMessage = "same here!"

 messages.push(newMessage)
 console.log(messages) 
 messages.pop(messages)
 console.log(messages)  


 for(let count = 10; count <= 20; count += 2) {
    // console.log(count) 
 }


 for(let i = 10; i <= 100; i += 20) {
    // console.log(i) 
 }

 let posts = ["check out my Netflix clone"
 , "Here out my Netflix clone ",
 "I've just relaunched my portfolio"
 ]
for( let i = 0; i <= posts.length ; i += 1) {
    // console.log(posts[i]) 
}


let cards2 = [7,2,4] 

for(i = 0; i < cards2.length; i++) {
    // console.log(cards2[i]) 
}   

let sentence = ["Hello", "my", "name", "is", "per"]
let greetingEl = document.getElementById("greeting-el")   


for(let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " " 
} 

let player1Time = 102
let player2Time = 107


function getFastRaceTime() {
    if (player1Time < player2Time) {
        return player1Time 
    } else if(player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time 
    }
}

//  let fastestRace = getFastRaceTime()  
//  console.log(fastestRace) 


function getTotalRaceTime() {
    let total = player1Time + player2Time
    return total
}
let totalTime = getTotalRaceTime()
// console.log(totalTime)  

// let randomNumber = Math.random() * 6 
// let flooredNumber = Math.floor(3.43434) 
let randomNumber  =Math.floor(Math.random() * 6) + 1
// console.log(randomNumber) 

function rollDice() {
    let randomNumber  =Math.floor(Math.random() * 6) + 1
return randomNumber 
}  
// console.log(rollDice()) 
 
let hasCompletedCourse = true
let giveCertificate = true

 /*if(hasCompletedCourse === true)  { 
    if(giveCertificate === true ) {
        generatecertificate()
    }
 }*/
if(hasCompletedCourse === true && giveCertificate === true) {
 generatecertificate()
 
}
function generatecertificate() {
    // console.log("generating giveCertificate... ") 
}

let course = {
    title: "Learn css Grid " ,
    lessons: 16,
    creator: "harald",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html" , "css"]
}
console.log(course.tags)


let castle = { 
    title: "live like a king ",
    isFree:false,
    price: 230,
    images: ["img/","img/"],
    sayHello: function() {
        console.log("Heisann!") 

} }
// console.log(castle.price)     
castle.sayHello()
 









