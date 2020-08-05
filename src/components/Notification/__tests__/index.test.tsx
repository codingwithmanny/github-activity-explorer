// IMPORTS
// --------------------------------------------------------
import React from 'react';
import renderer from 'react-test-renderer';

// TESTING
// --------------------------------------------------------
import Notification from '../';

// TEST
// --------------------------------------------------------
/**
 *
 */
test('Renders <Notification /> No Message', () => {
  const tree = renderer.create(<Notification message={null} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 *
 */
test('Renders <Notification /> With Message', () => {
  const tree = renderer
    .create(<Notification message={'Something went wrong.'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
