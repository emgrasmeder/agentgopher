import { hideToggle } from '../src/app';

test('should toggle between visibile and invisible on click', () => {
  const element = { className: 'invisibleCell' };
  hideToggle(element);
  expect(element.className).toEqual('cell');
  hideToggle(element);
  expect(element.className).toEqual('invisibleCell');
});
