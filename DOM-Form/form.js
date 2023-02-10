function showMessage(input,message,type){
    const msg = input.parentNode.querySelector("div");
    msg.innerText = message;
    if(type==false){
        const err=input.parentNode.querySelector("input")
        err.style.border="none";
        err.style.borderRadius="5px";
        err.style.boxShadow="0px 0px 3px 1px red";
    }
    if(type==true){
        const err=input.parentNode.querySelector("input")
        err.style.border="none";
        err.style.borderRadius="5px";
        err.style.boxShadow="0px 0px 3px 1px green";
    }

    input.className = type?"success":"error";
    return type;   
}

function showError(input,message){
    return showMessage(input,message,false);

}
function showSuccess(input,message){
    return showMessage(input,"",true);

}
function hasValue(input,message){
    if(input.value.trim() === ""){
        return showError(input,message);
    }
    return showSuccess(input);
}
function validateEmail(input,requiredMsg,invalidMsg){
    if(!hasValue(input,requiredMsg)){
        return false;
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = input.value.trim();
if(!emailRegex.test(email)){
    return showError(input,invalidMsg);
}
return true;

}
function validatePassword(input,requiredMsg,invalidMsg){
    if(!hasValue(input,requiredMsg)){
        return false;
    }
    const passRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const pass = input.value.trim();
if(!passRegex.test(pass)){
    return showError(input,invalidMsg);
}
return true;

}
function confirmPassword(input,requiredMsg,invalidMsg){
    if(!hasValue(input,requiredMsg)){
        return false;
    }
    let conf= input.value;
const pas=form.elements["password"].value;
    if(pas!=conf){
        return showError(input,invalidMsg);
}
        return true;

}
const form =document.querySelector("#myForm");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Enter a valid email";
const PASS_REQUIRED = "Please enter your password";
const PASS_INVALID = "Enter a valid password";
const CPASS_REQ="Please enter the password again";
const CPASS_INVALID="Enter same as password";
form.addEventListener("submit",function(event){
    event.preventDefault();

    let nameValid = hasValue(form.elements["cname"],NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"],EMAIL_REQUIRED,EMAIL_INVALID);
    let passValid= validatePassword(form.elements["password"],PASS_REQUIRED,PASS_INVALID);
    let confpassValid= confirmPassword(form.elements["cpassword"],CPASS_REQ,CPASS_INVALID);

    if(nameValid && emailValid && passValid && confpassValid){
        alert("Congratulation! You have filled it perfectly");
    }
})