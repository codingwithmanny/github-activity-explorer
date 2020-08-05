// IMPORTS
// --------------------------------------------------------

// MAIN FUNCTION
// --------------------------------------------------------
/**
 * Formats number as abbreviated name
 * @param {number} number number to be formatted
 * @returns {string}
 */
export const formatNumber = (number: string): string => {
  const StringInt: number = parseInt(number.replace(',', ''));

  if (StringInt >= 1000000000000) {
    // Trillion
    const num = `${StringInt / 1000000000000}`.split('.');
    return `${[num[0], num[1].slice(0, 3 - num[0].length)]
      .filter((i) => i)
      .join('.')}t`;
  } else if (StringInt >= 1000000000) {
    // Billion
    const num = `${StringInt / 1000000000}`.split('.');
    return `${[num[0], num[1].slice(0, 3 - num[0].length)]
      .filter((i) => i)
      .join('.')}b`;
  } else if (StringInt >= 1000000) {
    // Million
    const num = `${StringInt / 1000000}`.split('.');
    return `${[num[0], num[1].slice(0, 3 - num[0].length)]
      .filter((i) => i)
      .join('.')}m`;
  } else if (StringInt >= 1000) {
    // Thousand
    const num = `${StringInt / 1000}`.split('.');
    return `${[num[0], num[1].slice(0, 3 - num[0].length)]
      .filter((i) => i)
      .join('.')}k`;
  } else {
    return `${StringInt}`;
  }
};
