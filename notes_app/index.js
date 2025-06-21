window.onload = function () {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(note => {
    createNoteElement(note);
  });
};

function addNote() {
  const input = document.getElementById("noteInput");
  const noteText = input.value.trim();

  if (noteText === "") {
    alert("Please write something!");
    return;
  }

  createNoteElement(noteText);
  saveNoteToStorage(noteText);
  input.value = "";
}

function createNoteElement(text) {
  const noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.innerText = text;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function () {
    noteDiv.remove();
    deleteNoteFromStorage(text);
  };

  noteDiv.appendChild(delBtn);
  document.getElementById("notesContainer").appendChild(noteDiv);
}

function saveNoteToStorage(noteText) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNoteFromStorage(noteToDelete) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter(note => note !== noteToDelete);
  localStorage.setItem("notes", JSON.stringify(notes));
}
