import log from './pretty-log'

function arrayIncludes() {
  // refactor to `includes`
  const array = [1, 2, 3]
  return {
    includes2: array.indexOf(2) !== -1,
    includes4: array.indexOf(4) !== -1,
  }
}


function exponentiationOperator() {
  // refactor to the exponentiation operator
  return Math.pow(3, 4)
}










function arrayIncludesSOLUTION() {
  const array = [1, 2, 3]
  return {
    includes2: array.includes(2),
    includes4: array.includes(4),
  }
}


function exponentiationOperatorSOLUTION() {
  // refactor to the exponentiation operator
  return 3 ** 4
}

