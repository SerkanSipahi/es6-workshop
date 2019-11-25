test('has an add method and a has method', () => {
  // FINAL_START
  const mySet = new Set()
  mySet.add(1)
  mySet.add(2)
  mySet.add(3)
  // FINAL_END
  // WORKSHOP_START
  // Create a new Set called 'mySet'
  // add the numbers 1, 2, and 3 to the set
  // WORKSHOP_END

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(true)
  expect(mySet.has(3)).toBe(true)
  expect(mySet.has(4)).toBe(false)
})

test('doesn`t allow duplicates', () => {
  // FINAL_START
  const mySet = new Set()
  mySet.add(1)
  mySet.add(1)
  mySet.add(1)
  // FINAL_END
  // WORKSHOP_START
  // Create a new Set
  // add the following numbers to it, using set.add(num): 1, 1, 1
  // WORKSHOP_END

  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(false)
  expect(mySet.has(3)).toBe(false)
  expect(mySet.has(4)).toBe(false)
})



/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Sets&em=
*/

test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})







