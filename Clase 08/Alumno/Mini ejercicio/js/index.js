var newText = prompt('Ingresá un texto')
var newTitle = prompt('Ingresá un título')

var titleNode = document.getElementById('title')
var textNode = document.getElementById('text')

titleNode.innerHTML = newTitle

textNode.innerHTML = newText

console.log(newText)
console.log(newTitle)
