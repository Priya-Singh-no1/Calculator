let display = document.getElementById('inputBox');
 let buttons= document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string='';
    
buttonsArray.forEach(btn=>{

btn.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML, e.target.innerHTML.trim().length);
    if ( e.target.innerHTML =="DEL"){

        if(string.length>0){
            string = string.substring(0,string.
                length-1);
                display.value=string;
        }
            
    
    }else if(e.target.innerHTML.trim()==='AC'){
        string = '';
        display.value=string;
        
    }else if( e.target.innerHTML == '='){
            string=eval(string);
            display.value= string;
    }else{
        string += e.target.innerHTML;
        display.value=string;
        
    }

});
 
});
