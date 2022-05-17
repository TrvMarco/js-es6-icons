const animalsAll = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Seleziono il mio container da HTML
const containerHTML = document.querySelector(".container");
const selectValue = document.querySelector("#icon-select");

const animalArray = [];
const vegetableArray = [];
const userArray = [];


animalsAll.forEach((elm) => {
	const element = document.createElement("div");
	element.classList.add("animal_container");
	containerHTML.appendChild(element);
	element.innerHTML += `<i class="fa-solid fa-${elm.name}"></i>`
	element.style.color = `${elm.color}`;
	
	
	if(elm.type == 'animal'){
		element.classList.add("type-animal");
	}
	else if(elm.type == 'vegetable'){
		element.classList.add("type-vegetable");
	}
	else{
		element.classList.add("type-users");
	}


	const typeAnimal = document.querySelector('.type-animal')

	selectValue.addEventListener('change', ()=> {
		animalsAll.forEach(() => {
			if(selectValue.value == 'animal'){
				typeAnimal.style.display = 'none';
			}
		})
	});



});

// const typeAnimal = document.querySelectorAll('.type-animal')

// selectValue.addEventListener('change', ()=> {
// 	if(selectValue.value == 'animal'){
// 		typeAnimal.style.display = 'none';
// 	}
// });



