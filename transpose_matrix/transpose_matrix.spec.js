import transposeMatrix from './transpose_matrix'

test('transposed array to equal [[1, 4], [2, 5], [3, 6]]', () => {
  const array = [[1, 2, 3], [4, 5, 6]]
  expect(transposeMatrix(array)).toEqual([[1, 4], [2, 5], [3, 6]])
})
