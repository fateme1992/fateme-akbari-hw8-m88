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

function showAlert(message, className) {
    let div = document.createElement('div')
    div.className = "alert"
    div.style.backgroundColor = "red"
    div.style.color = "white"

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
        showAlert("please fill all fields", "alert")
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
            console.log(userData);
            console.log(phoneNumber.value);
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
    uid.value = ""
    firstname.value = ""
    lastname.value = ""
    city.value = ""
    postalCode.value = ""
    phoneNumber.value = ""
    position.value = ""

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
    phoneNumber.value = selectedRow.children[5].textContent
    position.value = selectedRow.children[6].textContent
    uid.disabled = true
    firstname.disabled = true
    lastname.disabled = true
    city.disabled = true
    postalCode.disabled = true
    phoneNumber.disabled = true
    position.disabled = true
    submit.style.display = 'none'
})
///////////////////////////////


function renderTable(sortBy = null) {
    let thead = document.querySelector('thead')
    let tbody = document.querySelector('tbody')
    let users = [...userData]

    tbody.innerHTML = ""
    thead.innerHTML = ""


    if (!!sortBy) {
        users.sort((a, b) => {
            const current = a[sortBy].toString()
            const next = b[sortBy].toString()
            next.localCompare(current, undefined, { numeric: true, sensitivity: 'base' })
        })
    }


    if (userData.length === 0) return;

    let tablalecolumns = ['row', ...Object.keys(users[0])].map(column => {
        if (column === 'row') {
            return `<td>${column}</td>`
        }
        return `<th onclick="renderTable("${column}")">${column}</th>`
    }).join('')

    thead.innerHTML = `<tr>${tablalecolumns}</tr>`

    for (const [index, user] of users.entries()) {
        tbody.innerHTML +=
            `<tr onclick=renderReadUser('${user.uid}')>
                <td>${index + 1}</td>
                <td>${user.uid}</td>
                <td>${firstname.uid}</td>
                <td>${lastname.uid}</td>
                <td>${city.uid}</td>
                <td>${postalCode.uid}</td>
                <td>${phoneNumber.uid}</td>
                <td>${position.uid}</td>
            </tr>`
    }
}

renderTable()
let modal = document.querySelector('#modal')
let creatButton = document.querySelector('#create-button')
let closeButton = document.querySelector('#close-button')

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function resetModal() {
    modalBody.innerHTML = ""
    modalFooter.innerHTML = ""
    modalHeader.innerHTML = ""
}

closeButton.onclick = closeModal;

function renderReadUser(uid) {
    const user = userData.find(user => user.uid === uid)

    resetModal()

    modalHeader.textContent = 'user info'

    modalBody.innerHTML = Object.keys(user).map(property => `<p>${property}: ${user[property]}</p>`).join('')

    modalFooter.innerHTML = `
        <button onclick='renderUpdateUser(${uid})'>update</button>
        <button onclick="deleteUser(${uid})>delete</button>
    `
}





function deleteUser(uid) {
    const user = userData.find(user => user.uid === uid)

    userData = userData.filter(item => item.uid !== user.uid)


    renderTable()
    closeModal()
}

function renderUpdateUser(uid) {
    resetModal()
    const user = userData.find(user => user.uid === uid)

    modalHeader.textContent = 'updae user'

    modalBody.innerHTML = Object.keys(user)
        .map(property => {
            if (property === 'uid') {
                return (`<input type="text" id="${property}" class="updateInput" value="${user[property]}" disabled></input>`).join('')
            }


            return (`<input type="text" id="${property}" class="updateInput" value="${user[property]}"></input>`).join('')

        })
    modalFooter.innerHTML = `
            <button onclick='updateUser(${uid})'>save</button>
            <button onclick='renderUpdateUser(${uid})cancle</button>
        `

}


function updateUser() {
    const user = userData.find(user => user.uid === uid)

    const updateInputs = document.querySelectorAll('.updateInputs')

    for (const input of updateInputs) {
        if (input.value.trim() === "") return "invalid input"

        if (input.uid == 'uid') {
            user[input.id] = Number(input.value)
            continue;
        }


        user[input.id] = input.value
    }
    closeModal()
    renderTable()
}

function renderCreateUser() {
    resetModal()
    modalHeader.textContent = 'create user'

    modalBody.innerHTML = Object.keys(userData[0])
        .map(property => {
            (`<input type="text" id="${property}" class="createInput"></input>`).join('')

        })
    modalFooter.innerHTML = `
            <button onclick='createUser(${uid})'>save</button>
            <button onclick='modalClose()'>cancle</button>
        `
    openModal()
}


function createeUser() {

    const createInputs = document.querySelectorAll('createInputs')
    const newUserUid = Number(document.querySelector('input#uid').value)

    const doplicate = userData.find(user => user.uid === newUserUid)

    if (!!doplicate) return "invalid input"

    const newUser = {}

    for (const input of createInputs) {
        if (input.value.trim() === "") return "invalid input"


        if (input.uid == 'uid') {
            newUser[input.id] = Number(input.value)
            continue;
        }
        newUser[input.id] = input.value
    }

    userData.push(newUser)

    closeModal()
    renderTable()
}



