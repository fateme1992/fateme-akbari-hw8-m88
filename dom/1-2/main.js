let body = document.getElementById('body')
let div = document.createElement('div')
body.appendChild(div)
div.innerHTML='hover me!'


// STYLE
div.style.width='200px'
div.style.height='200px'
div.style.backgroundColor='red'
div.style.color='white'
div.style.display='flex'
div.style.margin='0px auto'
div.style.padding='1rem'


div.onmouseenter=function(){
    div.style.backgroundColor='blue'
}

div.onmouseleave=function(){
    div.style.backgroundColor='red'
}