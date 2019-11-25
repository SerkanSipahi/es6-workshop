import * as Mathy from '../common/Mathy'
import * as IndexImport from '../common'


test('can import Mathy', () => {
  
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can specify what to import, to only retain pieces of the import', () => {
  
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  
  expect(_).toBeDefined()
})


/*
http:
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false 
  expect(true).toBe(submitted)
})



test.skip('Index import', () => {
  
  
  expect(IndexImport.variable1).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable2).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable3).toBe(/* ENTER YOUR GUESS HERE */)
  expect(IndexImport.variable4).toBe(/* ENTER YOUR GUESS HERE */)
})



