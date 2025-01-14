import log from './pretty-log'

function basicDefaultParam() {
  return [randGen(), randGen(4), randGen(0)]
  function randGen(n) {
    
    n = n || 10

    return Math.floor(n * Math.random())
  }
}


function defaultParamsAsExpressions() {
  return getCandy('twix', 'king')

  function getCandy(kind, size, upperKind, callback) {
    requiredParam('kind', kind)
    requiredParam('size', size)
    upperKind = upperKind === undefined ? kind.toUpperCase() : upperKind
    callback = callback === undefined ? function noop() {} : callback

    const result = {kind, size, upperKind}
    callback(result)
    return result
  }

  function requiredParam(argName, arg) {
    if (arg === undefined) {
      throw new Error(`${argName} is required`)
    }
  }
}


function restParams() {
  const availableCities = [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
  return weatherOnDemand(availableCities, 'Bali', 'London')

  function weatherOnDemand() {
    
    
    const allArgs = Array.prototype.slice.call(arguments)
    const weatherArray = allArgs[0]
    const cities = allArgs.slice(1)

    return weatherArray.filter(cityData => {
      return cities.indexOf(cityData.city) !== -1
    })
  }
}


function destructureWithDefaultParams() {
  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
  
  
  
  
  
  function computeCircleArea(obj = {}) {
    /* Uncomment this to test what you are actually passing to the function*/
    

    
    
    const radius = obj.r || 1.0
    const xCoordinate = obj.x || 0.0
    const yCoordinate = obj.y || 0.0

    const area = Math.PI * radius * radius

    return `Circle at (${xCoordinate}, ${yCoordinate}), with radius ${radius}, has area = ${area.toFixed(
      2,
    )}`
  }
}



/*







SOLUTIONS ARE BELOW









 */

function basicDefaultParamSOLUTION() {
  return [randGen(), randGen(4), randGen(0)]
  function randGen(n = 10) {
    return Math.floor(n * Math.random())
  }
}


function defaultParamsAsExpressionsSOLUTION() {
  return getCandy('twix', 'king')

  function getCandy(
    kind = requiredParam('kind'),
    size = requiredParam('size'),
    upperKind = kind.toUpperCase(),
    callback = function noop() {},
  ) {
    const result = {kind, size, upperKind}
    callback(result)
    return result
  }

  function requiredParam(argName) {
    throw new Error(`${argName} is required`)
  }
}


function restParamsSOLUTION() {
  const availableCities = [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
  return weatherOnDemand(availableCities, 'Bali', 'London')

  function weatherOnDemand(weatherArray, ...cities) {
    return weatherArray.filter(cityData => {
      return cities.indexOf(cityData.city) !== -1
    })
  }
}


function destructureWithDefaultParamsSOLUTION() {
  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
  function computeCircleArea({r = 1.0, x = 0.0, y = 0.0} = {}) {
    const area = Math.PI * r * r
    return `Circle at (${x}, ${y}), with radius ${r}, has area = ${area.toFixed(
      2,
    )}`
  }
}



/* eslint prefer-rest-params:0 */
