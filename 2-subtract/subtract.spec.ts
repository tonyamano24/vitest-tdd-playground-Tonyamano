import { expect, test } from 'vitest'
import { subtract } from './subtract'

test('should get 2 when pass 3 and 1 to subtract', () => {
  expect(subtract(3, 1)).toEqual(2)
})
