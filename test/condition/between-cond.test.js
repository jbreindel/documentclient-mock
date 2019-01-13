const { evaluateScan } = require('../../lib/condition');

describe('scan BETWEEN int compCond tests', () => {

  test('compCond BETWEEN int true', () => {
    const ret = evaluateScan({
      FilterExpression: 'test between :lb and :ub',
      ExpressionAttributeValues: {
        ':lb': 19,
        ':ub': 21
      }
    }, {
      test: 20
    });
    expect(ret).toBe(true);
  });

  test('compCond BETWEEN int false', () => {
    const ret = evaluateScan({
      FilterExpression: 'test between :lb and :ub',
      ExpressionAttributeValues: {
        ':lb': 19,
        ':ub': 21
      }
    }, {
      test: 1
    });
    expect(ret).toBe(false);
  });

  // TODO test exclusivity

});

// TODO test string / dates
