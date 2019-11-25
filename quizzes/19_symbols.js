import log from './pretty-log'

function createSymbol() {
  const mySymbol = new Symbol()
  return mySymbol
}


function symbolDescription() {
  // how would we give this symbol an identifier
  // for debugging purposes?
  const mySymbol = Symbol()
  return mySymbol
}


function getSymbolsFromObject() {
  // what will this return?
  const secret = Symbol('not so secret')
  const object = {
    noSecrets: 'I have nothing to hide',
    [secret]: 'can you find me?',
  }
  return Object.keys(object)
}







function createSymbolSOLUTION() {
  const mySymbol = Symbol()
  return mySymbol
}


function symbolDescriptionSOLUTION() {
  // how would we give this symbol an identifier
  // for debugging purposes?
  const mySymbol = Symbol('My description')
  return mySymbol
}


function getSymbolsFromObjectSOLUTION() {
  // what will this return?
  const secret = Symbol('not so secret')
  const object = {
    noSecrets: 'I have nothing to hide',
    [secret]: 'can you find me?',
  }
  return Object.getOwnPropertySymbols(object)
}


/*
eslint
no-new-symbol:0
symbol-description:0
 */
