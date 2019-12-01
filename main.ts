import { fizzbuzz } from './mod.ts'

window.onload = () => {
  [...Array(100)].map((_, n) => {
    console.log(fizzbuzz(n + 1))
  })
}
