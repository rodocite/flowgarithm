// @flow

export default (numbers: number[]): number => {
  const sortedNumbers = numbers.sort((a, b) => a > b ? 1 : -1)
  const { length } = numbers

  return Math.max(
    sortedNumbers[0] * sortedNumbers[1] * sortedNumbers[length -1],
    sortedNumbers[length - 1] * sortedNumbers[length - 2] * sortedNumbers[length - 3]
  )
}