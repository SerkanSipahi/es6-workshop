test('should support string interpolation', () => {
  const person = {
    name: 'Kent C. Dodds',
    friends: [
      'Brooke Dodds',
      'Matt Zabriskie',
      'Aaron Frost',
      'Dave Geddes',
      'Joe Eames',
      'Ryan Florence',
    ],
  }
  
  const personsFriends = `${person.name} has ${
    person.friends.length
  } friends: ${person.friends.join(', ')}`
  
  
  
  const personsFriends = ``
  
  expect(personsFriends).toBe(
    'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence',
  )
})

test(`should support multi-line strings`, () => {
  
  const multiLine = `
    How cool
    is this!?
  `
  
  
  
  const multiLine = ``
  
  expect(multiLine).toBe('\n    How cool\n    is this!?\n  ')
})

test(`should support string escaping`, () => {
  
  expect(`Hi\nthere!`).toBe('Hi\nthere!')
  expect(`This is \`escaped\` backticks`).toBe('This is `escaped` backticks')
  
  
  
  expect(``).toBe('Hi\nthere!')
  expect(``).toBe('This is `escaped` backticks')
  
})




test.skip(`should call the tagging function`, () => {
  const noun = 'World'
  const emotion = 'happy'
  const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
  expect(result).toBe(
    'Hello super-cool World! Are you feeling really happy today?',
  )

  function tagIt(literalString, ...interpolatedParts) {
    
    const firstPart = `${literalString[0]}super-cool ${interpolatedParts[0]}`
    const lastPart = `${literalString[1]}really ${interpolatedParts[1]}${
      literalString[2]
    }`
    return `${firstPart}${lastPart}`
    
    
    /* eslint no-unreachable:0 */
    
    
    
    return 'fixme'
    
  }
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







