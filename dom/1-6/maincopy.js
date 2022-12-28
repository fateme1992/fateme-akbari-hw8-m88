console.log('hello');
var selectRow = null
function onFormSubmit() {
    console.log('hello');
    event.preventDefault()
    var userData = readUserData();
    if (selectRow === null) insertNewData(userData)
    else { }
}
onFormSubmit()

function readUserData() {
    console.log('hel');
    var userData = {}
    userData[uid] = document.getElementById('uid').value
    userData[firstname] = document.getElementById('firstname').value
    userData[lastname] = document.getElementById('lastname').value
    userData[city] = document.getElementById('city').value
    userData[postalCode] = document.getElementById('postalCode').value
    userData[phoneNumber] = document.getElementById('phoneNumber').value
    userData[position] = document.getElementById('position').value
    return userData;
}

function insertNewData(userData) {
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length)
    var cel1 = newRow.insertCell(0)
    cel1.innerHTML = userData.uid
    var cel2 = newRow.insertCell(1)
    cel2.innerHTML = userData.firstname
    var cel3 = newRow.insertCell(2)
    cel3.innerHTML = userData.lastname
    var cel4 = newRow.insertCell(3)
    cel4.innerHTML = userData.city
    var cel5 = newRow.insertCell(4)
    cel5.innerHTML = userData.postalCode
    var cel6 = newRow.insertCell(5)
    cel6.innerHTML = userData.phoneNumber
    var cel7 = newRow.insertCell(6)
    cel7.innerHTML = userData.position

    console.log(Object.keys(userData).length);

}

// // insertNewData()
