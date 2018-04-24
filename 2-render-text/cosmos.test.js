import createContext from 'react-cosmos-test/enzyme';
import fixture from './fixture';

const { mount, getWrapper } = createContext({ fixture });

beforeEach(mount);

it('should render "Hello {name}"', () => {
  expect(getWrapper().text()).toContain('Hello Satoshi');
});