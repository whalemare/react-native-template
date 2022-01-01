/**
 * Just typings around static keys and values
 */
export const enums = <K extends string | number | symbol, V = string>(args: { [key in K]: V }) => args
