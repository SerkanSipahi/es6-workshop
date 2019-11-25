import log from './pretty-log'

function basic() {
  
  let x = 100
  const y = 200
  return {x: x, y: y}
}


function immutable() {
  
  const object = {a: 'b'}
  const array = [1, 2, 3, 4]

  object.a = 'q'
  array.splice(1, 1)
  return {object: object, array: array}
}


function immutableReference() {
  
  const object = {a: 'b'}
  
  return object
}


function ifBlock() {
  
  if (3 > 1) {
    const x = 34
    let y = 43
  }
  return {x: x, y: y}
}


function block() {
  
  {
    
    const x = 42
    let y = 24
  }
  return {x: x, y: y}
}


function scoped() {
  
  let x = 33
  {
    const x = 123
  }
  return x
}


function veryScoped() {
  
  let x = 23
  {
    let x
    {
      x = 55
    }
    
  }
  return x
}


function temporalDeadZone() {
  console.log(myVar)
  console.log(myLet)
  console.log(myConst)

  var myVar = 'var'
  let myLet = 'let'
  const myConst = 'const'
  return {myVar: myVar, myLet: myLet, myConst: myConst}
}


function semiPractical() {
  
  const myThings = ['thing1', 'thing2', 'red fish', 'blue fish']
  const callbacks = []
  for (var i = 0; i < myThings.length; i++) {
    callbacks.push(function thingGetter() {
      return myThings[i]
    })
  }
  return callbacks.map(callback => callback())
}


/*







SOLUTIONS ARE BELOW









 */

function immutableReferenceSOLUTION() {
  
  let object = {a: 'b'}
  object = {a: 'q'}
  return object
}


function semiPracticalSOLUTION() {
  const myThings = ['thing1', 'thing2', 'red fish', 'blue fish']
  const callbacks = []
  for (let i = 0; i < myThings.length; i++) {
    callbacks.push(function thingGetter() {
      return myThings[i]
    })
  }
  return callbacks.map(callback => callback())
}


/*
  eslint
  prefer-const:0,
  no-undef:0,
  no-shadow:0,
  no-lone-blocks:0,
  object-shorthand:0,
  vars-on-top:0,
  no-var:0,
  no-loop-func:0,
  no-const-assign:0,
  no-use-before-define:0
*/
