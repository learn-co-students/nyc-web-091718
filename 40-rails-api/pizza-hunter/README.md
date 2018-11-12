# RAILS API SETUP DOC:

- https://github.com/learn-co-curriculum/mod3-project-week-setup-example

# CORS

'https://www.mygreatapp.com'

'http://couponvirus.co.uk'

`POST` to create a new `Pizza`

```js
fetch('http://localhost:3000/api/v1/pizzas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    pizza: {
      toppings: 'cheese',
      crust_type: 'thin',
      sauce: 'tomato'
    }
  })
})
  .then(function(response) {
    return response.json()
  })
  .then(function(newPizzaObj) {
    console.log(newPizzaObj)
  })
```
