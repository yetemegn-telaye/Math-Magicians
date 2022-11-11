import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import Calculator from '../Calculator';

afterEach(() => {
  cleanup();
});

test('Calculator component rendered', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
