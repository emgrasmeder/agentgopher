var tap = require('tap');
var scripts = require('../scripts');

tap.test("unit test for hideToggle", function (t) {
  var element = { className: 'redCell' };
  scripts.hideToggle(element);
  t.isEqual(element.className, 'cell')
  scripts.hideToggle(element);
  t.isEqual(element.className, 'redCell')
  t.end();
})