//variables//

const nameInput =document.querySelector(".name-input")
const descriptionInput =document.querySelector(".description-input")
const addbBtn =document.querySelector(".submit-button")
const plantContainer = document.querySelector(".plant-container")

//event listeners//

addbBtn.addEventListener('click', containerCreator)

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
// Append to plant list
    plantContainer.appendChild(newContainerDiv)
// Clears name input
    descriptionInput.value = ""
}

console.log("hello")