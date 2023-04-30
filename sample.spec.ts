// should return `Hello world`

import { expect, it } from 'vitest'
import { hello } from './sample'

it('should return', () => {
  expect(hello('world')).toEqual('Hello world!')
})

it('sawadee return Ton', () => {
  expect(hello('Ton')).toEqual('Hello Ton!')
})

it('should return vitest', () => {
  expect(hello('Sunday')).toEqual('Hello Sunday!')
})
