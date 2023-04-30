import { expect, test } from 'vitest'
import { fizzBuzz } from './fizzBuzz'

// test('should get "Buzz" when pass 1', () => {
//   expect(fizzBuzz(1)).toEqual('Buzz')
// })

test('should get "20" when pass 20', () => {
  expect(fizzBuzz(20)).toEqual('20')
})
test('should get "Buzz" when pass 5', () => {
  expect(fizzBuzz(5)).toEqual('Buzz')
})
test('should get "Fizz" when pass 3', () => {
  expect(fizzBuzz(3)).toEqual('Fizz')
})
test('should get "FizzBuzz" when pass 15', () => {
  expect(fizzBuzz(15)).toEqual('FizzBuzz')
})
