// 1 - creare array con lista della spesa
const list = ['pomodori', 'mozzarella', 'origano', 'olio', 'aceto'];

// 2 - creare ciclo while che stampi dei li all'interno dell'ul con id shopping-list
const listContainer = document.getElementById('shopping-list');

let i = 0;

while (i < list.length) {
	let item = list[i];

	let listItem = document.createElement('li');
	listItem.innerText = item;
	listContainer.append(listItem);
	
	i++
}