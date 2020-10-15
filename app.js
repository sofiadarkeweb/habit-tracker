//variables//

const nameInput =document.querySelector(".name-input")
const descriptionInput =document.querySelector(".description-input")
const addbBtn =document.querySelector(".submit-button")

//event listeners//

addbBtn.addEventListener('click', containerCreator)

//function//
function containerCreator(event){
    event.preventDefault()
    console.log("testing")
}

console.log("hello")
