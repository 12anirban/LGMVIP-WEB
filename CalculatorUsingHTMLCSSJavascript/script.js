let string = "";
let buttons = document.querySelectorAll('.button');
let buttons1 = document.querySelectorAll('.button1');
let buttons2 = document.querySelectorAll('.button2');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML =='='){
            string = eval(string);
            document.querySelector('input').value = string;
            
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
Array.from(buttons1).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML =='DE'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        if(e.target.innerHTML =='C'){
            string = "";
            document.querySelector('input').value = string;
        }
    })
})
Array.from(buttons2).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML =='='){
            string = eval(string);
            document.querySelector('input').value = string;
            
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
