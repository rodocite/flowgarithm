// @flow

export default (numbers: number[]): number[] => {
  let result: number[] = []
  let currentProduct = 1

  for(var i = 0; i < numbers.length; i++) {
    result = result.concat(currentProduct)
    currentProduct = currentProduct * numbers[i]
  }

  currentProduct = 1
  for(var j = numbers.length - 1; j >= 0; j--) {
    result[j] = result[j] * currentProduct
    currentProduct = currentProduct * numbers[j]
  }

  return result
}