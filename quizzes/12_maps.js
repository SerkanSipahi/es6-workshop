function basicMap() {
  const map = new Map()
  
  
  
  return map
}


function initializeMap() {
  
  
  
  const map = new Map()
  return map
}


function uniquePair() {
  
  const map = new Map()
  const obj = {raspberriesGood: true}
  map.set(obj, {sortaGood: false})
  map.set({raspberriesGood: true}, {sortaGood: false})
  map.set(obj, {reallyGood: true})
  return map
}


function mapInfo() {
  const objKey = {awesome: true}
  const map = new Map([[objKey, 42]])
  
  return {
    objValue: map[objKey],
    mapSize: Object.keys(map).length,
    hasTrue: map.hasOwnProperty(true),
    has32: map.hasOwnProperty(32),
    keys: Object.keys(map),
    values: Object.keys(map).map(key => map[key]),
    entries: Object.keys(map).map(key => [key, map[key]]),
  }
}


function removingItems() {
  const objKey = {awesome: true}
  const map = new Map([[objKey, 42], [{}, 'hey'], [45, true]])
  const firstSize = map.size
  map.delete(objKey)
  const afterDeleteSize = map.size
  map.clear()
  const afterClearSize = map.size
  return {firstSize, afterDeleteSize, afterClearSize}
}


function iterateMaps() {
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
  ])
  for (const [key, value] of map) {
    console.log(key, value)
  }
}


function spreadMaps() {
  
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
  ])
  const array = [...map]
  return array
}


function restMap() {
  
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
  ])
  const [first, second, ...rest] = map
  return rest
}





function basicMapSOLUTION() {
  const map = new Map()
  map.set('a', 3)
  map.set({v: 5, j: 7}, 7)
  map.set(() => {}, 8)
  return map
}


function initializeMapSOLUTION() {
  const map = new Map([['a', 3], [{v: 5, j: 7}, 7], [() => {}, 8]])
  return map
}


function mapInfoSOLUTION() {
  const objKey = {awesome: true}
  const map = new Map([[objKey, 42], [4, 55], [true, false], [false, true]])
  return {
    objValue: map.get(objKey),
    mapSize: map.size,
    hasTrue: map.has(true),
    has32: map.has(32),
    keys: map.keys(),
    values: map.values(),
    entries: map.entries(),
  }
}

