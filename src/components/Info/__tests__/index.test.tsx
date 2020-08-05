// IMPORTS
// --------------------------------------------------------
import React from 'react';
import renderer from 'react-test-renderer';

// TESTING
// --------------------------------------------------------
import Info from '../';

// TEST
// --------------------------------------------------------
/**
 *
 */
test('Renders <Info /> Show Null', () => {
  const tree = renderer.create(<Info show={null} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 *
 */
test('Renders <Info /> Show True', () => {
  const tree = renderer.create(<Info show={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 *
 */
test('Renders <Info /> Show False', () => {
  const tree = renderer.create(<Info show={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
