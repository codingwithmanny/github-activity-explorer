// IMPORTS
// --------------------------------------------------------
import { formatNumber } from '../helpers';
import { getSearchResults, getCommitHistory } from '../requests';

// MOCKS
// --------------------------------------------------------
/**
 * @constant
 */
const mockAxiosGet = jest.fn().mockName('mockAxiosGet');

/**
 * Mocks
 */
jest.mock('axios', () => {
  return Object.assign(jest.fn(), {
    interceptors: {
      response: {
        use: (...args: any) => jest.fn(args),
      },
    },
    get: (...args: any) => mockAxiosGet(args),
  });
});

/**
 * Reset for mocks
 */
beforeEach(() => {
  jest.clearAllMocks();
});

// TESTS
// --------------------------------------------------------
/**
 * Tests under 1000 - 93
 */
test('Test - formatNumber - 93', () => {
  // Setup
  const result = formatNumber('93');

  // Expectancy
  expect(result).toBe('93');
});

/**
 * Tests under 1000 - 173
 */
test('Test - formatNumber - 173', () => {
  // Setup
  const result = formatNumber('173');

  // Expectancy
  expect(result).toBe('173');
});

/**
 * Tests under a million - 1234
 */
test('Test - formatNumber - 1234', () => {
  // Setup
  const result = formatNumber('1234');

  // Expectancy
  expect(result).toBe('1.23k');
});

/**
 * Tests under a million - 78234
 */
test('Test - formatNumber - 78234', () => {
  // Setup
  const result = formatNumber('78234');

  // Expectancy
  expect(result).toBe('78.2k');
});

/**
 * Tests under a million - 978234
 */
test('Test - formatNumber - 978234', () => {
  // Setup
  const result = formatNumber('978234');

  // Expectancy
  expect(result).toBe('978k');
});

/**
 * Tests under a billion - 5978234
 */
test('Test - formatNumber - 5978234', () => {
  // Setup
  const result = formatNumber('5978234');

  // Expectancy
  expect(result).toBe('5.97m');
});

/**
 * Tests under a billion - 35978234
 */
test('Test - formatNumber - 35978234', () => {
  // Setup
  const result = formatNumber('35978234');

  // Expectancy
  expect(result).toBe('35.9m');
});

/**
 * Tests under a billion - 935978234
 */
test('Test - formatNumber - 935978234', () => {
  // Setup
  const result = formatNumber('935978234');

  // Expectancy
  expect(result).toBe('935m');
});

/**
 * Tests under a trillion - 2935978234
 */
test('Test - formatNumber - 2935978234', () => {
  // Setup
  const result = formatNumber('2935978234');

  // Expectancy
  expect(result).toBe('2.93b');
});

/**
 * Tests under a trillion - 52935978234
 */
test('Test - formatNumber - 52935978234', () => {
  // Setup
  const result = formatNumber('52935978234');

  // Expectancy
  expect(result).toBe('52.9b');
});

/**
 * Tests under a trillion - 852935978234
 */
test('Test - formatNumber - 852935978234', () => {
  // Setup
  const result = formatNumber('852935978234');

  // Expectancy
  expect(result).toBe('852b');
});

/**
 * Tests trillions - 1852935978234
 */
test('Test - formatNumber - 1852935978234', () => {
  // Setup
  const result = formatNumber('1852935978234');

  // Expectancy
  expect(result).toBe('1.85t');
});

/**
 * Tests trillions - 41852935978234
 */
test('Test - formatNumber - 41852935978234', () => {
  // Setup
  const result = formatNumber('41852935978234');

  // Expectancy
  expect(result).toBe('41.8t');
});

/**
 * Tests trillions - 641852935978234
 */
test('Test - formatNumber - 641852935978234', () => {
  // Setup
  const result = formatNumber('641852935978234');

  // Expectancy
  expect(result).toBe('641t');
});

/**
 * Test getSearchResults
 */
test('Test - getSearchResults - query "asdf"', async () => {
  // Pre Expectancy
  mockAxiosGet.mockResolvedValue('SUCCESS');
  expect(mockAxiosGet).not.toHaveBeenCalled();

  // Setup
  const result = await getSearchResults('asdf');

  // Expectancy
  expect(mockAxiosGet).toHaveBeenCalledTimes(1);
  expect(mockAxiosGet).toHaveBeenCalledWith([
    `undefined/search/repositories?q=asdf&per_page=6`,
  ]);
  expect(result).toBe('SUCCESS');
});

/**
 * Test getSearchResults
 */
test('Test - getCommitHistory - repo "facebook/create-react-app" no since/unil', async () => {
  // Pre Expectancy
  mockAxiosGet.mockResolvedValue('SUCCESS');
  expect(mockAxiosGet).not.toHaveBeenCalled();

  // Setup
  const result = await getCommitHistory('facebook/create-react-app');

  // Expectancy
  expect(mockAxiosGet).toHaveBeenCalledTimes(1);
  expect(mockAxiosGet).toHaveBeenCalledWith([
    'undefined/repos/facebook/create-react-app/commits?per_page=100',
  ]);
  expect(result).toBe('SUCCESS');
});

/**
 * Test getSearchResults
 */
test('Test - getCommitHistory - repo "facebook/create-react-app" with since/unil', async () => {
  // Pre Expectancy
  mockAxiosGet.mockResolvedValue('SUCCESS');
  expect(mockAxiosGet).not.toHaveBeenCalled();
  // Setup
  const result = await getCommitHistory(
    'facebook/create-react-app',
    '2019-08-05T23:08:65-04:00',
    '2020-08-03T23:08:65-04:00',
  );

  // Expectancy
  expect(mockAxiosGet).toHaveBeenCalledTimes(1);
  expect(mockAxiosGet).toHaveBeenCalledWith([
    'undefined/repos/facebook/create-react-app/commits?since=2019-08-05T23:08:65-04:00&until=2020-08-03T23:08:65-04:00&per_page=100',
  ]);
  expect(result).toBe('SUCCESS');
});
