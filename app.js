let itemToAdd = document.getElementById('itemToAdd');
let submit = document.getElementById('submit');
let toDos = document.getElementById('toDos');

submit.addEventListener('click', function() {
	var paragraph = document.createElement('p');
	paragraph.innerText = itemToAdd.value;
	toDos.appendChild(paragraph);
	itemToAdd.value = "";
	paragraph.addEventListener('click', function() {
		paragraph.style.textDecoration = 'line-through';
	})
	paragraph.addEventListener('dblclick', function() {
		toDos.removeChild(paragraph);
	})
})