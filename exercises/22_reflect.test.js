test('Reflect.apply can be used to call a function', () => {
  const person = {
    name: 'Fred',
    sayHi(greeting, noun) {
      return `${greeting} ${noun}! My name is ${this.name}`
    },
  }

  const result = null 
  expect(result).toBe('Hey there Jaimee! My name is Fred')
})

test('Reflect.deleteProperty can be used instead of the `delete` keyword', () => {
  const person = {name: 'Joan', age: 56}
  Reflect.defineProperty(person, 'protected', {
    configurable: false,
    value: 'YOU CANNOT GET RID OF ME!',
  })
  
  const ageDeleted = delete person.age
  const protectedDeleted = delete person.protected
  expect(person.age).not.toBeDefined()
  expect(ageDeleted).toBe(true)
  expect(person.protected).toBe('YOU CANNOT GET RID OF ME!')
  expect(protectedDeleted).toBe(false)
})

test(`Reflect.ownKeys returns the object's own (not inherited) keys (including symbols)`, () => {
  const exists = Symbol('existance')
  const person = {human: true, [exists]: true}
  const favoriteFeature = Symbol('Fav Feat')
  const kyle = {
    __proto__: person,
    awesome: true,
    [favoriteFeature]: 'destructuring',
  }
  Reflect.defineProperty(kyle, 'favoriteLanguage', {
    value: 'JS',
    configurable: false,
    enumerable: false,
  })
  
  
  
  expect(Object.keys(kyle)).toEqual([
    /* ENTER YOUR GUESS */
  ])
  expect(Object.getOwnPropertyNames(kyle)).toEqual([
    /* ENTER YOUR GUESS */
  ])
  expect(Object.getOwnPropertySymbols(kyle)).toEqual([
    /* ENTER YOUR GUESS */
  ])
  expect(Reflect.ownKeys(kyle)).toEqual([
    /* ENTER YOUR GUESS */
  ])
})


/*
http:
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false 
  expect(true).toBe(submitted)
})







