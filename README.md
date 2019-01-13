## documentclient-mock

documentclient-mock is a mock implementation of [AWS.DynamoDB.DocumentClient](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html).
While it is a work in progress, it has many of the main features of DocumentClient implemented and operates all in memory. It even includes
expression evaluators for [condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html) and [update expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html).
The main purpose is to allow you to create databases in memory to test business logic against them.

#### Installation

```bash
npm install --save-dev documentclient-mock
```

#### Usage

```js
const documentClient = require('documentclient-mock');
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
client.get({
  TableName: 'TestTable',
  Key: { partitionKey: 'test' }
}).promise().then(doc => {
  console.log(doc);
});
```

`documentClient` has three options in its parameter:

* `defns` - a hash of table name to [table definition](https://awslabs.github.io/aws-cdk/refs/_aws-cdk_aws-dynamodb.html#@aws-cdk/aws-dynamodb.CfnTableProps)
* `tables` - a hash of table name to partitions
* `fn` - a function wrapper for client methods. example  [jest.fn](https://jestjs.io/docs/en/mock-functions)

#### Contributing

Contributions are welcomed as not all of the functionality is implemented yet.
There is some low hanging fruit with `TODO`s sprinkled throughout the code.
If a new feature is implemented or a change is made please add a corresponding test.
Also please ensure all lint checks and tests pass.
