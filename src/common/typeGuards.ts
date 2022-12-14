export const isNil = <T>(x: null | undefined | T): x is null | undefined =>
  x === null || x === undefined

export const isNotNil = <T>(x: null | undefined | T): x is T => !isNil(x)
