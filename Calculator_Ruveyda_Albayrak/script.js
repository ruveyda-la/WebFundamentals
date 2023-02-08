
var operator1 = 0
var operator2 = 0
var operator = ''



function press (number){
    var result = document.querySelector('#display'); 
    if (operator1 == 0 && operator == ''){
        result.innerText = number ;
        operator1 = parseInt(result.innerText);
    }
    else if (operator1 > 0 && operator == ''){
        result.innerText += number ;
        operator1 = parseInt(result.innerText);
    }
    else if ( operator2 == 0 && operator != ''){
        result.innerText = number ;
        operator2 = parseInt(result.innerText);
    }
    else
    {
        result.innerText += number;
        operator2 = parseInt(result.innerText);
    }
    
    console.log(operator1)
    console.log(operator)
    console.log(operator2)
}

function setOP (operatorSign){

    operator = operatorSign
}    

function calculate (){
    var result = document.querySelector('#display');
    
    if (operator == '/') {
        result.innerText = operator1 / operator2 ;
    } 
    else if (operator == '*'){
        result.innerText = operator1 * operator2 ;
    }
    else if (operator == '-'){
        result.innerText = operator1 - operator2 ;
    }
    else if (operator == '+'){
        result.innerText = operator1 + operator2 ;
    }
}
function clr () {
    var result = document.querySelector('#display');
    result.innerText = 0
    operator1 = 0
    operator2 = 0
    operator = ''
}