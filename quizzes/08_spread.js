import log from './pretty-log'

function spreadFunctionCall() {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  const arr = [5, 6, 8, 4, 9]
  return Math.max.apply(null, arr)
}


function concatArrays() {
  // TODO: flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // use spread operator in place of Array.prototype.concat()
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)

  function flatter(arg) {
    return arg.reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc.concat(flatter(item))
      }
      return acc.concat([item])
    }, [])
  }
}


function mergeObjects() {
  // refactor to object spread
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  }
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  }
  return Object.assign({}, obj1, obj2)
}


function spreadString() {
  return join('--', 'PayPal')

  function join(delimiter, string) {
    return [...string].join(delimiter)
  }
}


function restString() {
  // what does this return?
  const greeting = 'Hello world'
  const [h, e, l, l2, o, space, ...splitGreeting] = greeting
  return splitGreeting
}





function spreadFunctionCallSOLUTION() {
  const arr = [5, 6, 8, 4, 9]
  return Math.max(...arr)
}


function concatArraysSOLUTION() {
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)

  function flatter(arg) {
    return arg.reduce((acc, item) => {
      return Array.isArray(item) ? [...acc, ...flatter(item)] : [...acc, item]
    }, [])
  }
}


function mergeObjectsSOLUTION() {
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  }
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  }
  return {
    ...obj1,
    ...obj2,
  }
}

