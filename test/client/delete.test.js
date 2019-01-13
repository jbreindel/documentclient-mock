const documentClient = require('../../lib/client');

describe('client can delete documents', () => {

  test('delete hashKey document', async () => {
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
            partitionKey: 'test'
          }
        }
      }
    });
    const resp = await client.delete({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' }
    }).promise();
    const doc = await client.get({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' }
    }).promise();
    expect(doc).toEqual({
      Item: undefined
    });
  });

  test('ALL_OLD hashKey document', async () => {
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
            partitionKey: 'test'
          }
        }
      }
    });
    const resp = await client.delete({
      TableName: 'TestTable',
      ReturnValues: 'ALL_OLD',
      Key: { partitionKey: 'test' }
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test'
      }
    });
  });

});
