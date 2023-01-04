var selectedRow = null
let container = document.querySelector('.container')
let main = document.querySelector('main')
let table = document.getElementById('table')
let thead = document.getElementById('thead')
let tbody = document.querySelector('tbody')
let uid = document.querySelector('.uid')
let firstname = document.querySelector('.firstname')
let lastname = document.querySelector('.lastname')
let city = document.querySelector('.city')
let postalCode = document.querySelector('.postalCode')
let phoneNumber = document.querySelector('.phoneNumber')
let position = document.querySelector('.position')
let submit = document.querySelector('.submit')
let userList = document.querySelector('#user-list')
let userForm = document.querySelector('#user-form')
let edit = document.querySelector('.edit');
let deleteBtn = document.querySelector('.delete')


let theadArray = Object.keys(userData[0])
let trh = thead.insertRow();

//-------- CREATE TABLE HEAD ---------//
for (let i = 0; i < theadArray.length; i++) {
    let th = trh.insertCell()
    th.appendChild(document.createTextNode(theadArray[i]));
    th.onclick = function () {
        sort(theadArray[i])
    }
}


//-------- CREATE TABLE BODY ---------//
function tableBodyGenerator(userData) {
    tbody.innerHTML = ""
    let objectLength = Object.keys(userData[0]).length;
    for (let i = 0; i < userData.length; i++) {
        let trb = tbody.insertRow();
        for (let j = 0; j < objectLength; j++) {
            if (i === userData.length && j === objectLength) {
                break;
            } else {
                const td = trb.insertCell();
                td.appendChild(document.createTextNode(Object.values(userData[i])[j]));
            }
        }
    }
}
tableBodyGenerator(userData)

function sort(element) {
    userData.sort(dynamicSort(element));
    tableBodyGenerator(userData)
}

function dynamicSort(ele) {
    return function (a, b) {
        if (a[ele] < b[ele]) {
            return -1;
        }
        if (a[ele] > b[ele]) {
            return 1;
        }
        return 0;
    }
}

function showAlert(message) {
    let div = document.createElement('div')
    div.className = "alert"
    div.style.backgroundColor = "red"

    div.appendChild(document.createTextNode((message)))

    container.insertBefore(div, main)

    setTimeout(() => document.querySelector('.alert').remove(), 3000)
}


//clear all data
function clearFields() {
    document.querySelector('.uid').value = ""
    document.querySelector('.firstname').value = ""
    document.querySelector('.lastname').value = ""
    document.querySelector('.city').value = ""
    document.querySelector('.postalCode').value = ""
    document.querySelector('.phoneNumber').value = ""
    document.querySelector('.position').value = ""

}

// ADD DATA
submit.addEventListener('click', function (e) {
    e.preventDefault();


    if (firstname.value === "" || lastname.value === "" || uid.value === "") {
        showAlert("please fill all fields", "danger")
    }
    else {
        if (selectedRow === null) {


            let row = document.createElement('tr')

            row.innerHTML = `
            <td>${uid.value}</td>
            <td>${firstname.value}</td>
            <td>${lastname.value}</td>
            <td>${city.value}</td>
            <td>${postalCode.value}</td>
            <td>${phoneNumber.value}</td>
            <td>${position.value}</td>
            
                           
            `;

            {/* <button class="edit">edit</button>
        <button class="delete">delete</button></td> */}

            userList.appendChild(row)
            selectedRow = null
            showAlert("student add", "danger")
        }
        else {
            let update = userData.find(element => element.uid == uid.value)

            update.firstname = firstname.value
            update.lastname = lastname.value;
            update.city = city.value;
            update.postalCode = postalCode.value;
            update.phoneNumber = phoneNumber.value;
            update.position = position.value

            tableBodyGenerator(userData)

            selectedRow = null;
            showAlert("student edited")
        }

        clearFields();
    }

})


//edit
edit.addEventListener("click", function (e) {
    target = e.target

    selectedRow = target.parentElement;

    firstname.disabled = false
    lastname.disabled = false
    city.disabled = false
    postalCode.disabled = false
    phoneNumber.disabled = false
    position.disabled = false
    submit.style.display = 'block'


})



//delete
deleteBtn.addEventListener("click", function (e) {

    let deleteUser = userData.filter(element => element.uid != (uid.value));

    tableBodyGenerator(deleteUser)

    selectedRow = null;



})

//read
userList.addEventListener("click", function (e) {
    target = e.target

    selectedRow = target.parentElement
    uid.value = selectedRow.children[0].textContent
    firstname.value = selectedRow.children[1].textContent
    lastname.value = selectedRow.children[2].textContent
    city.value = selectedRow.children[3].textContent
    postalCode.value = selectedRow.children[4].textContent
    position.value = selectedRow.children[5].textContent

    uid.disabled = true
    firstname.disabled = true
    lastname.disabled = true
    city.disabled = true
    postalCode.disabled = true
    phoneNumber.disabled = true
    position.disabled = true
    submit.style.display = 'none'
})
