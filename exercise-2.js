window.addEventListener('load',()=>{

    const exe2_minus = document.querySelector('#input-exe2-1');
    const exe2_text = document.querySelector('#input-exe2-2');
    const exe2_plus = document.querySelector('#input-exe2-3');

    exe2_minus.addEventListener('click',event=>{
        exe2_text.value--;
    }) 
    exe2_plus.addEventListener('click',event=>{
        exe2_text.value++;
    }) 


 })