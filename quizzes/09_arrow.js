import log from './pretty-log'

function multiArgument() {
  
  const divide = function(a, b) {
    return a / b
  }
  return divide(40, 10)
}


function noArgument() {
  
  const getFive = function() {
    return 5
  }
  return getFive()
}


function singleArgument() {
  
  const identity = function(i) {
    return i
  }
  return identity(350)
}


function spreadWithArrow() {
  
  const asArray = function(...args) {
    return args
  }
  return asArray(1, 2, 3, 4)
}


function withStatements() {
  
  const tryInvoke = function(obj, fn, ...args) {
    try {
      return obj[fn](...args)
    } catch (e) {
      return undefined
    }
  }
  return tryInvoke(Math, 'pow', 2, 3)
}


function withObject() {
  
  const getObject = function(favoriteCandy) {
    return {favoriteCandy}
  }
  return getObject('twix')
}


function withMultiLineExpression() {
  const getString = function(name) {
    return `
        Hello there ${name}
        How are you doing today?
      `
  }
  return getString('Ryan')
}


function curryAdd() {
  
  return curryAddition(9)(3)(5)

  function curryAddition(a) {
    return function(b) {
      return function(c) {
        return a + b + c
      }
    }
  }
}


function context() {
  const population = {
    unit: 'Million',
    data: [
      {city: 'Tokyo', value: 37.833},
      {city: 'Sanghai', value: 22.991},
      {city: 'New Delhi', value: 24.953},
    ],
    display() {
      
      return this.data.map(function populationStringMapper(element) {
        return `Population in ${element.city} is ${element.value} ${this.unit}`
      }, this) 
    },
  }
  return population.display()
}


function noBind() {
  
  const user = {
    id: 42,
    getIdGetter() {
      return () => this.id
    },
  }
  const idGetter = user.getIdGetter()
  const idGetter24 = idGetter.bind({id: 24})
  return idGetter24()
}


/*







SOLUTIONS ARE BELOW









 */

function multiArgumentSOLUTION() {
  const divide = (a, b) => a / b
  return divide(40, 10)
}


function noArgumentSOLUTION() {
  const getFive = () => 5
  return getFive()
}


function singleArgumentSOLUTION() {
  const identity = i => i
  return identity(350)
}


function spreadWithArrowSOLUTION() {
  
  const asArray = (...args) => args
  return asArray(1, 2, 3, 4)
}


function withStatementsSOLUTION() {
  const tryInvoke = (obj, fn, ...args) => {
    try {
      return obj[fn](...args)
    } catch (e) {
      return undefined
    }
  }
  return tryInvoke(Math, 'pow', 2, 3)
}


function withObjectSOLUTION() {
  
  const getObject = favoriteCandy => ({favoriteCandy})
  return getObject('twix')
}


function withMultiLineExpressionSOLUTION() {
  const getString = name =>
    `
      Hello there ${name}
      How are you doing today?
    `
  return getString('Ryan')
}


function curryAddSOLUTION() {
  const curryAddition = a => b => c => a + b + c
  return curryAddition(9)(3)(5)
}


function contextSOLUTION() {
  const population = {
    unit: 'Million',
    data: [
      {city: 'Tokyo', value: 37.833},
      {city: 'Sanghai', value: 22.991},
      {city: 'New Delhi', value: 24.953},
    ],
    display() {
      return this.data.map(
        element =>
          `Population in ${element.city} is ${element.value} ${this.unit}`,
      )
    },
  }
  return population.display()
}


/* eslint func-names:0, func-style:0 */
