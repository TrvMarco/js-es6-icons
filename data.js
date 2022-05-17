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

let element;

animalsAll.forEach((elm) => {
	printIconBox(elm)
});



// const typeAnimal = document.querySelectorAll('.type-animal');
// const typeUser = document.querySelectorAll('.type-user');
// const typeVegetable = document.querySelectorAll('.type-vegetable');

selectValue.addEventListener('change', function(){
	containerHTML.innerHTML = ""
	if(selectValue.value == "animal"){
		const animalType = animalsAll.filter((obj)=>{
			return obj.type === "animal"
		});
		animalType.forEach((elm)=>{
			printIconBox(elm)
		})
	}	
});


// FUNCTION
function printIconBox(obj){
	element = document.createElement("div");
	element.classList.add("animal_container");
	containerHTML.appendChild(element);
	element.innerHTML += `
	<i class="fa-solid fa-${obj.name}"></i>
	<span class="text-color">${obj.name}</span>
	`
	element.style.color = `${obj.color}`;
}