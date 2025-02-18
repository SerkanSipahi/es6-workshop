test('can replace traditional functions', () => {
  let fnMultiply, arrowMultiply

  fnMultiply = function(a, b) {
    return a * b
  }

  arrowMultiply = (a, b) => a * b

  expect(fnMultiply(5, 5)).toBe(arrowMultiply(5, 5))
})

test('can replace traditional functions #2', () => {
  const nums = [2, 5, 10]
  const squares = nums.map(num => num * num)

  expect(squares.shift()).toBe(4)
  expect(squares.shift()).toBe(25)
  expect(squares.shift()).toBe(100)
})

test('binds `this` to the eval scope, not the runtime scope', () => {
  const person = {
    name: 'Aaron',
    greetFriends: function(friends) {
      return friends.map(friend => this.name + ' greets to ' + friend)
    },
  }

  const friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen']
  expect(() => person.greetFriends(friendsArray)).not.toThrow()
})

test('can make array filter chains more managable', () => {
  const data = [
    {type: 'Widget', name: 'Sprocket', price: 10.0, qty: 3},
    {type: 'Widget', name: 'Bracket', price: 1.0, qty: 5},
    {type: 'Widget', name: 'Brace', price: 2.5, qty: 1},
    {type: 'Widget', name: 'Sprocket', price: 4.0, qty: 2},
    {type: 'Food', name: 'Gouda', price: 8.75, qty: 4},
    {type: 'Food', name: 'Bacon', price: 3.5, qty: 3},
    {type: 'CD', name: 'Queen Best Hits', price: 5.5, qty: 5},
    {type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3},
    {type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6},
  ]

  const shoppingList = data
    .filter(d => d.type != 'Widget') 
    .filter(d => d.price < 5) 
    .sort((a, b) => a.qty - b.qty) 
    .map(d => d.name) 

  expect(shoppingList.shift()).toBe('Bacon')
  expect(shoppingList.shift()).toBe('JT Best Hits')
})


test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})







