document.addEventListener('DOMContentLoaded',()=>{
    const ticks = document.querySelectorAll('.ticks');
    const cards = document.querySelectorAll('.card');
    const delete_button  = document.querySelector('button')


   console.log('connected');
    function toggleButton(){
       ticks.forEach(tick =>{tick.classList.add('show')});
       console.log("clicked");
    }
    cards.forEach(card => {card.addEventListener('mouseenter',toggleButton)});
    cards.forEach(card => {card.addEventListener('mouseleave',removeShow)});





   function removeShow(){
         ticks.forEach(tick =>{tick.classList.remove('show')});
         console.log('remove')
   }
    delete_button.addEventListener('click',removeShow);




})