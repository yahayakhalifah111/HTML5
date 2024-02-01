 
 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay'); 
 const btnCloseModal = document.querySelector('.closemodal');

 const btnOpenModal = document.querySelectorAll('.showmodal');

 const openModal = function() {
    modal.classList.remove('hidden') 
    overlay.classList.remove('hidden') 
}

const closeModal = function() {
    modal.classList.add('hidden') 
    overlay.classList.add('hidden')
}

  
 for(let i = 0; i< btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click' , openModal) 
        // console.log('button clicked')  
        // modal.classList.remove('hidden') 
        // overlay.classList.remove('hidden')  
        // modal.style.display = 'block ' 

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
//    btnCloseModal.addEventListener('click' , function() {  
    // modal.classList.add('hidden') 
    // overlay.classList.add('hidden') }) 
 }  
 document.addEventListener('keydown' , function(event) {
    // console.log('key was press')  
    console.log(event.key)
    if(event.key === 'Escape' ) {
        if(!modal.classList.contains('hidden')) {
            closeModal(); 
            


        }
    }

     
 }) 


    