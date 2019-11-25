test('the exponentiation operation can be used to raise a number to a power of another number', () => {
  
  
  const result = Math.pow(3, 2)
  
  
  const result = 3 ** 2
  
  expect(result).toBe(9)
})

test('array.includes can be used to determine whether an item exists in an array', () => {
  const bestFriend = {name: 'Sindre Sorhus'}
  const greatFriends = [
    bestFriend,
    {name: 'Dustan Kasten'},
    {name: 'Sam Saccone'},
    {name: 'Ingvar Stepanyan'},
  ]
  
  
  const result = greatFriends.indexOf(bestFriend) !== -1
  
  
  const result = greatFriends.includes(bestFriend)
  
  expect(result).toBe(true)
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







