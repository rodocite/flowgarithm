import maxProfit from './max_profit'

test('maxProfit to equal 6', () => {
  const stockPricesYesterday = [10, 7, 5, 8, 11, 9]
  expect(maxProfit(stockPricesYesterday)).toBe(6)
})

test('maxProfit to equal 0', () => {
  const stockPricesYesterday = []
  expect(maxProfit(stockPricesYesterday)).toBe(0)
})

test('maxProfit to equal 0', () => {
  const stockPricesYesterday = [10, 7, 6, 5, 4, 3, 2]
  expect(maxProfit(stockPricesYesterday)).toBe(0)
})

test('maxProfit to equal 5', () => {
  const stockPricesYesterday = [10, 7, 12, 5]
  expect(maxProfit(stockPricesYesterday)).toBe(5)
})
