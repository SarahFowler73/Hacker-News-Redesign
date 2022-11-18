//#region typeguards
export const isNil = <T>(x: null | undefined | T): x is null | undefined =>
  x == null
export const isNotNil = <T>(x: null | undefined | T): x is T => !isNil(x)

//#end-region typeguards
