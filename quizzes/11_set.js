function basicSet() {
  
  const set = new Set()
  set.add(1)
  set.add(2)
  set.add(1)
  return set
}


function unique() {
  
  const obj = {a: 45, b: 50}
  const s = new Set()
  s.add(obj)
  s.add({a: 45, b: 50})
  return s
}


function initializeSet() {
  const arr = [1, 5, 7, 2, 9, 4]
  
  
  const set = new Set()
  return set
}


function setInfo() {
  const obj = {a: 42}
  const set = new Set([1, 2, obj, 3, 4])
  
  
  return {
    
    size: set.length,
    hasObj: set.indexOf(obj) !== -1,
    hasFive: set.indexOf(5) !== -1,
    thirdItem: set[2],
  }
}


function removeDuplicates() {
  
  
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  
  
  const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index)

  return uniqueArr
}


function iterateSets() {
  const set = new Set([1, 2, 3, 4])
  for (const item of set) {
    console.log(item)
  }
}


function spreadSets() {
  
  const set = new Set([1, 2, 3, 4])
  const array = [...set]
  return array
}


function restSet() {
  
  const set = new Set([1, 2, 3, 4])
  const [first, second, ...rest] = set
  return rest
}





function initializeSetSOLUTION() {
  const arr = [1, 5, 7, 2, 9, 4]
  const t = new Set(arr)
  return t
}


function setInfoSOLUTION() {
  const obj = {a: 42}
  const set = new Set([1, 2, obj, 3, 4])
  const [, , thirdItem] = set
  return {
    size: set.size,
    hasObj: set.has(obj),
    hasFive: set.has(5),
    thirdItem,
  }
}


function removeDuplicatesSOLUTION() {
  
  
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  
  
  const set = new Set(arr)
  const uniqueArr = Array.from(set)
  return uniqueArr
}

