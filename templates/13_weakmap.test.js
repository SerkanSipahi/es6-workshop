test('has a set method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  
  const myMap = new WeakMap()
  myMap.set(key, value)
  
  
  
  
  
  expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
  
  /* eslint no-unreachable:0 */
  
  
  const privateData = new WeakMap()
  
  
  
  
  class Person {
    constructor(name, age) {
      
      privateData.set(this, {name, age})
      
      
      this._name = name
      this._age = age
      
    }

    getName() {
      
      return privateData.get(this).name
      
      
      return this._name
      
    }

    getAge() {
      
      return privateData.get(this).age
      
      
      return this._age
      
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







