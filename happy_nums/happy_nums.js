// @flow

export default (num: number): boolean => {
  const process = (digits: number) =>
    String(digits).split('')
      .reduce((acc: number, curr: string): number => {
        const digit: number = parseInt(curr)
        return acc + digit * digit
      }, 0)

  const record = {}
  let currentNumber: number = process(num)

  while (currentNumber !== 1 && !record[currentNumber]) {
    record[currentNumber] = true
    currentNumber = process(currentNumber)
  }

  return currentNumber === 1
}
