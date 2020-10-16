//variables//

const nameInput =document.querySelector(".name-input")
const descriptionInput =document.querySelector(".description-input")
const addbBtn =document.querySelector(".submit-button")
const plantContainer = document.querySelector(".plant-container")

//event listeners//

addbBtn.addEventListener("click", containerCreator)

//function to create the div with plant information//
function containerCreator(event){
    event.preventDefault();
//Creates the container div
    const newContainerDiv = document.createElement("div");
//Creates the header/name for the container
    const newName = document.createElement("h2");    
    newContainerDiv.appendChild(newName);
    newName.innerText = nameInput.value
// Append to plant list
    plantContainer.appendChild(newContainerDiv)
// Clears name input
    nameInput.value = ""
//Creates the description for the plant
    const newDescription = document.createElement("p");    
    newContainerDiv.appendChild(newDescription);
    newDescription.innerText = descriptionInput.value
// Clears name input
    descriptionInput.value = ""
//Creates todo list
//todo - water
    const todoWater = document.createElement("li");
    newContainerDiv.appendChild(todoWater);
    todoWater.innerText = "Water in 5 days"
//Create check button - water
const checkWaterBtn = document.createElement("button");
newContainerDiv.appendChild(checkWaterBtn);
checkWaterBtn.innerText = "check water"  
//todo - fertilize
    const todoFertilize = document.createElement("li");
    newContainerDiv.appendChild(todoFertilize);
    todoFertilize.innerText = "Fertilize me in 12 days"
//Create check button - fertilize
const fertilizeBtn = document.createElement("button");
newContainerDiv.appendChild(fertilizeBtn);
fertilizeBtn.innerText = "check fertilize"
//todo - repot
    const todoRepot = document.createElement("li");
    newContainerDiv.appendChild(todoRepot);
    todoRepot.innerText = "Repot me in 45 days"  
//Create check button - repot
    const checkRepotBtn = document.createElement("button");
    newContainerDiv.appendChild(checkRepotBtn);
    checkRepotBtn.innerHTML = "<i class='fas fa-check'></i>"
// Append to plant list
    plantContainer.appendChild(newContainerDiv);
}

console.log("Hey")