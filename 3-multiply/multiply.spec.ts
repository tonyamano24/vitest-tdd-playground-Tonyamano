import { expect, test } from 'vitest'
import { multiply } from './multiply'

test('should get 2 when pass 3 and 1 to multiply', () => {
  expect(multiply(2, 3)).toEqual(6)
})

test('should get 30 when pass 3 and 10 to multiply', () => {
  expect(multiply(3, 10)).toEqual(30)
})
