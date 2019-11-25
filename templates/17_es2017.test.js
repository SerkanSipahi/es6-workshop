test('String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  
  
  const result = originalString
  
  
  const result = originalString.padStart(17)
  
  expect(result).toBe('    Worlds Finest')
})

test('String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  
  
  
  
  const result = originalString.padEnd(27, '-123')
  
  expect(result).toBe('Stronger Together-123-123-1')
})

test('Object.values gets just the values of an object', () => {
  const show = {
    title: 'Supergirl',
    seasons: 1.2,
    characters: [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  }
  
  
  
  
  const result = Object.values(show)
  
  expect(result).toEqual([
    'Supergirl',
    1.2,
    [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  ])
})

test('Object.entries gives an array of arrays as [key, value]', () => {
  const show = {
    title: 'The Flash',
    seasons: 2.2,
    characters: [
      'The Flash',
      'Iris West',
      'Caitlin Snow',
      'Eddie Thawne', 
      'Cisco Ramon',
      'Harrison Wells',
      'Joe West',
    ],
  }
  
  
  
  
  const result = Object.entries(show)
  
  expect(result).toEqual([
    ['title', 'The Flash'],
    ['seasons', 2.2],
    [
      'characters',
      [
        'The Flash',
        'Iris West',
        'Caitlin Snow',
        'Eddie Thawne',
        'Cisco Ramon',
        'Harrison Wells',
        'Joe West',
      ],
    ],
  ])
})

test('Trailing commas in function parameter lists and calls help us with git', () => {
  
  
  expect(`
    function foo(
      a,
      b,
      
      c
      
      
      c,
      
    ) {
      log(a, b, c)
    }

    foo(
      1,
      2,
      
      3
      
      
      3,
      
    )

    function bar(
      a,
      b,
      
      ...rest,
      
      
      ...rest
      
    ) {
      log(a, b, ...rest)
    }
    bar(
      1, 2, 3,
      
      4, 5, 6
      
      
      4, 5, 6,
      
    )

    function log() {
      
    }
  `).toBeValidSyntax()
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})












