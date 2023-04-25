import { expect, test } from 'vitest'
import { sum } from './sum'

test('should get 2 when sum with 1 and 1', () => {
  expect(sum(1, 1)).equal(2)
})

