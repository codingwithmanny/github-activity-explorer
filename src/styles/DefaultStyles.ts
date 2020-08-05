// MAIN STYLES
// --------------------------------------------------------
/**
 * Media query breakpoints
 * @constant {Object}
 */
export const ScreenSizes = {
  xsmall: '640px',
  small: '768px',
  medium: '992px',
  large: '1200px',
  xlarge: '1600px',
};

/**
 * Main colors
 * @constant {Object}
 */
export const Colors = {
  blue: '#8383AF',
  darkestBlue: '#242432',
  deepBlue: '#37374A',
  darkBlue: '#272736',
  purple: '#BCBCF2',
  lightestPurple: '#ECECF6',
  lightPurple: '#BFBDD9',
  darkPurple: '#6D6D90',
  white: '#fff',
  black: '#000',
  grey: '#efefef',
  red: '#D65C5C',
  graphColor1: '#4CCA8D',
  graphColor2: '#D65C5C',
  graphColor3: '#71B7F8',
  graphColor4: '#4CCAC2',
  graphColor5: '#D6815C',
  graphColor6: '#7187F8',
  graphColor7: '#4CB3CA',
  graphColor8: '#D69E5C',
  graphColor9: '#7176F8',
  graphColor10: '#4C95CA',
  graphColor11: '#D6BB5C',
  graphColor12: '#9471F8',
  graphColor13: '#4C6FCA',
  graphColor14: '#D6D15C',
  graphColor15: '#BD71F8',
  graphColor16: '#5E4CCA',
  graphColor17: '#AFD65C',
  graphColor18: '#CD71F8',
  graphColor19: '#7C4CCA',
  graphColor20: '#83D65C',
  graphColor21: '#E571F8',
  graphColor22: '#A94CCA',
  graphColor23: '#5CD661',
  graphColor24: '#F871EA',
  graphColor25: '#CA4CBD',
  graphColor26: '#5CD6B1',
  graphColor27: '#F871A2',
  graphColor28: '#CAA74C',
  graphColor29: '#5CC7D6',
  graphColor30: '#F87171',
  graphColor31: '#CAC54C',
  graphColor32: '#5C9BD6',
  graphColor33: '#F89971',
  graphColor34: '#93CA4C',
  graphColor35: '#5C8DD6',
  graphColor36: '#F8A271',
  graphColor37: '#65CA4C',
  graphColor38: '#5C70D6',
  graphColor39: '#F8B271',
  graphColor40: '#4CCA7E',
  graphColor41: '#6D5CD6',
  graphColor42: '#F8CA71',
  graphColor43: '#4CCABB',
  graphColor44: '#925CD6',
  graphColor45: '#F8E271',
  graphColor46: '#4C9DCA',
  graphColor47: '#AF5CD6',
  graphColor48: '#F8F371',
  graphColor49: '#4C6FCA',
  graphColor50: '#CC5CD6',
};

/**
 * Retrieves color based on Index
 * @param {number} index
 * @returns {string}
 */
export const getGraphColor = (index: number) => {
  switch (index) {
    case 1:
      return Colors.graphColor1;
    case 2:
      return Colors.graphColor2;
    case 3:
      return Colors.graphColor3;
    case 4:
      return Colors.graphColor4;
    case 5:
      return Colors.graphColor5;
    case 6:
      return Colors.graphColor6;
    case 7:
      return Colors.graphColor7;
    case 8:
      return Colors.graphColor8;
    case 9:
      return Colors.graphColor9;
    case 10:
      return Colors.graphColor10;
    case 11:
      return Colors.graphColor11;
    case 12:
      return Colors.graphColor12;
    case 13:
      return Colors.graphColor13;
    case 14:
      return Colors.graphColor14;
    case 15:
      return Colors.graphColor15;
    case 16:
      return Colors.graphColor16;
    case 17:
      return Colors.graphColor17;
    case 18:
      return Colors.graphColor18;
    case 19:
      return Colors.graphColor19;
    case 20:
      return Colors.graphColor20;
    case 21:
      return Colors.graphColor21;
    case 22:
      return Colors.graphColor22;
    case 23:
      return Colors.graphColor23;
    case 24:
      return Colors.graphColor24;
    case 25:
      return Colors.graphColor25;
    case 26:
      return Colors.graphColor26;
    case 27:
      return Colors.graphColor27;
    case 28:
      return Colors.graphColor28;
    case 29:
      return Colors.graphColor29;
    case 30:
      return Colors.graphColor30;
    case 31:
      return Colors.graphColor31;
    case 32:
      return Colors.graphColor32;
    case 33:
      return Colors.graphColor33;
    case 34:
      return Colors.graphColor34;
    case 35:
      return Colors.graphColor35;
    case 36:
      return Colors.graphColor36;
    case 37:
      return Colors.graphColor37;
    case 38:
      return Colors.graphColor38;
    case 39:
      return Colors.graphColor39;
    case 40:
      return Colors.graphColor40;
    case 41:
      return Colors.graphColor41;
    case 42:
      return Colors.graphColor42;
    case 43:
      return Colors.graphColor43;
    case 44:
      return Colors.graphColor44;
    case 45:
      return Colors.graphColor45;
    case 46:
      return Colors.graphColor46;
    case 47:
      return Colors.graphColor47;
    case 48:
      return Colors.graphColor48;
    case 49:
      return Colors.graphColor49;
    case 50:
      return Colors.graphColor50;
    default:
      return Colors.graphColor1;
  }
};

/**
 * Main font styles
 * @constant {Object}
 */
export const FontStyles = {
  primary: 'Roboto, arial, sans-serif',
};
