const { evaluateScan } = require('../../lib/condition');

describe('scan attribute_exists funcCond tests', () => {

  test('attribute_exists true', () => {
    const ret = evaluateScan({
      FilterExpression: 'attribute_exists(test)'
    }, {
      test: 20
    });
    expect(ret).toBe(true);
  });

  test('attribute_exists name true', () => {
    const ret = evaluateScan({
      FilterExpression: 'attribute_exists(#test)',
      ExpressionAttributeNames: {
        '#test': 'test'
      }
    }, {
      test: 20
    });
    expect(ret).toBe(true);
  });

  test('attribute_exists false', () => {
    const ret = evaluateScan({
      FilterExpression: 'attribute_exists(test)'
    }, {
      test2: 20
    });
    expect(ret).toBe(false);
  });

  test('attribute_not_exists true', () => {
    const ret = evaluateScan({
      FilterExpression: 'attribute_not_exists(test)'
    }, {
      test2: 20
    })
    expect(ret).toBe(true);
  });

  test('attribute_not_exists false', () => {
    const ret = evaluateScan({
      FilterExpression: 'attribute_not_exists(test)'
    }, {
      test: 20
    })
    expect(ret).toBe(false);
  });
});
