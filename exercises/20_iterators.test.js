test('can get the iterator from an array', () => {
  const array = [1, 2, 3]
  
  const iterator = '?' 
  expect(typeof iterator.next === 'function').toBe(true)
})

test('can next() the iterator multiple times', () => {
  const string = 'hello' 
  const iterator = string[Symbol.iterator]()
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
  expect(iterator.next()).toEqual(/* ENTER YOUR ANSWER HERE */)
})

test('can iterate over an interable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  
  
  
  
  expect(sum).toBe(6)
})

test('can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  
  
  const [rest] = set
  expect(rest).toEqual([2, 3])
})

test('can create a custom iterator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    
    
    
    
    
    
  }

  expect(iteratorWorks()).toBe(true)

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }
})

test('can create a custom iterator with a generator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    
  }

  expect(iteratorWorks()).toBe(true)

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }
})


/*
http:
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false 
  expect(true).toBe(submitted)
})




test.skip('add custom iterator to built-in types', () => {
  
  const num = 5
  const result = [...num]
  expect(result).toEqual([0, 1, 2, 3, 4])
})




