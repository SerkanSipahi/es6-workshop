import log from './pretty-log'

function interpolation() {
  
  
  
  const greeting = 'Hello'
  const noun = 'World'
  return greeting.toUpperCase() + ', ' + noun + '!'
}


function multiline() {
  
  return '\n' + '    this is on a new line\n' + '  '
}


function escaping() {
  
  return 'This is `code`\nand a new line'
}


function tagging() {
  const greeting = 'Hey'
  const noun = 'human'
  return tag`I would like to say: "${greeting}, ${noun}" to you!`

  function tag() {
    
    
    return arguments
  }
}


/*







SOLUTIONS ARE BELOW









 */

function interpolationSOLUTION() {
  
  
  
  const greeting = 'Hello'
  const noun = 'World'
  return `${greeting.toUpperCase()}, ${noun}!`
}


function multilineSOLUTION() {
  
  return `
    this is on a new line
  `
}


function escapingSOLUTION() {
  
  return `This is \`code\`\nand a new line`
}


/* eslint prefer-template:0, prefer-rest-params:0, no-useless-concat:0 */
