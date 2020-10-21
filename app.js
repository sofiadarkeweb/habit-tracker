//variables
const nameInput = document.querySelector(".name-input");
const descriptionInput = document.querySelector(".description-input");
const addbBtn = document.querySelector(".submit-button");
const plantContainer = document.querySelector(".plant-container");
const plantPhoto = document.getElementById("plant-photo").files;

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
    
    //Display plant photo
    
    //variables to date
    const date = new Date();
    const dayOfTheMonth = date.getDate();

    //variables to rewater
    const dueWaterDate = dayOfTheMonth + 5;
    const daysToRewater = dueWaterDate - dayOfTheMonth;
    localStorage.setItem("dueWaterDate", dueWaterDate);
    
    //variables to fertilize
    const dueFertilizeDate = dayOfTheMonth + 12;
    const daysToFertilize = dueFertilizeDate - dayOfTheMonth;
    localStorage.setItem("dueFertilizeDate", dueFertilizeDate);
    
    //variables to repot
    const dueRepotDate = dayOfTheMonth + 45;
    const daysToRepot = dueRepotDate - dayOfTheMonth;
    localStorage.setItem("dueRepotDate", dueRepotDate);

    console.log(localStorage)
//Creates the container div
    const newContainerDiv = document.createElement("div");
    newContainerDiv.classList.add("plant-container");

//Creates the header/name for the container
    const newName = document.createElement("h2");    
    newContainerDiv.appendChild(newName);
    newName.innerText = nameInput.value
    newName.classList.add("plant-name");

// Append to plant list
    plantContainer.appendChild(newContainerDiv)

// Clears name input
    nameInput.value = ""

//Creates the description for the plant
    const newDescription = document.createElement("p");    
    newContainerDiv.appendChild(newDescription);
    newDescription.innerText = descriptionInput.value
    newDescription.classList.add("info-text");

// Clears name input
    descriptionInput.value = ""

//Creates todo list
//todo - water
//Create check button - water
    const checkWaterBtn = document.createElement("button");
    newContainerDiv.appendChild(checkWaterBtn);
    checkWaterBtn.classList.add("water-btn");
     if (daysToRewater === 1) {
        checkWaterBtn.innerText = "Water in " + daysToRewater + " day";
     } else {
        checkWaterBtn.innerText = "Water in " + daysToRewater + " days";
     }
    checkWaterBtn.addEventListener("click", function(){
        checkWaterBtn.innerText = "Water in 5 days"
    }) 
    checkWaterBtn.classList.add("water-btn");

//todo - fertilize
//Create check button - fertilize
    const fertilizeBtn = document.createElement("button");
    fertilizeBtn.classList.add("fertilize-btn");
    newContainerDiv.appendChild(fertilizeBtn);
    if (daysToFertilize === 1) {
        fertilizeBtn.innerText = "Fertilize me in " + daysToFertilize + " day"; 
    } else {
        fertilizeBtn.innerText = "Fertilize me in " + daysToFertilize + " days";
    }
    fertilizeBtn.addEventListener("click", function(){
        fertilizeBtn.innerText = "Fertilize me in 12 days"
    });

//todo - repot
//Create check button - repot
    const checkRepotBtn = document.createElement("button");
    checkRepotBtn.classList.add("repot-btn");
    newContainerDiv.appendChild(checkRepotBtn);
    if (daysToRepot === 1) {
        checkRepotBtn.innerHTML = "Repot me in " + daysToRepot + " day"
    } else {
        checkRepotBtn.innerHTML = "Repot me in " + daysToRepot + " days"
    }
    checkRepotBtn.addEventListener("click", function(){
        checkRepotBtn.innerText = "Repot me in 45 days"
    })
    
// Append to plant list
    plantContainer.appendChild(newContainerDiv);
}