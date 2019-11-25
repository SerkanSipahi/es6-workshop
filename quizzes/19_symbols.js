import log from './pretty-log'

function createSymbol() {
  const mySymbol = new Symbol()
  return mySymbol
}


function symbolDescription() {
  
  
  const mySymbol = Symbol()
  return mySymbol
}


function getSymbolsFromObject() {
  
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
  
  
  const mySymbol = Symbol('My description')
  return mySymbol
}


function getSymbolsFromObjectSOLUTION() {
  
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
