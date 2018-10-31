console.log('%c Hello lol', 'color:goldenrod')

// const document = {
//   addEventListener: function(eventString, callback) {
//   // when the browser tells me the event occured,
//   callback()
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  const newCommentForm = document.getElementById('comment-form') //find form on the page
  const divForAppendingNewComments = document.getElementById('comments-container')
  const helicopterNode = document.getElementById('helicopter-parent')
  // listen for some kind of event on the form🤔

  console.log('COMMENT FORM IS: ', newCommentForm)

  newCommentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop this form from SUBMITING
    // event.target is the FORM which is an HTML element or Node
    // i can call element.querySelector
    const newCommentInputField = event.target.querySelector('#new-comment')
    // const newCommentInputField = newCommentForm.querySelector('#new-comment')
    const newCommentString = newCommentInputField.value

    const newCommentPTag = document.createElement('p')
    newCommentPTag.innerText = newCommentString
    divForAppendingNewComments.appendChild(newCommentPTag)
    // append to DOM
    event.target.reset()
  }) //end of submit handler/callback

  helicopterNode.addEventListener('click', function(event) {
    // i do not need to prevent the click default action
    //event.target is the node that was clicked
    // our buttons have a key of dataset -> { name: 'alert' }
    // i am checking the value of button.dataset.name and deciding what to do based on what i find

    if (event.target.dataset.name === 'alert') {
      window.alert('HI')
    } else if (event.target.dataset.name === 'log') {
      console.log('HI')
    } else if (event.target.dataset.name === 'error') {
      console.error('HI')
    }
  })

}) //end of DOMContentLoaded callback
