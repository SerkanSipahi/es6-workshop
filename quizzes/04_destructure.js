import log from './pretty-log'

function getAverage() {
  
  const obj = {x: 3.6, y: 7.8, z: 4.3}
  return Math.floor((obj.x + obj.y + obj.z) / 3.0)
}


function getAvgTemp() {
  
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const maxToday = weather.today.max
  const minToday = weather.today.min

  const maxTomorrow = weather.tomorrow.max
  const minTomorrow = weather.tomorrow.min

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: weather.unit,
  }
}


function getFirstTwo() {
  
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const firstItem = arr[0]
  const secondItem = arr[1]

  return {
    firstItem: firstItem,
    secondItem: secondItem,
  }
}


function getElements() {
  
  
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const first = arr[0]
  const second = arr[1]
  const fifth = arr[4]

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}


function getSecondItem() {
  
  const food = [
    ['carrots', 'beans', 'peas', 'lettuce'],
    ['apple', 'mango', 'orange'],
    ['cookies', 'cake', 'pizza', 'chocolate'],
  ]
  const firstItem = food[0][1]
  const secondItem = food[1][1]
  const thirdItem = food[2][1]

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  }
}


function nestedArrayAndObject() {
  
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  const title = info.title
  const protagonistName = info.protagonist.name
  const enemy = info.protagonist.enemies[3]
  const enemyTitle = enemy.title
  const enemyName = enemy.name
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}


function defaultValues() {
  const bench = {type: 'Piano', adjustable: false}
  const legCount = bench.legs === undefined ? getDefaultLegCount() : bench.legs
  return legCount

  function getDefaultLegCount() {
    return 4
  }
}


function ontoAnObject() {
  
  const array = [1, 2, 3, 4, 5, 6]
  const object = {}
  object.one = array[0]
  object.two = array[1]
  object.three = array[2]
  object.rest = array.slice(3)
  return object
}


/*







SOLUTIONS ARE BELOW









 */

function getAverageSOLUTION() {
  const obj = {x: 3.6, y: 7.8, z: 4.3}
  const {x, y, z} = obj
  return Math.floor((x + y + z) / 3.0)
}


function getAvgTempSOLUTION() {
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const {
    unit,
    today: {max: maxToday, min: minToday},
    tomorrow: {max: maxTomorrow, min: minTomorrow},
  } = weather

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  }
}


function getFirstTwoSOLUTION() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [first, second] = arr

  return {
    first: first,
    second: second,
  }
}


function getElementsSOLUTION() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [first, second, , , fifth] = arr

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}


function getSecondItemSOLUTION() {
  const food = [
    ['carrots', 'beans', 'peas', 'lettuce'],
    ['apple', 'mango', 'orange'],
    ['cookies', 'cake', 'pizza', 'chocolate'],
  ]
  const [[, firstItem], [, secondItem], [, thirdItem]] = food

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  }
}


function nestedArrayAndObjectSOLUTION() {
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [, , , {title: enemyTitle, name: enemyName}],
    },
  } = info
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}


function defaultValuesSOLUTION() {
  const bench = {type: 'Piano', adjustable: false}
  const {legs: legCount = getDefaultLegCount()} = bench
  return legCount

  function getDefaultLegCount() {
    return 4
  }
}


function ontoAnObjectSOLUTION() {
  const array = [1, 2, 3, 4, 5, 6]
  const object = {} 
  ;[object.one, object.two, object.three, ...object.rest] = array
  return object
}


/* eslint object-shorthand:0 */
