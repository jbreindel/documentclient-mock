const documentClient = require('../../lib/client');

describe('client can put documents', () => {

  test('put hashKey document', async () => {
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
        TestTable: {}
      }
    });
    await client.put({
      TableName: 'TestTable',
      Item: { partitionKey: 'test' }
    }).promise();
    const doc = await client.get({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' }
    }).promise();
    expect(doc).toEqual({
      Item: {
        partitionKey: 'test'
      }
    });
  });

  test('put hashKey & rangeKey document', async () => {
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
          hello: {
            world: {
              partitionKey: 'hello',
              sortKey: 'world'
            }
          }
        }
      }
    });
    await client.put({
      TableName: 'TestTable',
      Item: {
        partitionKey: 'hello',
        sortKey: 'world'
      }
    }).promise();
    const doc = await client.get({
      TableName: 'TestTable',
      Key: {
        partitionKey: 'hello',
        sortKey: 'world'
      }
    }).promise();
    expect(doc).toEqual({
      Item: {
        partitionKey: 'hello',
        sortKey: 'world'
      }
    });
  });

  test('overwrite hashKey document', async () => {
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
          test: {
            partitionKey: 'test',
            test: 0
          }
        }
      }
    });
    await client.put({
      TableName: 'TestTable',
      Item: {
        partitionKey: 'test',
        test: 1
      }
    }).promise();
    const doc = await client.get({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' }
    }).promise();
    expect(doc).toEqual({
      Item: {
        partitionKey: 'test',
        test: 1
      }
    });
  });

});
