const noop = () => {}
test('can be used in place of `var`', () => {
  
  
  expect(bandName).toBe('Queen')
  expect(isBestBand).toBe(true)
})

test('can modify the value of a `let` variable even in the next block statement', () => {
  let releaseName = 'ES6'
  {
    releaseName = 'ES2015'
  }
  expect(releaseName).toBe(/* ENTER YOUR GUESS HERE */)
})

test('cannot modify the value of a `const` variable', () => {
  function getReleaseName() {
    
    
    const releaseName = 'ES6' 
    releaseName = 'ES2015' 
    return releaseName
  }
  expect(getReleaseName).not.toThrow()
})

test('is trapped inside of an `if` statement', () => {
  if (true) {
    
    var b = 1
  }
  expect(() => noop(b)).toThrow('b is not defined')
})

test(`can't redeclare using the same name`, () => {
  function doLoop() {
    
    for (var i = 0; i < 10; i++) {
      /* eslint no-empty:"off" */
    }
    return i
  }

  expect(doLoop).toThrow('i is not defined')
})

test('means that we can start using block statements', () => {
  
  {
    
    var d = 2
  }

  expect(() => noop('d', d)).toThrow('d is not defined')
})


/*
http:
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false 
  expect(true).toBe(submitted)
})




test.skip('means that we can declare constant with the same name in block statement', () => {
  
  
  {
    
    expect(d).toBe(10)
  }
  expect(d).toBe(5)
})





/* eslint no-constant-condition:0 */
