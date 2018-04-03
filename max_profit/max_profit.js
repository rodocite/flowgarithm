// @flow

export default (prices: number[]): number => {
  let result: number = 0
  let currentLowest: number = prices[0]

  for(var i = 1; i < prices.length; i++) {
    result = Math.max(result, prices[i] - currentLowest)
    currentLowest = Math.min(currentLowest, prices[i])
  }

  return result
}