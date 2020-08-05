// IMPORTS
// --------------------------------------------------------
import React from 'react';
import renderer from 'react-test-renderer';

// TESTING
// --------------------------------------------------------
import { Loader } from '../';

// TESTS
// --------------------------------------------------------
/**
 * Renders <Loader /> default state
 */
test('Renders Loader Default State', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
