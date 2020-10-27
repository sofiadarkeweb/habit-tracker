//variables
const nameInput = document.querySelector(".name-input");
const descriptionInput = document.querySelector(".description-input");
const addbBtn = document.querySelector(".submit-button");
const plantContainer = document.querySelector(".plant-container");
const plantList = document.querySelector(".plant-list");
const plantImgs = [
	"plant1.jpg",
	"plant2.jpg",
	"plant3.jpg",
	"plant4.jpg",
	"plant5.jpg",
	"plant6.jpg",
	"plant7.jpg",
	"plant8.jpg",
	"plant9.jpg",
	"plant10.jpg"
];

//todays date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 10) {
	day = "0" + day;
}
if (month < 10) {
	month = "0" + month;
}

const todaysDate = document.getElementById("date");

todaysDate.innerHTML = year + "-" + month + "-" + day;

//event listeners
addbBtn.addEventListener("click", containerCreator);
document.addEventListener("DOMContentLoaded", getFromLocalStorage);

//functions
// function to calculate days to do plant stuff
Date.prototype.addDays = function(days) {
	const date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

//function to know how many days to due date
const date = new Date();
const dueWaterDate = date.addDays(5);
const dueFertilizeDate = date.addDays(12);
const dueRepotDate = date.addDays(45);

function daysTo(dueDate) {
	const timeDifferenceInMilliseconds = dueDate - date.getTime();
	const millisecondsInADay = 1000 * 60 * 60 * 24;
	const daysTo = timeDifferenceInMilliseconds / millisecondsInADay;
	return daysTo;
}

//function to create the div with plant information
function containerCreator(event) {
	event.preventDefault();

	const plantIdentifier = "plant-" + Math.round(Math.random() * 100000);

	//Create plant Div
	const plantDiv = document.createElement("div");
	plantDiv.id = plantIdentifier;
	plantDiv.classList.add("plant");

	const daysToRewater = daysTo(dueWaterDate);
	const daysToFertilize = daysTo(dueFertilizeDate);
	const daysToRepot = daysTo(dueRepotDate);

	//Create the img for the plant
	const plantImg = document.createElement("img");
	plantDiv.appendChild(plantImg);
	plantImg.src = plantImgs[Math.floor(Math.random() * plantImgs.length)];
	plantImg.classList.add("image-plant");

	//Create the header/name for the container
	const newName = document.createElement("h2");
	plantDiv.appendChild(newName);
	const name = nameInput.value
	newName.innerText = name;
	newName.classList.add("plant-name");

	//Clear name input
	nameInput.value = "";

	//Create the description for the plant
	const newDescription = document.createElement("p");
	plantDiv.appendChild(newDescription);
	const description = descriptionInput.value;
	newDescription.innerText = description;
	newDescription.classList.add("info-text");

	// Clear name input
	descriptionInput.value = "";

	//todo - water
	//Create check button - water
	const checkWaterBtn = document.createElement("button");
	plantDiv.appendChild(checkWaterBtn);
	checkWaterBtn.classList.add("todo-buttons");
	if (daysToRewater === 1) {
		checkWaterBtn.innerText = "Water in " + daysToRewater + " day";
	} else {
		checkWaterBtn.innerText = "Water in " + daysToRewater + " days";
	}
	checkWaterBtn.addEventListener("click", function () {
		checkWaterBtn.innerText = "Water in 5 days";
	});
	checkWaterBtn.classList.add("todo-buttons");

	//todo - fertilize
	//Create check button - fertilize
	const fertilizeBtn = document.createElement("button");
	fertilizeBtn.classList.add("todo-buttons");
	plantDiv.appendChild(fertilizeBtn);
	if (daysToFertilize === 1) {
		fertilizeBtn.innerText = "Fertilize me in " + daysToFertilize + " day";
	} else {
		fertilizeBtn.innerText = "Fertilize me in " + daysToFertilize + " days";
	}
	fertilizeBtn.addEventListener("click", function () {
		fertilizeBtn.innerText = "Fertilize me in 12 days";
	});

	//todo - repot
	//Create check button - repot
	const checkRepotBtn = document.createElement("button");
	checkRepotBtn.classList.add("todo-buttons");
	plantDiv.appendChild(checkRepotBtn);
	if (daysToRepot === 1) {
		checkRepotBtn.innerHTML = "Repot me in " + daysToRepot + " day";
	} else {
		checkRepotBtn.innerHTML = "Repot me in " + daysToRepot + " days";
	}
	checkRepotBtn.addEventListener("click", function () {
		checkRepotBtn.innerText = "Repot me in 45 days";
	});

	//Create trash button
	const binBtn = document.createElement("button");
	binBtn.classList.add("bin-btn");
	binBtn.innerHTML = '<i id="btn-icon-trash" class="fas fa-trash"></i>';
	plantDiv.appendChild(binBtn);
	binBtn.addEventListener("click", deleteTodo);
	
	function deleteTodo() {
		const selectedPlant = document.getElementById(plantIdentifier);
		selectedPlant.remove();
	}

	//function to save data on Local Storage
	function saveToLocalStorage(plantIdentifier) {
		const dueDatesToLocalStorage = { "divIdentifier": plantIdentifier, "plantName": name, "plantDescription": description,  "dueWaterDate": dueWaterDate, "dueFertilizeDate": dueFertilizeDate, "dueRepotDate": dueRepotDate}
		localStorage.setItem(dueDatesToLocalStorage + plantIdentifier, JSON.stringify(dueDatesToLocalStorage));
	}

	saveToLocalStorage(plantIdentifier);

	// Append to plant list
	plantList.appendChild(plantDiv);
}

function getFromLocalStorage() {
	let dataToFetch;
	if (localStorage.getItem("dataToFetch") === null) {
		dataToFetch = [];
	} else {
		dataToFetch = JSON.parse(localStorage.getItem("dataToFetch"));
		console.log(dataToFetch);
	}
}
