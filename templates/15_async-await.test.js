



test('should work with resolved promises', async () => {
  // FINAL_START
  const result = await doAsync()
  expect(result).toBe('resolved')
  // FINAL_END
  // WORKSHOP_START
  return doAsync().then(result => {
    expect(result).toBe('resolved')
    throw new Error(
      'convert this to an async/await function and remove this error',
    )
  })
  // WORKSHOP_END
})

test('should throw an error with a rejected promise', async () => {
  // FINAL_START
  try {
    await doAsync(true)
    throw new Error('this should not run')
  } catch (error) {
    expect(error).toBe('rejected')
  }
  // FINAL_END
  // WORKSHOP_START
  return doAsync(true).catch(error => {
    expect(error).toBe('rejected')
    throw new Error(
      'convert this to an async/await function and remove this error',
    )
  })
  // WORKSHOP_END
})

function doAsync(rejectPromise = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectPromise) {
        reject('rejected')
      } else {
        resolve('resolved')
      }
    })
  })
}



/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Async/Await&em=
*/

test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})







