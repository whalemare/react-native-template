/* eslint-disable @typescript-eslint/ban-types */

// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
// type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
export type OmitFunctions<T> = Pick<T, NonFunctionPropertyNames<T>>
