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

  test('set non-existing document', async () => {
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
    await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set test = :test',
      ExpressionAttributeValues: {
        ':test': 1
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

  test('set non-existing rangeKey document', async () => {
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
        TestTable: {}
      }
    });
    await client.update({
      TableName: 'TestTable',
      Key: {
        partitionKey: 'test',
        sortKey: 'test#'
      },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set test = :test',
      ExpressionAttributeValues: {
        ':test': 1
      }
    }).promise();
    const doc = await client.get({
      TableName: 'TestTable',
      Key: {
        partitionKey: 'test',
        sortKey: 'test#'
      }
    }).promise();
    expect(doc).toEqual({
      Item: {
        partitionKey: 'test',
        sortKey: 'test#',
        test: 1
      }
    });
  });

  test('setFunc non-existing document', async () => {
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
    await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression:
        'set test = if_not_exists(test, :test)',
      ExpressionAttributeValues: {
        ':test': 1
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

  test('set path on document', async () => {
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
            nested: {
              test: 0
            }
          }
        }
      }
    });
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set nested.test = 1'
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        nested: {
          test: 1
        }
      }
    });
  });

  test('set path with names document', async () => {
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
            nested: {
              test: 0
            }
          }
        }
      }
    });
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set #nested.#test = 1',
      ExpressionAttributeNames: {
        '#nested': 'nested',
        '#test': 'test'
      }
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        nested: {
          test: 1
        }
      }
    });
  });

  // FIXME cannot set path on array
  // test('set path array on document', async () => {
  //   const client = documentClient({
  //     defns: {
  //       TestTable: {
  //         keySchema: [
  //           {
  //             keyType: 'HASH',
  //             attributeName: 'partitionKey'
  //           }
  //         ],
  //         attributeDefinitions: [
  //           {
  //             attributeName: 'partitionKey',
  //             attributeType: 'S'
  //           }
  //         ]
  //       }
  //     },
  //     tables: {
  //       TestTable: {
  //         test: {
  //           partitionKey: 'test',
  //           nested: [
  //             {
  //               test: 0
  //             },
  //             {
  //               test: 1
  //             }
  //           ]
  //         }
  //       }
  //     }
  //   });
  //   const resp = await client.update({
  //     TableName: 'TestTable',
  //     Key: { partitionKey: 'test' },
  //     ReturnValues: 'ALL_NEW',
  //     UpdateExpression: 'set nested[1].test = 2'
  //   }).promise();
  //   expect(resp).toEqual({
  //     Attributes: {
  //       partitionKey: 'test',
  //       nested: [
  //         {
  //           test: 0
  //         },
  //         {
  //           test: 2
  //         }
  //       ]
  //     }
  //   });
  // });

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

  test('add to set', async () => {
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
                '1'
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
      UpdateExpression: 'add testSet :testSet',
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
            '1',
            '2'
          ]
        }
      }
    });
  });

  test('add to not existing set', async () => {
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
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'add testSet :testSet',
      ExpressionAttributeValues: {
        ':testSet': client.createSet([
          '1'
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
    });
  });

  test('delete from set', async () => {
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
    });
  });

  test('delete empty set', async () => {
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
                '1'
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
          '1'
        ])
      }
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test'
      }
    });
  });

  test('set and delete', async () => {
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
    const now = new Date().toISOString();
    const resp = await client.update({
      TableName: 'TestTable',
      Key: { partitionKey: 'test' },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: `
        set
          modified = :modified
        delete testSet :testSet
      `,
      ExpressionAttributeValues: {
        ':modified': now,
        ':testSet': client.createSet([
          '2'
        ])
      }
    }).promise();
    expect(resp).toEqual({
      Attributes: {
        partitionKey: 'test',
        modified: now,
        testSet: {
          values: [
            '1'
          ]
        }
      }
    });
  });
});
