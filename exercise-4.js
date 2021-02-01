window.addEventListener('load',()=>{

    const exe4_input = document.querySelector('#input-exe4-1');
        const exe4_output = document.querySelector('#output-exe4-1');
        exe4_input.addEventListener('input',event=>{
           
           exe4_output.innerHTML = encodeURIComponent(exe4_input.value.length);
        })


 })