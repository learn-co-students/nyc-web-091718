//#region 
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
let toyCollection = document.querySelector('#toy-collection')
toyCollection.addEventListener('click', handleClickContainer)
//#endregion


let toyInputs = document.querySelector('.add-toy-form')
toyInputs.addEventListener('submit', handleToyFormSubmit)
document.addEventListener('DOMContentLoaded', function(e){
  getAllToys()
})
addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})


function handleToyFormSubmit(e){
  e.preventDefault()
  let name = e.target.querySelector('#toy-name').value
  let imageUrl = e.target.querySelector('#toy-image').value

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: 
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:
    JSON.stringify({
      "name": name,
      "image": imageUrl,
      "likes": 0
    })
  })
  .then(res => res.json())
  .then(anything => addSingleToyToPage(anything))

}









function getAllToys(){
  fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(toys => addToysToPage(toys))
}
function addToysToPage(toys){
  toys.forEach((toy) => {
    addSingleToyToPage(toy)
  })
}
function addSingleToyToPage(toy){
  toyCollection.innerHTML += `
    <div class="card" data-id="${toy.id}">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>
    `
}















function handleClickContainer(e){
  if (e.target.className === "like-btn") {
    handleLikeClick(e.target)
  }
}


















function handleLikeClick(target){
  updateDOM(target)
  updateServer(target)
}
function updateDOM(target){
  let likes = target.parentElement.querySelector('p')
  let currentLikes = parseInt(likes.innerText)
  let newLikes = ++currentLikes
  likes.innerText = `${newLikes} likes`
}
function updateServer(target){
  let likes = target.parentElement.querySelector('p')
  let currentLikes = parseInt(likes.innerText)
  let id = target.parentElement.dataset.id	
  console.log(currentLikes, id)
  fetch(`http://localhost:3000/toys/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:
    JSON.stringify({
      "likes": currentLikes
    })
  })
  .then(res => res.json())
  .then(updatedToy => console.log(updatedToy))

}

