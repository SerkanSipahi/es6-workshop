test(`should yield objects with value and done properties`, () => {
  const odds = giveMeOneOddNumber()

  expect(typeof odds).toBe('object')
  expect(odds.next).toBeDefined()
  expect(odds.next().value).toBe(1)
  expect(odds.next().value).toBe(3)
  expect(odds.next().done).toBe(false)
  odds.next()
  expect(odds.next().value).toBe(9)
  expect(odds.next().done).toBe(true)

  function* giveMeOneOddNumber() {
    yield 1
    yield 3
    yield 5
    yield 7
    yield 9
  }
})

test(`can be iterated over`, () => {
  function* giveMeOneEvenNumber() {
    yield 2
    yield 4
    yield 6
    yield 8
  }

  let sum = 0

  
  
  for (let even of giveMeOneEvenNumber()) {
    sum = sum + even
  }

  expect(sum).toBe(20)
})


test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})







