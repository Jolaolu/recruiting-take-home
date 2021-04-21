/* eslint-disable */
import { PrefixWithOne, shouldIncludeHyphen } from './index'
import { numbers } from './numbers'

export function convertToWord (input) {
  let output = ''
  let prefixNum, remainder, closestSmallerNumber, closestSmallerNumberText

  input = parseInt(input, 10)

  // checks the list of numbers for the number or a number close to it.
  // input will be written in terms of this number.
  for (const { number, text } of numbers) {
    if (input === number) {
      if (PrefixWithOne(number)) {
        output += 'one '
      }
      output += text
      return output
    }

    if (input > number) {
      closestSmallerNumber = number
      closestSmallerNumberText = text
      break
    }
  }

  // How many 'closestSmallerNumber's can input be grouped into?
  // e.g. five 'thousand'.
  prefixNum = Math.floor(input / closestSmallerNumber)
  if (prefixNum !== 1 || PrefixWithOne(closestSmallerNumber)) {
    output += convertToWord(prefixNum) + ' '
  }

  output += closestSmallerNumberText

  remainder = input - prefixNum * closestSmallerNumber
  if (remainder > 0 && shouldIncludeHyphen(closestSmallerNumber)) {
    output += '-'
  } else if ((closestSmallerNumber >= 1000) && (remainder > 0) && (remainder < 100)) {
    output += ' ' + 'and '
  } else if ((closestSmallerNumber >= 1000) && (remainder > 0)) {
    output += ' '
  } else if ((closestSmallerNumber === 100) && (remainder > 0)) {
    output += ' ' + 'and '
  } else {
    output += ' '
  }

  if (remainder > 0) {
    output += convertToWord(remainder)
  }
  return output.trim()
};

export default convertToWord
