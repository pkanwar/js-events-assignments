window.addEventListener('load',()=>{

    const exe5_input = document.querySelector('#input-exe5-1');
    const exe5_output = document.querySelector('#output-exe5-1');
    exe5_input.addEventListener('change',event=>{
        exe5_output.style.backgroundColor = exe5_input.value
     })


 })