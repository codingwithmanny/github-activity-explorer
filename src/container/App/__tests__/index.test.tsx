// IMPORTS
// --------------------------------------------------------
import React from 'react';
import renderer from 'react-test-renderer';

// TESTING
// --------------------------------------------------------
import App from '../';

// TESTS
// --------------------------------------------------------
/**
 * Renders <App /> default state
 */
test('Renders App Default State', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
