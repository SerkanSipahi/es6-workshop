test('creating symbols', () => {
  const symbol = 'I wanna be a symbol one day'
  expect(typeof symbol).toBe('symbol')
})

test('giving a symbol a description', () => {
  const symbol = Symbol() 
  expect(String(symbol)).toBe('Symbol(use the force)')
})

test('symbols are unique', () => {
  const s1 = Symbol()
  const s2 = Symbol()
  expect(s1 === s2).toBe(/* enter your guess here */)

  const s3 = Symbol('I am a symbol')
  const s4 = Symbol('I am a symbol')
  expect(s3 === s4).toBe(/* enter your guess here */)
})

test('symbols on objects', () => {
  const symbol = Symbol('metadata')
  
  

  expect(JSON.parse(JSON.stringify(game))).toEqual({
    name: 'The Legend of Zelda',
    releaseDate: 'February 21, 1986',
  })
  expect(game[symbol]).toEqual({
    fans: 'about a billion',
  })
})


/*
http:
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false 
  expect(true).toBe(submitted)
})







