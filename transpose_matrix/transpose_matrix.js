// @flow

export default (matrix: number[][]): number[][] => {
  const result: number[][] = []

  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      const value: number = matrix[i][j]

      if (result[j] === undefined) {
        result[j] = []
      }

      result[j] = result[j].concat(value)
    }
  }

  return result
}