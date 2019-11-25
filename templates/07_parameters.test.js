test('can be triggered when the incoming argument is undefined', () => {
  function getName(name = 'Mercury') {
    return name
  }

  
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName()).toBe('Mercury')
  expect(getName(undefined)).toBe('Mercury')
  expect(getName(null)).toBe(null)
  
  
  expect(getName('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName()).toBe(/*ENTER YOUR GUESS HERE*/)
  
})

test(`aren't included in arguments`, () => {
  function getName(name = 'Mercury') {
    return arguments.length
  }

  
  expect(getName('Aaron')).toBe(1)
  expect(getName(null)).toBe(1)
  expect(getName()).toBe(0)
  
  
  expect(getName('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(null)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName()).toBe(/*ENTER YOUR GUESS HERE*/)
  
})

test('can trigger a function call', () => {
  let triggerCount = 0

  function getName(name = getDefault()) {
    return name
  }

  function getDefault() {
    triggerCount++
    return 'Mercury'
  }

  
  expect(triggerCount).toBe(0)
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName()).toBe('Mercury')
  expect(getName(undefined)).toBe('Mercury')
  expect(triggerCount).toBe(2)
  
  
  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName('Aaron')).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(getName(undefined)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(triggerCount).toBe(/*ENTER YOUR GUESS HERE*/)
  
})

test('catch non-specified params', () => {
  function resty(first, second, ...others) {
    return others
  }

  
  expect(resty().length).toBe(0)
  expect(resty(1).length).toBe(0)
  expect(resty(1, 2).length).toBe(0)
  expect(resty(1, 2, 3).length).toBe(1)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,
  ).toBe(8)

  
  
  expect(resty().length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3).length).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,
  ).toBe(/*ENTER YOUR GUESS HERE*/)
  
})

test('has a different length than `arguments`', () => {
  function resty(first, second, ...others) {
    return others.length === arguments.length
  }

  
  expect(resty()).toBe(true)
  expect(resty(1)).toBe(false)
  expect(resty(1, 2)).toBe(false)
  expect(resty(1, 2, 3)).toBe(false)
  expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(
    false,
  )
  
  
  expect(resty()).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(resty(1, 2, 3)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toBe(/*ENTER YOUR GUESS HERE*/)
  
})

test('is an actual array, unlike arguments', () => {
  function resty(...args) {
    return args
  }

  function argy() {
    return arguments
  }

  const args = argy(1, 2, 3)
  const rests = resty(1, 2, 3)

  
  expect(Object.getPrototypeOf(args) === Object.getPrototypeOf(rests)).toBe(
    false,
  )
  expect(args.splice).toBe(undefined)
  expect(Object.getPrototypeOf(rests)).toBe(Array.prototype)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
  
  
  expect(
    Object.getPrototypeOf(args) === Object.getPrototypeOf(rests),
  ).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(args.splice).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(Object.getPrototypeOf(rests)).toBe(/*ENTER YOUR GUESS HERE*/)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(Array.prototype.splice)
  
})

test('it can default all arguments, optionally', () => {
  
  
  
  

  
  function myFunction({name = 'Aaron', age = 35, favoriteBand = 'Queen'} = {}) {
    
    
  }
  
  
  function myFunction({name, age, favoriteBand}) {
    
    expect(name).toBeDefined()
    expect(age).toBeDefined()
    expect(favoriteBand).toBeDefined()
  }

  myFunction({name: 'Axel', age: 37, favoriteBand: 'Taylor Swift'})
  myFunction({name: 'Axel', age: 37})
  myFunction({name: 'Axel'})
  myFunction({})
  myFunction()
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})








/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
