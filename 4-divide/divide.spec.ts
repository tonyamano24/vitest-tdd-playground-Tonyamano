import { expect, test } from 'vitest'
import { divide } from './divide'

test('should get 2 when pass 6 and 2 to divide', () => {
  expect(divide(6, 2)).equal(3)
})

test('should get 5 when pass 10 and 2 to divide', () => {
  expect(divide(10, 2)).equal(5)
})
