const inputElem = document.querySelector('#input-field')
const btnSaveElem = document.querySelector('#btn-save')
const btnDeleteElem = document.querySelector('#btn-delete')
const colorBox = document.querySelectorAll('.color-box')
const notesContainer = document.querySelector('#listed')

colorBox.forEach(function(colorBox){
    // console.log(colorBox)
    colorBox.addEventListener('click', function(event){
        console.log(event.target)
        let mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor
    })
})




function generateNewNote(){
    let newNoteDivElem=document.createElement('div')
    newNoteDivElem.className = "card shadow-sm rounded "

    let inputBg = inputElem.style.backgroundColor
    newNoteDivElem.style.backgroundColor = inputBg;
    newNoteDivElem,addEventListener('click', removeNote)


    let newNotePElem=document.createElement('p')
    newNotePElem.className = "card-text p-3"
    newNotePElem.innerHTML = inputElem.value

    newNoteDivElem.append(newNotePElem)
   notesContainer.append(newNoteDivElem)
   inputElem.value =''
   inputElem.style.backgroundColor = ' #fff'



    console.log(newNoteDivElem)
    // console.log(newNotePElem)
}



function removeNote(event){
    // console.log(event.target.parentElement)
    event.target.parentElement.remove();


}




btnDeleteElem.addEventListener('click', function(){
    inputElem.value =''
    inputElem.style.backgroundColor = ' #fff'

})   

inputElem.addEventListener('keydown', function(event){
    // console.log(event)

    if(event.keyCode === 13){
        if(inputElem.value ) {
            generateNewNote()
        }
       
    }
})

btnSaveElem.addEventListener('click', generateNewNote)