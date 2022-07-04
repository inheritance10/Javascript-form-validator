const form = document.getElementById('form');
const username  = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const phone = document.getElementById('phone');

form.addEventListener('submit',function (e){
    e.preventDefault();
    usernameControl();
    emailControl();
    passwordControl();

    checkLength(username,15,7);
    checkLength(password,20,7);
    checkPhone(phone);


});

function checkLength(input,max,min){
    if(input.value.length < min){
        error(input,`${input.id} en az ${min} karakter olmalıdır`)
    }else if(input.value.length > max){
        error(input,`${input.id} en az ${max} karakter olmalıdır`)
    }else{
        success(input);
    }
}

function success(input){
    input.className = 'form-control is-valid';
}

function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'

}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'telefon 10 karakterli olmalıdır')
    }else{
        success(input);
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


function usernameControl(){
    if(username.value === ""){
        error(username,'Kullanıcı adı zorunludur.');
    }else{
        success(username);
    }
}

function emailControl(){
   if(email.value === ""){
       error(email,'Email alanı zorunludur');
   }else if(!validateEmail(email.value)) {
       error(email,'Email adresi geçersiz')
   }
   else{
       success(email);
   }

}

function passwordControl(){
    if(password.value === "") {
        error(password,'Şifre alanı zorunludur');
    }
    else{
        success(password);
        if(password.value != confirm_password.value){
            error(confirm_password,'Şifreler uyuşmuyor');
        }else{
            document.getElementById('confirmPasswordError').style.display = 'none';
            success(confirm_password);
        }
    }
}


