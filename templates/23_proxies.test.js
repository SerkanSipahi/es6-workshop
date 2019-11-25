
function getCharacter() {
  return {
    _id: '9RKDLS02580GHCXNZLA0',
    password: 'isolemnlysweariamuptonogood',
    name: {first: 'Ron', last: 'Weasly'},
    classes: [
      {name: 'Divination', teacher: 'Sybill Trelawney'},
      {name: 'Defence Against the Dark Arts', teacher: 'Dolores Umbridge'},
    ],
    greet(greeting = 'Hi') {
      const {first, last} = this.name
      return `${greeting}! My name is ${first} ${last} and my ID is ${
        this._id
      } and my password is ${this.password}!`
    },
    getTeachers() {
      return this.classes.map(({teacher}) => teacher)
    },
  }
}

test('can wrap an existing object', () => {
  const character = getCharacter()
  
  const handler = {}
  const proxy = new Proxy(character, handler)
  
  
  const proxy = character
  
  expect(proxy).not.toBe(character) 
  expect(proxy).toEqual(character) 
})

test('handler can intercept gets, sets, and deletes', () => {
  const character = getCharacter()

  
  const handler = {
    get(target, name) {
      return name.split('.').reduce(Reflect.get, target)
    },
    set(target, name, value) {
      const splitNames = name.split('.')
      const lastIndex = splitNames.length - 1
      const finalTarget = splitNames
        .filter((item, index) => index < lastIndex)
        .reduce(Reflect.get, target)
      return Reflect.set(finalTarget, splitNames[lastIndex], value)
    },
    deleteProperty(target, name) {
      if (name.startsWith('_')) {
        return true 
      }
      return Reflect.deleteProperty(target, name)
    },
  }
  
  
  const handler = {}
  
  const proxy = new Proxy(character, handler)

  
  proxy['classes.1.teacher'] = 'Severus Snape' 
  proxy.awesome = 10 
  delete proxy._id 

  
  expect(proxy['classes.1.teacher']).toBe('Severus Snape') 
  expect(proxy.awesome).toBe(10) 
  expect(proxy._id).toEqual('9RKDLS02580GHCXNZLA0') 

  
  delete proxy.awesome 
  expect(proxy.awesome).toBe(undefined) 
})



test.skip('can intercept function calls', () => {
  const character = getCharacter()

  
  const handler = {
    apply(target, thisArg, argumentsList) {
      const result = Reflect.apply(target, thisArg, argumentsList)
      if (typeof result === 'string') {
        return result.replace(
          new RegExp(`(${thisArg._id})|(${thisArg.password})`, 'g'),
          'HIDDEN',
        )
      }
      return result
    },
  }
  
  
  const handler = {}
  
  
  character.greet = new Proxy(character.greet, handler)
  character.getTeachers = new Proxy(character.getTeachers, handler)
  const result = character.greet('Hey there')
  expect(result).not.toContain(character.password)
  expect(result).not.toContain(character._id)
  expect(character.getTeachers()).toEqual([
    'Sybill Trelawney',
    'Dolores Umbridge',
  ])
})

test.skip('can be used to do some fancy stuff with arrays', () => {
  const characters = [
    'Harry Potter',
    'Ron Weasly',
    'Hermione Granger',
    'Nevel Longbottom',
    'Lavender Brown',
    'Scabbers',
    'Pigwidgeon',
  ]

  
  const handler = {
    get(target, name) {
      console.log({target, name})
      if (name in target) {
        return Reflect.get(target, name)
      } else {
        const index = Number(name)
        return Reflect.get(target, target.length + index)
      }
    },
  }
  
  
  const handler = {}
  
  const proxy = new Proxy(characters, handler)
  expect(proxy[0]).toBe('Harry Potter')
  expect(proxy[-1]).toBe('Pigwidgeon')
  expect(proxy[-4]).toBe('Nevel Longbottom')
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







