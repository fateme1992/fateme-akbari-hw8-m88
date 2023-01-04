let userName = document.querySelector('.userName')
let pass = document.querySelector('.pass')
let confirm = document.querySelector('.confirm')
let register = document.querySelector('button')
let eName = document.querySelector('#eName')
let ePass = document.querySelector('#ePass')
let eConfirm = document.querySelector('#eConfirm')
var regularExpression = /^[a-zA-Z0-9]{7,16}$/;




pass.addEventListener('keyup', function (e) {
    let passValue = pass.value;


    for (let i = 0; i < passValue.length; i++) {
        pass.value = passValue.replace(passValue[i], '.')
    }


})

confirm.addEventListener('keyup', function (e) {
    let confirmValue = confirm.value;
    for (let i = 0; i < confirmValue.length; i++) {
        confirm.value = confirmValue.replace(confirmValue[i], '.')
    }
})

register.onclick = function () {

    if (pass.value.length < 8) {
        ePass.innerHTML = "*رمز عبور باید حداقل شامل 8 کاراکتر و شامل حداقل یک حرف و یک عدد باشد"
    }


    if (userName.value == '' || pass.value == '' || confirm.value == '') {
        eName.innerHTML = "*الزامی"
        ePass.innerHTML = "*الزامی"
        eConfirm.innerHTML = "*با رمز عبور مطابقت ندارد"

    }
    else {
        eName.innerHTML = ""
        ePass.innerHTML = ""
        eConfirm.innerHTML = ""
    }


    if (pass.value !== confirm.value) {
        eConfirm.innerHTML = "*با رمز عبور مطابقت ندارد"
    }

    // if (pass.value.length < 8) {
    //     ePass.innerHTML = "*رمز عبور باید حداقل شامل 8 کاراکتر و شامل حداقل یک حرف و یک عدد باشد"
    // }


    if (regularExpression.test(pass.value)) {
        alert("password should contain atleast one number and one special character");
    }


}

