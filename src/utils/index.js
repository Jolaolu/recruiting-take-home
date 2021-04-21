/**
 * Checks if a certain number should be prefixed with the word "one".

 * @param {number} num  number to check
 * @returns {boolean}
 */
export function PrefixWithOne (num) {
  return num >= 100
};

/**
 * Checks if a certain number should be concatenated with hyphens

 * @param {number} num number to check
 * @returns {boolean}
 */
export function shouldIncludeHyphen (num) {
  return num >= 20 && num <= 99
};
