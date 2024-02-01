let myLeads = ["www.rom.com","www.sam","www.great.com"]
const inputEl = document.getElementById("input-el")  
let inputBtn = document.getElementById("input-btn")


// let saveBtn = document.getElementById("save-btn")     

inputBtn.addEventListener("click", function() {
    // console.log("button clicked") 
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)

    // myLeads.push("www.afroBeats.com")  
    console.log(myLeads)  
    

} )
        for(let i = 0; i< myLeads.length; i++) {
            console.log(myLeads[i])
        }
         
    







/*
let Box = document.getElementById("box")

Box.addEventListener("click", function(){
    console.log("I want to open the Box!") 
} ) 
*/
 
