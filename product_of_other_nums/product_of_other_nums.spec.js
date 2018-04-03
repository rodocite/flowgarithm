import productOfOtherNums from './product_of_other_nums'

test('productOfOtherNums to equal [12, 8, 6]', () => {
  const integers = [2, 3, 4]
  expect(productOfOtherNums(integers)).toEqual([12, 8, 6])
})

test('productOfOtherNums to equal [84, 12, 28, 21]', () => {
  const integers = [1, 7, 3, 4]
  expect(productOfOtherNums(integers)).toEqual([84, 12, 28, 21])
})

test('productOfOtherNums to equal [540, 270, 90, 108, 60]', () => {
  const integers = [1, 2, 6, 5, 9]
  expect(productOfOtherNums(integers)).toEqual([540, 270, 90, 108, 60])
})

test('productOfOtherNums to equal [0, 0, 24, 0]', () => {
  const integers = [2, 3, 0, 4]
  expect(productOfOtherNums(integers)).toEqual([0, 0 , 24, 0])
})
