const documentClient = require('../../lib/client');

describe('client can get documents', () => {

  test('get hashKey document', async () => {
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
          'test': {
            partitionKey: 'test'
          }
        }
      }
    });
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

  test('get hashKey & rangeKey document', async () => {
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

  test('get non existing document', async () => {
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
    const doc = await client.get({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' }
    }).promise();
    expect(doc).toEqual({
      Item: undefined
    });
  });

});
