
/* eslint no-unreachable:0 */






test(`should resolve`, () => {
  return pickApple('ripe')
    .then(
      result => {
        
        expect(result).toBe('ripe apple')
        
        
        
        
        throw new Error('assert or throw here')
        
      },
      error => {
        
        throw new Error('this should not run')
        
        
        
        
        throw new Error('assert or throw here')
        
      },
    )
    .catch(error => {
      
      throw new Error('this should not run')
      
      
      
      
      throw new Error('assert or throw here')
      
    })
})

test(`should reject`, () => {
  return pickApple('unripe')
    .then(
      result => {
        
        throw new Error('this should not run')
        
        
        
        
        throw new Error('assert or throw here')
        
      },
      error => {
        
        expect(error).toBe('unripe apple')
        
        
        
        
        throw new Error('assert or throw here')
        
      },
    )
    .catch(error => {
      
      throw new Error('this should not run')
      
      
      
      
      throw new Error('assert or throw here')
      
    })
})

test(`errors can be caught`, () => {
  return pickApple()
    .then(result => {
      
      throw new Error('this should not run')
      
      
      
      
      throw new Error('assert or throw here')
      
    })
    .catch(error => {
      
      expect(error.message).toBe('out of apples')
      
      
      
      
      throw new Error('assert or throw here')
      
    })
})

function pickApple(ripeness) {
  
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (ripeness === 'ripe') {
        resolve('ripe apple')
      } else if (ripeness === 'unripe') {
        reject('unripe apple')
      } else {
        reject(new Error('out of apples'))
      }
    })
  })
}



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







