/* eslint-disable @typescript-eslint/no-explicit-any */

const placeholderRegex = /(\{[\d|\w]+\})/

/**
 ** Simple module to localize the React interface using the same syntax, but removed react imports and use only arrays as input
 * https://github.com/stefalda/react-localization/blob/master/src/LocalizedStrings.js
 *
 * Format the passed string replacing the numbered or tokenized placeholders
 * eg. 1: I'd like some {0} and {1}, or just {0}
 *
 * Use example:
 * eg. 1: formatString(strings.question, strings.bread, strings.butter)
 */
export const formatString = (rawString: string, ...values: (string | number)[]): string => {
  const res = (rawString || '')
    .split(placeholderRegex)
    .filter(textPart => !!textPart)
    .map(textPart => {
      if (placeholderRegex.exec(textPart)) {
        const matchedPosition: number = Number.parseInt(textPart.slice(1, -1))
        return values[matchedPosition]
      }
      return textPart
    })

  return res.join('')
}
