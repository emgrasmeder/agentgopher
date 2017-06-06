import { hideToggle } from '../scripts';


test('adds 1 + 2 to equal 3', () => {
  const element = { className: 'redCell' };
  hideToggle(element);
  expect(element.className).toEqual('cell');
  hideToggle(element);
  expect(element.className).toEqual('redCell');
});