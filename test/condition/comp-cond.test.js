const { evaluateScan } = require('../../lib/condition');

describe('scan EQ compCond tests', () => {

  test('compCond EQ int expr = val true', () => {
    const ret = evaluateScan({
      FilterExpression: 'test = 20'
    }, {
      test: 20
    });
    expect(ret).toBe(true);
  });

  test('compCond EQ int expr != val false', () => {
    const ret = evaluateScan({
      FilterExpression: 'test = 21'
    }, {
      test: 20
    });
    expect(ret).toBe(false);
  });

  test('compCond EQ int val != expr false', () => {
    const ret = evaluateScan({
      FilterExpression: 'test = 20'
    }, {
      test: 21
    });
    expect(ret).toBe(false);
  });

  test('compCond EQ int expr = val true', () => {
    const ret = evaluateScan({
      FilterExpression: 'test = :test',
      ExpressionAttributeValues: {
        ':test': 20
      }
    }, {
      test: 20
    });
    expect(ret).toBe(true);
  });

});

describe('scan NE compCond tests', () => {

  test('compCond NE int expr != val true', () => {
    const ret = evaluateScan({
      FilterExpression: 'test <> 20'
    }, {
      test: 21
    });
    expect(ret).toBe(true);
  });

  test('compCond NE string expr != val true', () => {
    const ret = evaluateScan({
      FilterExpression: 'test <> :test1',
      ExpressionAttributeValues: {
        ':test1': 'test1'
      }
    }, {
      test: 'test'
    });
    expect(ret).toBe(true);
  });

  test('compCond NE int expr == val false', () => {
    const ret = evaluateScan({
      FilterExpression: 'test <> 20'
    }, {
      test: 20
    });
    expect(ret).toBe(false);
  });

  test('compCond NE string expr == val false', () => {
    const ret = evaluateScan({
      FilterExpression: 'test <> :test',
      ExpressionAttributeValues: {
        ':test': 'test'
      }
    }, {
      test: 'test'
    });
    expect(ret).toBe(false);
  });

});

// TODO LT, LE, GE, GT tests
