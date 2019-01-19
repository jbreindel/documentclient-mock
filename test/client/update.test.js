const documentClient = require('../../lib/client');

describe('client can update documents', () => {

  test('set hashKey document', async () => {
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
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      UpdateExpression: 'set test = 1'
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

  test('ALL_NEW hashKey document', async () => {
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
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set test = 1'
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        test: 1
      }
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
            partitionKey: 'test',
            test: 0
          }
        }
      }
    });
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_OLD',
      UpdateExpression: 'set test = 1'
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        test: 0
      }
    });
  });

  test('ExprAttrVals hashKey document', async () => {
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
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set test = :test',
      ExpressionAttributeValues: {
        ':test': 1
      }
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        test: 1
      }
    });
  });

  test('delete from set document', async () => {
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
            testSet: {
              values: [
                '1',
                '2'
              ]
            }
          }
        }
      }
    });
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'delete testSet :testSet',
      ExpressionAttributeValues: {
        ':testSet': client.createSet([
          '2'
        ])
      }
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        testSet: {
          values: [
            '1'
          ]
        }
      }
    })
  })

});
