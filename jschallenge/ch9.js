let person = {
    name: "khali",
    age:12,
    country: "Nigeria"

   
}
let personEl = document.getElementById("greeting-el")

function logData() { 
    // console.log(person.name + " is " + person.age + " years old and lives in " + person.country )
//    personEl.textContent = person.name + " is " + person.age + " years old and lives in " + person.country 


}
// logData() 

let age = 15 

if( age < 6) {
    console.log("Free Ride ") 
} else if ( age <= 17) {
    console.log("Child Discount")
} else if( age <= 26) {
    console.log("Student discount")
} else if(age <= 66 ) {
    console.log("Full price")
} else {
    console.log("senior citizen discount")
}


let largeCountries = ["China","India","USA", "Indonosia", "Pakistan"] 
console.log("The 5 largest  Countries in the world: ")
for(let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i])
}

let largeCountry = ["tuvalu", "India", "USA", "Indonosia", "Monaco"]
let remove = largeCountry.shift()
let remove2 = largeCountry.pop()
let add = largeCountry.unshift('China')
let add2 = largeCountry.push('Pakistan')
console.log(largeCountry)


let dayOfMonth = 31
let weekday = "Friday"
if(dayOfMonth === 13 && weekday === "Friday") {
    console.log("spooky face" )
}



let hands = ["rock","paper","scissors"] 

function random() {
    let ran = Math.floor(Math.random() *3 )
    return hands[ran]
}
console.log(random())



let fruits = ["apple" ,"orange","apple","apple","orange"]
let  appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf") 

function shelf1() {
    for(let i = 0; i < fruits.length; i++ ) {
        if (fruits[i] === "apple") {
            appleShelf.textContent += "apple "
        } else if(fruits[i] === "orange") {
            orangeShelf.textContent += "orange "
        }

    }

    
}
shelf1()

 