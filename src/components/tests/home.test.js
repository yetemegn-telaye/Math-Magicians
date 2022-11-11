import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import Home from '../Home';

afterEach(() => {
  cleanup();
});

test('Home component rendered', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
