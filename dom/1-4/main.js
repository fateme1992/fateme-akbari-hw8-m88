let body = document.getElementById('body')
body.style.height = '100vh'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'




let div = document.createElement('div')
body.appendChild(div)
div.style.width = '50%'
div.style.border = '1px solid black'
div.style.padding = '1rem'

let h1 = document.createElement('h1')
div.appendChild(h1)
h1.innerHTML = "My Tasks"
h1.style.color = 'red'

let ol = document.createElement('ol')
div.appendChild(ol)
ol.style.listStyle = "lower-roman"


let li1 = document.createElement('li')
ol.appendChild(li1)
li1.innerHTML = 'user dashboard'

let li2 = document.createElement('li')
ol.appendChild(li2)
li2.innerHTML = 'admin dashboard'

let li3 = document.createElement('li')
ol.appendChild(li3)
li3.innerHTML = 'authentication'


let li4 = document.createElement('li')
ol.appendChild(li4)
li4.innerHTML = 'about page'


let li5 = document.createElement('li')
ol.appendChild(li5)
li5.innerHTML = 'content page'
li5.style.textDecoration = 'line-through'

let ul = document.createElement('ul')
li3.appendChild(ul)


let li6 = document.createElement('li')
ul.appendChild(li6)
li6.innerHTML = 'login'

let li7 = document.createElement('li')
ul.appendChild(li7)
li7.innerHTML = 'register'
li7.style.textDecoration = 'line-through'


let li8 = document.createElement('li')
ul.appendChild(li8)
li8.innerHTML = 'logout'


let inputDiv = document.createElement('div')
div.appendChild(inputDiv)


let input = document.createElement('input')
inputDiv.appendChild(input)
input.style.marginRight='8px'


let btn=document.createElement('button')
inputDiv.appendChild(btn)
btn.innerHTML='add task'