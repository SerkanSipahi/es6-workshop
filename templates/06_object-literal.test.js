test('can use shorthand for property names', () => {
  function createMonster(name, power) {
    
    return {
      type: 'Monster',
      name,
      power,
      attack(target) {
        return `${this.name} attacked ${target.name}`
      },
    }
    
    
    
    
    
    
    
    
    
    
    
    
  }

  const godzilla = createMonster('Godzilla', 1000)
  const mechaGodzilla = createMonster('MechaGodzilla', 5000)
  expect(godzilla.name).toBe('Godzilla')
  expect(godzilla.power).toBe(1000)
  expect(godzilla.attack(mechaGodzilla)).toBe('Godzilla attacked MechaGodzilla')
})

test('can use expressions as property names', () => {
  function createCandy(type, description) {
    return {
      tasty: true,
      type,
      
      
      
      
      
      [type.toUpperCase() + type.length]: description,
      
    }
  }

  const twixDescription =
    'Twix is a chocolate bar made by Mars, Inc., consisting of biscuit applied with other ' +
    'confectionery toppings and coatings. Twix bars are packaged in pairs, although smaller single bars are available.'
  const twixType = 'twix'
  const snickers = createCandy('twix', twixDescription)
  expect(snickers.tasty).toBe(true)
  expect(snickers.type).toBe(twixType)
  expect(snickers.TWIX4).toBe(twixDescription)
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







