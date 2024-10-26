const firstName = document.getElementById('first-name');
firstName.addEventListener("keyup",validateName);

var validatesForm = {
    firstName: false
}

function validateName(event) {
    var el = event.target
    var value = el.value

    validatesForm["firstName"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 1) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesForm["firstName"] = true
    return false;
} 

function valForm() {
    var isValid = false
    for (var input in validatesForm) {
        if (!validatesForm[input]) {
            return false
        }
    }
}

const lastName = document.getElementById('last-name');
lastName.addEventListener("keyup",validateName);

var validatesForm = {
    lastName: false
}

function validateName(event) {
    var el = event.target
    var value = el.value

    validatesForm["lastName"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 1) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesForm["lastName"] = true
    return false;
}

function valForm() {
    var isValid = false
    for (var input in validatesForm) {
        if (!validatesForm[input]) {
            return false
        }
    }
}

const emailAdd = document.getElementById('email');
emailAdd.addEventListener("keyup",validateEmail);

var validatesFormE = {
    emailAdd: false
}

function validateEmail(event) {
    var el = event.target
    var value = el.value

    validatesFormE["emailAdd"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }
    if(value.length < 1 ) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesFormE["emailAdd"] = true
    return false;
}

function valForm() {
    var isValid = false
    for (var input in validatesFormE) {
        if (!validatesFormE[input]) {
            return false
        }
    }
}



const phoneNumber = document.getElementById('phone');
phoneNumber.addEventListener("keyup",validateNum);

var validatesFormNum = {
    phoneNumber: false
}

function validateNum(event) {
    var el = event.target
    var value = el.value

    validatesFormNum["phoneNumber"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 10 || value.length > 10) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesFormNum["phoneNumber"] = true
    return false;
}

function valForm() {
    var isValid = false
    for (var input in validatesFormNum) {
        if (!validatesForm[input]) {
            return false
        }
    }
}

const address = document.getElementById('address');
address.addEventListener("keyup",validateName);

var validatesForm = {
    address: false
}

function validateName(event) {
    var el = event.target
    var value = el.value

    validatesForm["address"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 1) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesForm["address"] = true
    return false;
} 

function valForm() {
    var isValid = false
    for (var input in validatesForm) {
        if (!validatesForm[input]) {
            return false
        }
    }
}

const city = document.getElementById('city');
city.addEventListener("keyup",validateName);

var validatesForm = {
    city: false
}

function validateName(event) {
    var el = event.target
    var value = el.value

    validatesForm["city"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 1) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesForm["city"] = true
    return false;
} 

function valForm() {
    var isValid = false
    for (var input in validatesForm) {
        if (!validatesForm[input]) {
            return false
        }
    }
}

const zip = document.getElementById('zipCode');
zip.addEventListener("keyup",validateZip);

var validatesFormZip = {
    address: false
}

function validateZip(event) {
    var el = event.target
    var value = el.value

    validatesFormZip["address"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 5) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesFormZip["address"] = true
    return false;
} 

function valForm() {
    var isValid = false
    for (var input in validatesFormZip) {
        if (!validatesFormZip[input]) {
            return false
        }
    }
}

const state = document.getElementById('state');
state.addEventListener("keyup",validateName);

var validatesForm = {
    state: false
}

function validateName(event) {
    var el = event.target
    var value = el.value

    validatesForm["state"] = false
    el.classList.remove('invalid');
    el.classList.remove('valid');
    el.classList.add('checked');

    if(value.trim() == '') {
        el.classList.add('invalid');
        return;
    }

    if(value.length < 1) {
        el.classList.add('invalid')
        return false;
    }

    el.classList.add("valid")
    validatesForm["state"] = true
    return false;
} 

function valForm() {
    var isValid = false
    for (var input in validatesForm) {
        if (!validatesForm[input]) {
            return false
        }
    }
}

