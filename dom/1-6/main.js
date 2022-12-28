console.log('hello');
let table = document.getElementById('table')
let thead = document.getElementById('thead')
let tbody = document.createElement('tbody')

table.appendChild(tbody)
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
                td.style.border = '1px solid black';
                td.onclick = function () {
                    let read = document.getElementById('read')
                    read.innerHTML = ''
                    for (let i = 0; i < theadArray.length; i++) {
                        
                        let p = document.createElement('p')
                        read.appendChild(p)
                       console.log( userData.find(theadArray[i]));
                        p.innerHTML = `${theadArray[i]}:`
                            // userData[]`



                    }
                }

                //     let read = document.getElementById(read)
                //     for(let i=0; i<theadArray;i++){
                //         let p = document.createElement('p')
                //         read.appendChild(p)
                //         // p.innerHTML=`name: ${}`
                //     }
                // }

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



