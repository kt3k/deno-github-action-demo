import { test } from 'https://deno.land/std/testing/mod.ts'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { fizzbuzz } from './mod.ts'

test('fizzbuzz', () => {
  assertEquals(fizzbuzz(1), '1')
  assertEquals(fizzbuzz(2), '2')
  assertEquals(fizzbuzz(3), 'Fizz')
  assertEquals(fizzbuzz(4), '4')
  assertEquals(fizzbuzz(5), 'Buzz')
  assertEquals(fizzbuzz(6), 'Fizz')
  assertEquals(fizzbuzz(7), '7')
  assertEquals(fizzbuzz(8), '8')
  assertEquals(fizzbuzz(9), 'Fizz')
  assertEquals(fizzbuzz(10), 'Buzz')
  assertEquals(fizzbuzz(11), '11')
  assertEquals(fizzbuzz(12), 'Fizz')
  assertEquals(fizzbuzz(13), '13')
  assertEquals(fizzbuzz(14), '14')
  assertEquals(fizzbuzz(15), 'FizzBuzz')
  assertEquals(fizzbuzz(16), '16')
  // ...
  assertEquals(fizzbuzz(98), '98')
  assertEquals(fizzbuzz(99), 'Fizz')
  assertEquals(fizzbuzz(100), 'Buzz')
})
