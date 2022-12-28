let body = document.getElementById('body')


let parent = document.createElement('div')
body.appendChild(parent)
parent.style.position = 'relative'
parent.style.width = '500px'
parent.style.height = '500px'
parent.style.backgroundColor = 'green'
parent.style.color = 'white'
parent.style.marginBottom = '1rem'
parent.style.border = '1px solid balck'

let parentSpan = document.createElement('span')
parent.appendChild(parentSpan)
parentSpan.innerHTML = "Parent Node Text!  "
parentSpan.style.position = 'absolute'


let target = document.createElement('div')
parent.appendChild(target)
target.style.position = 'absolute'
target.style.padding = '0.5rem'
target.style.border = '1px solid black'
target.style.height = '300px'
target.style.width = '300px'
target.style.top = '40px'

let targetText = document.createElement('span')
target.appendChild(targetText)
targetText.innerHTML = "Target Node Text!  "



let child = document.createElement('div')
target.appendChild(child)
child.innerHTML = "the main node Child node!  "
child.style.position = 'absolute'
child.style.padding = '1rem'
child.style.border = '1px solid black'
child.style.height = '100px'

let copyParentText = document.createElement('button')
body.appendChild(copyParentText)
copyParentText.innerHTML = 'copy parent text'


let copyChildText = document.createElement('button')
body.appendChild(copyChildText)
copyChildText.innerHTML = 'copy child text'





copyParentText.onclick = function () {
    targetText.innerHTML = parentSpan.innerHTML + targetText.innerHTML + child.innerHTML + targetText.innerHTML
}

copyChildText.onclick = function () {
    targetText.innerHTML = child.innerHTML + targetText.innerHTML
}
