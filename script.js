const elForm = document.getElementById("form");
const elInput1 = document.getElementById("input1");
const elInput2 = document.getElementById("input2");
const elSelect = document.getElementById("select");
const elTittle = document.getElementById("tittle");


elForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    
    if(!isNaN(elInput1.value || elInput2.value)){
        
        if(elSelect.value === 'plus'){
            let result = Number( elInput1.value) + Number(elInput2.value);
            elTittle.textContent = result;
        }else if(elSelect.value === 'minus'){
            let result = Number( elInput1.value) -Number(elInput2.value);
            elTittle.textContent = result;
        }else if(elSelect.value === 'multiply'){
            let result = Number( elInput1.value) * Number(elInput2.value);
            elTittle.textContent = result;
        }else if(elSelect.value === 'divide'){
            let result = Number( elInput1.value) / Number(elInput2.value);
            elTittle.textContent = result.toFixed(2);
        }
    }else{
        elTittle.textContent = "Type a number";
    }
})
