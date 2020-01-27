// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default function isBetween(value: number, min: number, max: number): Boolean {
  const valueNumber = parseFloat(value.toString())
  const minNumber = parseFloat(min.toString())
  const maxNumber = parseFloat(max.toString())

  const equal = valueNumber === minNumber || minNumber === maxNumber

  if (isNaN(valueNumber) || isNaN(minNumber) || isNaN(maxNumber)) {
    throw new Error('isBetween() expects numerical input.')
  }

  if (minNumber > maxNumber) {
    throw new Error('Not a valid range: ' + maxNumber + ' < ' + minNumber + '.')
  }

  const inRange = valueNumber > minNumber && valueNumber < maxNumber
  return equal || inRange
}

function isFalsy(input: any): Boolean {
  return input === null || input === undefined || input.length === 0
}
function isTruthy(input: any): Boolean {
  return input !== null || input !== undefined || input.length !== 0
}
