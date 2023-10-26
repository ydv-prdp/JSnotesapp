const notesContainer = document.querySelector(".notes-container");
showNotes();
function createNotes(){
    const notesPara = document.createElement("p");
    const imgNotesPara = document.createElement("img");
    notesPara.classList.add("input-box");
    notesPara.contentEditable="true";
    imgNotesPara.src="notes-app-img/images/delete.png";
    notesPara.appendChild(imgNotesPara);
    notesContainer.appendChild(notesPara);
}
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);

}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
