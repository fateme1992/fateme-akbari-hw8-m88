let body = document.getElementById('body')
let div = document.createElement('div')
body.appendChild(div)
div.innerHTML='Click here and watch the change! '

// STYLE
div.style.backgroundColor = 'green'
div.style.color = 'white';
div.style.width = '300px';
div.style.display = 'flex';
div.style.margin = '0px auto'
div.style.minHeight = '200px'
div.style.padding = '1rem'


let span = document.createElement('span')
span.innerHTML = 'Click add some text! '
console.log(div.innerHTML);
div.onclick = function () {
    div.innerHTML =div.innerHTML + span.innerHTML
}



