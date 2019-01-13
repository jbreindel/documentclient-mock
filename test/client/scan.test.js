const documentClient = require('../../lib/client');

describe('client can scan documents', () => {

  test('scan hashKey document', async () => {
    const client = documentClient({
      defns: {
        TestTable: {
          keySchema: [
            {
              keyType: 'HASH',
              attributeName: 'partitionKey'
            }
          ],
          attributeDefinitions: [
            {
              attributeName: 'partitionKey',
              attributeType: 'S'
            }
          ]
        }
      },
      tables: {
        TestTable: {
          test0: {
            partitionKey: 'test0',
            test: 0
          },
          test1: {
            partitionKey: 'test1',
            test: 1
          }
        }
      }
    });
    const resp = await client.scan({
      TableName: 'TestTable',
      FilterExpression: 'test = 1'
    }).promise();
    expect(resp.Items.length).toBe(1);
    expect(resp.ScanCount).toBe(2);
    expect(resp.LastEvaluatedKey).toBe(undefined);
    expect(resp.Items[0]).toEqual({
      partitionKey: 'test1',
      test: 1
    });
  });

  test('scan hashKey & rangeKey document', async () => {
    const client = documentClient({
      defns: {
        TestTable: {
          keySchema: [
            {
              keyType: 'HASH',
              attributeName: 'partitionKey'
            },
            {
              keyType: 'RANGE',
              attributeName: 'sortKey'
            }
          ],
          attributeDefinitions: [
            {
              attributeName: 'partitionKey',
              attributeType: 'S'
            },
            {
              attributeName: 'sortKey',
              attributeType: 'S'
            }
          ]
        }
      },
      tables: {
        TestTable: {
          test: {
            test0: {
              partitionKey: 'test',
              sortKey: 'test0',
              test: 0
            },
            test1: {
              partitionKey: 'test',
              sortKey: 'test1',
              test: 1
            }
          }
        }
      }
    });
    const resp = await client.scan({
      TableName: 'TestTable',
      FilterExpression: 'test = 1'
    }).promise();
    expect(resp.Items.length).toBe(1);
    expect(resp.ScanCount).toBe(2);
    expect(resp.LastEvaluatedKey).toBe(undefined);
    expect(resp.Items[0]).toEqual({
      partitionKey: 'test',
      sortKey: 'test1',
      test: 1
    });
  });

  test('scan returns LastEvaluatedKey', async () => {
    const client = documentClient({
      defns: {
        TestTable: {
          keySchema: [
            {
              keyType: 'HASH',
              attributeName: 'partitionKey'
            }
          ],
          attributeDefinitions: [
            {
              attributeName: 'partitionKey',
              attributeType: 'S'
            }
          ]
        }
      },
      tables: {
        TestTable: new Array(101)
          .fill()
          .map((_, i) => i + 1)
          .reduce((part, i) => {
            part[`test${('000' + i).slice(-3)}`] = {
              partitionKey:
                `test${('000' + i).slice(-3)}`,
              test: i
            };
            return part;
          }, {})
      }
    });
    const resp = await client.scan({
      TableName: 'TestTable',
      FilterExpression: 'test > 100'
    }).promise();
    expect(resp.Items.length).toBe(0);
    expect(resp.ScanCount).toBe(100);
    expect(resp.LastEvaluatedKey).toBe('test100');
  });

  test('scan respects ExclusiveStartKey', async () => {
    const client = documentClient({
      defns: {
        TestTable: {
          keySchema: [
            {
              keyType: 'HASH',
              attributeName: 'partitionKey'
            }
          ],
          attributeDefinitions: [
            {
              attributeName: 'partitionKey',
              attributeType: 'S'
            }
          ]
        }
      },
      tables: {
        TestTable: new Array(101)
          .fill()
          .map((_, i) => i + 1)
          .reduce((part, i) => {
            part[`test${('000' + i).slice(-3)}`] = {
              partitionKey:
                `test${('000' + i).slice(-3)}`,
              test: i
            };
            return part;
          }, {})
      }
    });
    const resp = await client.scan({
      TableName: 'TestTable',
      FilterExpression: 'test > 100',
      ExclusiveStartKey: 'test100'
    }).promise();
    expect(resp.Items.length).toBe(1);
    expect(resp.Items[0]).toEqual({
      partitionKey: 'test101',
      test: 101
    });
    expect(resp.ScanCount).toBe(1);
    expect(resp.LastEvaluatedKey).toBe(undefined);
  });

});
