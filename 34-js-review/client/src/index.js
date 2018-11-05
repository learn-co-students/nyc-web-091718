// DISCLAIMER: a lot of this code could and _should_ be moved into separate files
console.log('HELLO IS THIS FILE BEING LOADED AT ALL?')

document.addEventListener('DOMContentLoaded', function() {
  // i want the user to be able to click a note title
  // a form will appear that includes the data for that note
  // upon submission, the page will update and i will PATCH to the server
  let allNoteData = [] //hold on to data so we do not have to keep fetching to the index page
  const noteDiv = document.getElementById('notes')
  const noteForm = document.getElementById('create-note')

  fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json()) //returns a promise with the JSON inside of it
    .then(allNoteJSON => {
      allNoteData = allNoteJSON //store data from server so we do not have to refetch
      console.table(allNoteJSON)
      // allNoteJSON.forEach((note) => {
      //   const newPTag = document.createElement('p')
      //   newPTag.innerText = note.title
      //   noteDiv.appendChild(newPTag)
      // })
      const noteTitleHTML = allNoteJSON.map(note => {
          // add an id to each note so i can quickly find it on the DOM later
          return `<p id="note-${note.id}" data-id="${note.id}">${note.title}</p>`
        }).join('') //.map returns an array; use join to convert to a string
      noteDiv.innerHTML = noteTitleHTML
    }) //end of fetch

  noteDiv.addEventListener('click', event => {
    if (event.target.dataset.id !== undefined) {
      console.log(event.target) //target will be the element that received the event; the P tag that the user clicked on
      // find the note in our array by id
      const targetNote = allNoteData.find(/*FUNCTION*/(note) => note.id === parseInt(event.target.dataset.id)
      )
      // find the element with an id of title in the note form
      noteForm.dataset.noteId = targetNote.id //this is for later. so we have access to the id of the note that was clicked when sending the PATCH requests
      const titleInput = noteForm.querySelector('#title') //input field for title
      const bodyInput = noteForm.querySelector('#body')
      const noteButton = noteForm.querySelector('#submit')
      titleInput.value = targetNote.title
      bodyInput.value = targetNote.body
      noteButton.innerText = 'Edit Note'
      // populate a form with the details from that note
    }
  })

  noteForm.addEventListener('submit', /*FUNCTION*/ (event) => {
      event.preventDefault() //stop form from sending a POST request
      if (event.target.dataset.noteId !== undefined) { //if the form has an id it means we're editing a note
        const noteId = event.target.dataset.noteId
        // find the note that was updated in our JS array based on ID:
        // let targetNote = allNoteData.find(n => n.id === parseInt(noteId))
        const targetNoteIdx = allNoteData.findIndex(n => n.id == noteId)
        let targetNote = allNoteData[targetNoteIdx] //create another pointer to the note that needs updating
        const updatedTitle = event.target.querySelector('#title').value
        const updatedBody = event.target.querySelector('#body').value

        //OPTIMISTIC RENDERING:
        targetNote.body = updatedBody
        targetNote.title = updatedTitle
        //find the `p` tag for the note on the page and update its content
        noteDiv.querySelector(`#note-${noteId}`).innerText = updatedTitle
        // UPDATES THE JS ARRAY AND THE DOM BEFORE SENDING THE PATCH REQUEST

        // send PATCH request to server:
        fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
          method: 'PATCH', //which HTTP method do we want to use?
          headers: {
            //headers specify details/data for our request
            'Content-Type': 'application/json', //hey server, i am sending u JSON,
            Accept: 'application/json' //hey server pls send me back JSON
          },
          body: JSON.stringify({
            //i can not send a JS object across the 'net; instead i'll send a string
            // this obj will become my params hash
            body: updatedBody,
            title: updatedTitle
          })
        })
          .then(r => r.json())
          .then(updatedNote => {
            // PESSIMISTIC RENDERING:
            //updated note sent from server; i can take that data and update my frontend and the DOM
            allNoteData[targetNoteIdx] = updatedNote
            noteDiv.querySelector(`#note-${noteId}`).innerText = updatedNote.title //update DOM with server response data
          })
      } else {
        // CREATE NEW NOTE
      }
    }
  )
})
