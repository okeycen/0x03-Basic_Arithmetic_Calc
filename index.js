function display(){
    operation= prompt("Please type in the math operation you would like to perform: \n\n+ to add, - to subtract, * to multiply, / to divide and % for modulo");
      
    if (operation==='+'){
        add()
    }

    else if (operation==='-'){
        sub()
    }
    
    else if (operation==='*'){
        multiply()
    }

    else if (operation==='/'){
        divide()
    }

    else if (operation==='%'){
        modulo()
    }

    else{
        alert('invalid operator, try again')
    }
}



// Methods of each arithmetic operation
function add(){
    a = prompt('first number');
    b = prompt('second number');

    if(/\D/.test(a) || /\D/.test(b)){
        alert("Invalid entry, only numbers are allowed")
        }
    
    else{
        result = (parseInt(a) + parseInt(b))
        alert( a + operation + b + '=' + result);
    }
}

function sub(){
    a = prompt('first number');
    b = prompt('second number');

    if(/\D/.test(a) || /\D/.test(b)){
        alert("Invalid entry, only numbers are allowed")
        }
    
    else{
        result = (parseInt(a) - parseInt(b))
        alert( a + operation + b + '=' + result);
    }    
}

function multiply(){
    a = prompt('first number');
    b = prompt('second number');

    if(/\D/.test(a) || /\D/.test(b)){
        alert("Invalid entry, only numbers are allowed")
        }
    
    else{
        result = (parseInt(a) * parseInt(b))
        alert( a + operation + b + '=' + result);
    }
}

function divide(){
    a = prompt('first number');
    b = prompt('second number');

    if(/\D/.test(a) || /\D/.test(b)){
        alert("Invalid entry, only numbers are allowed")
        }
    
    else{
        result = (parseInt(a) / parseInt(b))
        alert( a + operation + b + '=' + result);
    }
}

function modulo(){
    a = prompt('first number');
    b = prompt('second number');

    if(/\D/.test(a) || /\D/.test(b)){
        alert("Invalid entry, only numbers are allowed")
        }
    
    else{
        result = (parseInt(a) % parseInt(b))
        alert( a + operation + b + '=' + result);
    }
}





    

    


