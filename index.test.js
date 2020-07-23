const testDate = require('./index');

test('module returns function and it runs', () => {
  expect(testDate()).toBeDefined();
})