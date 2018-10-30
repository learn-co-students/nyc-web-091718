# The Browser (DOM, BOM)
* What is it?
  * The HTML you write?
  * The page source?
  * The Elements tab in Dev Tools?
* How does JavaScript work in the browser?
  * Browser code
  * JavaScript engine
  * JavaScript standard library
  * Browser APIs
  * Your code!
* DOM (Document Object Model)
  * A tree structure starting at the document
  * Every element is a node in the tree
  * Every element is related in this structure to every other element
  * We can find elements by traversing the DOM
  * Each element has a parent (except one) and children (maybe)
  * Elements have properties that can be manipulated
  * `window` object
  * `document` object
* Element interfaces
  * Different elements (`table`, `p`, `image`) support different methods
  * You have to look up the element (in documentation or in prototype chain) to know what properties are accessible to change and methods available to call
* BOM (Browser Object Model)
  * The things that we can access about the browser in our code
  * Examples
    * `console` object
    * `navigator` object
    * `location` object
    * `history` object
    * `localStorage` object
    * timers
  * Everything that is not part of the document!
* DOM and BOM APIs
  * The code that is available to us to manipulate the DOM and the BOM :)
* Templating
  * We used to use ERB
  * Now we'll write templates for dynamically updating our web page without refreshing




















  # Intro To The DOM JS

## SWBATs
* Define the DOM and DOM nodes
* Add event listeners to DOM elements
* Query the DOM using selectors
* Manipulate the DOM by adding, removing, and editing the properties of DOM elements
* Use (or at least recognize) jQuery
* Use the Chrome Developer tools to debug

## Resources
* [The DOM](https://www.youtube.com/watch?v=oVp-CKK25NM)

## Outline

```
  10m | The Document Object Model and Developer Tools
   5m | CSS Selectors
  10m | Selecting DOM Nodes
  10m | Modifying DOM Nodes
  10m | Creating DOM Nodes
  15m | Activity
  ----|----
  60m | Total
```

### The Document Object Model
* What is the DOM?
  * Object-oriented representation of the webpage which allows programs to manipulate the properties and contents on the page
  * When HTML is compiled, the DOM is created based on that HTML
  * Javascript is a language created to manipulate the DOM

* Brief tour of Developer Tools
  * Open the Dev Tools by right-clicking on the page and selecting 'View Page Source' from the context menu
  * View DOM in the 'Elements' tab
    * Show that HTML is directly editable in the main panel
    * Show 'Styles' tab to view and manipulate CSS
    * Show pointer feature to find elements by hovering over the DOM
  * JS Console
    * If they haven't seen it already, show them how the console works

### CSS Selectors
* Individual selectors
  * Class `.class`
  * ID `#id`
  * Tag `div`
* Combining Selectors
  * Space between `#parent .child`
  * Chain `div.image.highlighted`

### Selecting DOM Nodes
* Understand types that are returned form selecting a DOM node with JavaScript
* Understand how to use CSS selectors
* Methods

  ```js
  node.querySelector('#unique-element')
  node.querySelectorAll('.some-shared-class')
  node.getElementsByTagName('body')[0]
  node.getElementById('unique-element')
  node.getElementsByClassName('some-shared-class')
  ```
  * Mention that `NodeList` is array-like, but does not have iterators built on it. Can be borrowed from `Array.prototype`
  * Chain CSS selectors to get greater specificity

### Modifying DOM Nodes
* Storing node in a variable `let body = document.querySelector('body')`
* Changing attributes `body.style.backgroundColor = red`
* `innerText` and `textContent` vs. `innerHTML`
* Removing elements `document.removeChild(body)`

### Creating DOM Objects
* Instantiating new elements `let element = document.createElement('img')`
* Adding attributes to elements `element.src = 'http://www.coooolimage.com'`
* Appending to node `document.body.appendChild(element)`

### Activity
Students will go to their favorite websites and modify the DOM programmatically. Wikipedia and Twitter are good examples.

* Students should:
  * Select elements and save them to variables
  * Delete at least 2 elements
  * Modify elements (e.g., replace image url, change text, change CSS)
  * Create new elements and add to page

* Encourage students to think programmatically about the DOM by giving them problems that involve iteration and the use of multiple CSS selectors
  * Change all instances of one word
  * Replace all images on only a certain portion of the DOM
  * Change every other header
  * Bonus (Hard): replace all elements of one tag to another (e.g., `p` to `h1`)











  # The Document Object Model

  ## Outline

  - Understand the Structure of the Document Object Model
  - Use JavaScript to manipulate the DOM
  - Use JavaScript to append elements to the DOM using `document.createElement` and string templates

  ## The DOM is a Tree 🎄

  - DOM (Document Object Model)
    - The DOM is a tree structure with several child `nodes`. All of the elements in the tree are related to each other. Some elements may have children:

  ```html
  <!-- document.body gives us the body node -->
  <body>

      <div id="outer-node"><!-- div is a child of body -->
        <div><!-- this div is a child of outer-node -->
          <div>
            <h1>Internet Memes</h1>
          </div>
        </div>
      </div>
  </body>
  ```

  - This tree structure starts at the `document`, where `document` is the parent of each individual `node` (HTML Element). Every single HTML element in the DOM is a `node`: `<p></p>`, `<h1></h1>`, `<img>`, etc.
  - JavaScript allows us to **traverse** this tree to find and _manipulate_ different `nodes` (we'll see how in a bit).
    - "The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node
      contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's
      structure, style or content." -
      [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - Elements (`nodes`) have properties that can be manipulated (`style`, `innerText`, `innerHTML`, etc). In this particular example, we'll be manipulating the `.src` attribute of some `img` tags.
  - Element interfaces
    - Different elements (`table`, `p`, `image`) support different methods
      - `image.src`, for instance
      - `document.body.style.backgroundColor = 'red'`
    - Refer to the documentation for each element you wish to manipulate to find out which propterties/attributes you can manipulate. [MDN HTML Element Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

  ## Manipulating the DOM with JavaScript

  | Selector name                      | Return shape   | Return type    | Live? | Reference             | can i call forEach? |
  | ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
  | `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
  | `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
  | `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
  | `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
  | `element.querySelectorAll()`       | Collection     | NodeList       | No    | https://goo.gl/vTfXza | Yes      |

  ---

  ## External Resources:

  - [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
  - [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
  - [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
  - [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
  - [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
  - [When are Selected HTML Elements Live](https://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
