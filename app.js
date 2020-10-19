//variables//

const nameInput =document.querySelector(".name-input")
const descriptionInput =document.querySelector(".description-input")
const addbBtn =document.querySelector(".submit-button")
const plantContainer = document.querySelector(".plant-container")

//todays date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

const date = document.getElementById("date");

date.innerHTML = year + "-" + month + "-" + day;



//event listeners//

addbBtn.addEventListener("click", containerCreator)

//function to create the div with plant information
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
//Create check button - water
    const checkWaterBtn = document.createElement("button");
    newContainerDiv.appendChild(checkWaterBtn);
    checkWaterBtn.innerText = "Water in 5 days" 
    checkWaterBtn.addEventListener("click", function(){
        checkWaterBtn.innerText = "Water in 4 days"
    }) 
//todo - fertilize
//Create check button - fertilize
    const fertilizeBtn = document.createElement("button");
    newContainerDiv.appendChild(fertilizeBtn);
    fertilizeBtn.innerText = "Fertilize me in 12"
    fertilizeBtn.addEventListener("click", function(){
        fertilizeBtn.innerText = "Fertilize me in 11 days"
    })
//todo - repot
//Create check button - repot
    const checkRepotBtn = document.createElement("button");
    newContainerDiv.appendChild(checkRepotBtn);
    checkRepotBtn.innerHTML = "Repot me in 45 days"
    checkRepotBtn.addEventListener("click", function(){
        checkRepotBtn.innerText = "Repot me in 44 days"
    })
// Append to plant list
    plantContainer.appendChild(newContainerDiv);
}

console.log("Hey")