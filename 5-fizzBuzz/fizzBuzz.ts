// fizzBuzz function here ...
export function fizzBuzz(a: number) {
  if (5 % a === 0) {
    return 'Buzz'
  } else if (3 % a === 0) {
    return 'Fizz'
  } else if (15 % a === 0) {
    return 'FizzBuzz'
  } else {
    return a.toString()
  }
}
