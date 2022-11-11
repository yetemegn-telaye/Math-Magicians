import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import Quote from '../Quote';

afterEach(() => {
  cleanup();
});

test('Quote component rendered', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
