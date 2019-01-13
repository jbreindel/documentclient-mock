const documentClient = require('../../lib/client');

describe('client can query documents', () => {

  test('query begins_with documents', async () => {
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
          test: new Array(100)
            .fill()
            .map((_, i) => i + 1)
            .reduce((part, i) => {
              const partitionKey = 'test';
              const sortKey = `test${
                ('000' + i).slice(-3)
              }`;
              const test = i;
              part[sortKey] = {
                partitionKey,
                sortKey,
                test
              };
              return part;
            }, {})
        }
      }
    });
    const resp = await client.query({
      TableName: 'TestTable',
      KeyConditionExpression: `
        partitionKey = :pk
          and begins_with(sortKey, :sk)
      `,
      ExpressionAttributeValues: {
        ':pk': 'test',
        ':sk': 'test09'
      }
    }).promise();
    expect(resp.Items.length).toBe(10);
  });

});
