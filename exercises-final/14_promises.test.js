test(`should resolve`, () => {
  return pickApple('ripe')
    .then(
      result => {
        expect(result).toBe('ripe apple')
      },
      error => {
        throw new Error('this should not run')
      },
    )
    .catch(error => {
      throw new Error('this should not run')
    })
})

test(`should reject`, () => {
  return pickApple('unripe')
    .then(
      result => {
        throw new Error('this should not run')
      },
      error => {
        expect(error).toBe('unripe apple')
      },
    )
    .catch(error => {
      throw new Error('this should not run')
    })
})

test(`errors can be caught`, () => {
  return pickApple()
    .then(result => {
      throw new Error('this should not run')
    })
    .catch(error => {
      expect(error.message).toBe('out of apples')
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


test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})







