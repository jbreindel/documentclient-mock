const { evaluateUpdate } = require('../../lib/update');

describe('update SET update', () => {

  test('set single attribute', () => {
    const updated = evaluateUpdate({
      UpdateExpression: 'set test = 1'
    }, {
      test: 0
    });
    expect(updated.test).toBe(1);
  });

  test('set non existing attribute', () => {
    const updated = evaluateUpdate({
      UpdateExpression: 'set newTest = 1'
    }, {
      test: 0
    });
    expect(updated.test).toBe(0);
    expect(updated.newTest).toBe(1);
  });

  test('set multiple attributes', () => {
    const updated = evaluateUpdate({
      UpdateExpression: 'set hello = 1, world = 1'
    }, {
      test: 0
    });
    expect(updated.test).toBe(0);
    expect(updated.hello).toBe(1);
    expect(updated.world).toBe(1);
  });

});

// TODO more tests
