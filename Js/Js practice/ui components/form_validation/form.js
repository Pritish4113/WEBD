let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let passerror = document.getElementById('passerror');
let nameerror = document.getElementById('nameerror');

let num = 1;


function validation(){
    if(email.value == ""){
        nameerror.innerHTML = `*Please enter email`;
        num = 0;

    }
    else if(email.value.includes('@')){
        nameerror.innerHTML = ``;
        num = 1;
    }
    else{
        nameerror.innerHTML = `*Enter valid email address`;
        num = 0;

    }

    if(password.value == ""){
        passerror.innerHTML = `*Please enter password`;
        num = 0;

    }
    else{
        passerror.innerHTML = '';
        num = 1;
    }

    if(num){
        return true;
    }
    else{
        return false;
    }
}