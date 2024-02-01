/*classList : Element property in javascript used to interact with an element list of classes
                (css classes) Allows oyou to make reusable classes for many elements across your webpage

    -add()
    -remove()
    -toggle(remove if present, add if not )
    - replace(oldClass , newclass)
    -contains()
    */


    const myButton = document.getElementById("mybutton")
    // myButton.classList.add("enabled")  
    // myButton.classList.remove("enabled")

    // myButton.addEventListener('mouseover', event => {
    //     event.target.classList.toggle("hover");
    // } )
    
    // myButton.addEventListener('mouseout', event => {
    //     event.target.classList.toggle("hover");
    // } )

    myButton.classList.add('enabled')
    

    myButton.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")) {
            event.target.textContent += "{]"

        } else {
            event.target.classList.replace("enabled", "disabled");
        }


       
    })  