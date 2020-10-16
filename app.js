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
    todoWater.innerText = "water in 5 days"  
//todo - fertilize
    const todoFertilize = document.createElement("li");
    newContainerDiv.appendChild(todoFertilize);
    todoFertilize.innerText = "fertilize me in 12 days"
//todo - repot
    const todoRepot = document.createElement("li");
    newContainerDiv.appendChild(todoRepot);
    todoRepot.innerText = "Repot me in 45 days"     
// Append to plant list
    plantContainer.appendChild(newContainerDiv)
}

console.log("Hey")