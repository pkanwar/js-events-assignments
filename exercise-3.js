
 window.addEventListener('load',()=>{

    const exe3_input = document.querySelector('#input-exe3-1');
    const exe3_encode = document.querySelector('#input-exe3-2');
    const exe3_decode = document.querySelector('#input-exe3-3');
    const exe3_output = document.querySelector('#input-exe3-4');

    exe3_encode.addEventListener('click',event=>{
        console.log(encodeURIComponent(exe3_input.value))
       exe3_output.value = encodeURIComponent(exe3_input.value);
    })

    exe3_decode.addEventListener('click',event=>{
        exe3_output.value = decodeURIComponent(exe3_input.value);
     })
   

 })