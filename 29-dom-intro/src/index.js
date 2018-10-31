console.log('%c Hello, World!', 'color: orange')

//i want to append some img tags and assign the `src` based on what is in my array

// first i need to find the div i'll append elements to

// then i need to iterate over my array of strings
// create an img tag FOREACH element in this array

// add/append those elments to my div

const imgContainer = document.querySelector('#container')
console.log(imgContainer)

dankMemes.forEach(function(memeUrlString) {
  const newImgTag = document.createElement('img')
  newImgTag.src = memeUrlString
  imgContainer.appendChild(newImgTag)
})


// console.table(dankMemes)


// diff b/n document.getElementById & querySelector

//i can ONLY call getElementById on the DOCUMENT
const outerNode = document.getElementById('#outer-node')
// i can call querySelector on ANY node in the DOM
const innerPTag = outerNode.querySelector('#hi')
