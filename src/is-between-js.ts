// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export class Between {
  valueNumber: number = 0
  minNumber: number = 0
  maxNumber: number = 0

  private toFloat(input: number) {
    return parseFloat(input.toString())
  }

  value(val: number): Between {
    this.valueNumber = this.toFloat(val)
    return this
  }
  min(val: number): Between {
    this.minNumber = this.toFloat(val)
    return this
  }
  max(val: number): Between {
    this.maxNumber = this.toFloat(val)
    return this
  }

  private isEqual() {
    return this.valueNumber === this.minNumber || this.minNumber === this.maxNumber
  }

  private isRange(): boolean {
    return this.valueNumber > this.minNumber && this.valueNumber < this.maxNumber
  }

  public calculate(): boolean {
    if (isNaN(this.valueNumber) || isNaN(this.minNumber) || isNaN(this.maxNumber)) {
      throw new Error('isBetween() expects numerical input.')
    }

    if (this.minNumber > this.maxNumber) {
      throw new Error('Not a valid range: ' + this.maxNumber + ' < ' + this.minNumber + '.')
    }

    return this.isEqual() || this.isRange()
  }
  public calc(): boolean {
    return this.calculate()
  }
}

export function between(value: number) {
  const func = new Between()
  return func.value(value)
}
