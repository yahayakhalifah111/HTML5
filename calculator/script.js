
const Display = document.getElementById('display') 

function btn(input) {
    Display.value += input 
}

function clearDisplay() {
    Display.value =" ";
}  


function calculate() {   
    try {
    

    Display.value = eval(Display.value);  
    }
     catch  {
        
   Display.value = "error"
}  

}