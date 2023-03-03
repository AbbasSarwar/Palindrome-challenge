const palindrome = require('./palindrome-checker')
const assert = require('assert')

describe('Tests', function () {
  it('palindrome("eye") should return a boolean.', function () {
    assert(typeof palindrome('eye') === 'boolean')
  })
  it('palindrome("eye") should return true.', function () {
    assert(palindrome('eye') === true)
  })
  it('palindrome("_eye") should return true.', function () {
    assert(palindrome('_eye') === true)
  })
  it('palindrome("race car") should return true.', function () {
    assert(palindrome('race car') === true)
  })
  it('palindrome("not a palindrome") should return false.', function () {
    assert(palindrome('not a palindrome') === false)
  })
  it('palindrome("A man, a plan, a canal. Panama") should return true.', function () {
    assert(palindrome('A man, a plan, a canal. Panama') === true)
  })
  it('palindrome("never odd or even") should return true.', function () {
    assert(palindrome('never odd or even') === true)
  })
  it('palindrome("nope") should return false.', function () {
    assert(palindrome('nope') === false)
  })
  it('palindrome("almostomla") should return false.', function () {
    assert(palindrome('almostomla') === false)
  })
  it('palindrome("My age is 0, 0 si ega ym.") should return true.', function () {
    assert(palindrome('My age is 0, 0 si ega ym.') === true)
  })
  it('palindrome("1 eye for of 1 eye.") should return false.', function () {
    assert(palindrome('1 eye for of 1 eye.') === false)
  })
  it('palindrome("0_0 (: /-\ :) 0-0") should return true.', function () {
    assert(palindrome('0_0 (: /- :) 0-0') === true)
  })
  it('palindrome("five|\_/|four") should return false.', function () {
    assert(palindrome('five|_/|four') === false)
  })
})
