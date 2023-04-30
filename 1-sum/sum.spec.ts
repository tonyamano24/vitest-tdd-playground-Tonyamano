import { expect, test } from 'vitest'
import { sum } from './sum'

//อยากให้รันเฉพาะ function นี้ ให้ใส่ only
test.only('should get 2 when pass 1 and 1 to sum', () => {
  expect(sum(1, 1)).toEqual(2)
})
