const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function valError(input , message){
    const form_input = input.parentElement;
    form_input.className = 'form-group error';
    const small = form_input.querySelector('small');
    small.innerHTML=message;

}

function success(input){
    const form_input = input.parentElement;
    form_input.className = 'form-group success';
}

function validateFields(inputArray){
    inputArray.forEach(element => {
        if(element.value.trim() === ''){
            valError(element , `${getName(element)} is required`)
        }
        else{
            success(element)
        }
    });
}

function checkLength(input,min,max){
    if(input.value.trim().length < min){
        valError(input , `${getName(input)} should be more than ${min} characters`);
    }
    else if(input.value.trim().length > max){
        valError(input , `${getName(input)} should be less than ${max} characters`);     
    }
}

function checkPassword(pass1,pass2){
    if(pass1.value.trim() !== pass2.value.trim()){
        valError(pass2 , 'password dosnt match');
    }
}

function getName(element){
    return element.id.charAt(0).toUpperCase() + element.id.slice(1)
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    validateFields([username,email,password,password2]);
    checkLength(username,6,15);
    checkLength(password,6,12);
    checkLength(password2,6,12);
    checkPassword(password,password2);
})