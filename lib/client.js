const Request = require('./request');
const { evaluateScan, evaluateQuery } = require('./condition');
const { evaluateUpdate } = require('./update');

module.exports = ({ defns, tables, fn }) => {
  class DocumentClient {
    constructor() {
      this.defns = defns || {};
      this.tables = tables || {};
    }

    findKeyAttrName(tableName, keyType) {
      const key = this.defns[tableName].keySchema
        .find(k => k.keyType === keyType);
      return key && key.attributeName;
    }

    findAttrType(tableName, attrName) {
      const attrDefns = this.defns[tableName]
        .attributeDefinitions;
      const attrDefn = attrDefns.find(d => {
        return d.attributeName === attrName;
      });
      return attrDefn && attrDefn.attributeType;
    }

    hashKeyName(tableName) {
      return this.findKeyAttrName(
        tableName,
        'HASH'
      );
    }

    hashKeyType(tableName) {
      const name = this.findKeyAttrName(tableName, 'HASH');
      if (!name) {
        return;
      }
      return this.findAttrType(tableName, name);
    }

    rangeKeyName(tableName) {
      return this.findKeyAttrName(tableName, 'RANGE');
    }

    rangeKeyType(tableName) {
      const name = this.findKeyAttrName(tableName, 'RANGE');
      if (!name) {
        return;
      }
      return this.findAttrType(tableName, name);
    }

    createSet(arr) {
      const values = Array.from(new Set(arr));
      return { values };
    }

    get({ TableName, Key }) {
      return new Request(new Promise(res => {
        if (!TableName) {
          throw new Error('Missing TableName in params.');
        }
        const hashKeyName = this.hashKeyName(TableName);
        const hashKeyVal = Key[hashKeyName];
        if (!hashKeyVal) {
          throw new Error(`Missing ${hashKeyName} in key.`);
        }
        const rangeKeyName = this.rangeKeyName(TableName);
        if (rangeKeyName && !Key[rangeKeyName]) {
          throw new Error(`Missing ${rangeKeyName} in key.`);
        }
        const table = this.tables[TableName] || {};
        let item;
        if (rangeKeyName) {
          const rangeKeyVal = Key[rangeKeyName];
          const partition = table[hashKeyVal];
          item = partition && partition[rangeKeyVal];
        } else {
          item = table[hashKeyVal];
        }
        res({ Item: item });
      }));
    }

    put({ TableName, Item }) {
      return new Request(new Promise(res => {
        if (!TableName) {
          throw new Error('Missing TableName in params.');
        }
        const hashKeyName = this.hashKeyName(TableName);
        const hashKeyVal = Item[hashKeyName];
        if (!hashKeyVal) {
          throw new Error(`Missing ${hashKeyName} in Item.`);
        }
        const rangeKeyName = this.rangeKeyName(TableName);
        if (rangeKeyName && !Item[rangeKeyName]) {
          throw new Error(`Missing ${rangeKeyName} in Item.`);
        }
        if (!this.tables[TableName]) {
          throw new Error('Table not found.');
        }
        if (rangeKeyName) {
          const rangeKeyVal = Item[rangeKeyName];
          this.tables[TableName][hashKeyVal] =
            this.tables[TableName][hashKeyVal] || {};
          this.tables[TableName][hashKeyVal][
            rangeKeyVal
          ] = Item;
        } else {
          this.tables[TableName][hashKeyVal] = Item;
        }
        res({});
      }));
    }

    delete(params) {
      return new Request(new Promise(res => {
        const TableName = params.TableName;
        if (!TableName) {
          throw new Error('Missing TableName in params.');
        }
        const Key = params.Key;
        const hashKeyName = this.hashKeyName(TableName);
        const hashKeyVal = Key[hashKeyName];
        if (!hashKeyVal) {
          throw new Error(`Missing ${hashKeyName} in Item.`);
        }
        const rangeKeyName = this.rangeKeyName(TableName);
        if (rangeKeyName && !Key[rangeKeyName]) {
          throw new Error(`Missing ${rangeKeyName} in Item.`);
        }
        const table = this.tables[TableName];
        if (!table) {
          throw new Error('Table not found.');
        }
        let existing;
        if (rangeKeyName) {
          const rangeKeyVal = Key[rangeKeyName];
          if (table[hashKeyVal]) {
            existing = table[hashKeyVal][
              rangeKeyVal
            ];
            delete table[hashKeyVal][
              rangeKeyVal
            ];
          }
        } else {
          existing = table[hashKeyVal];
          delete table[hashKeyVal];
        }
        let attributes;
        switch (params.ReturnValues) {
        case 'ALL_OLD': {
          attributes = existing;
          break;
        }
        case 'UPDATED_OLD': {
          // TODO implement
          break;
        }
        case 'ALL_NEW': {
          // TODO not sure what to return here
          attributes = undefined;
          break;
        }
        case 'UPDATED_NEW': {
          // TODO implement
          break;
        }
        }
        res({ Attributes: attributes });
      }));
    }

    evaluate(evalFun, params) {
      const TableName = params.TableName;
      if (!TableName) {
        throw new Error('Missing TableName in params.');
      }
      const MAX_SCAN_COUNT = 100;
      const MAX_RETURN_COUNT = 50;
      const items = [];
      let lastKey;
      let scanCount = 0;
      const table = this.tables[TableName] || {};
      const rangeKeyName = this.rangeKeyName(TableName);
      const hashKeys = Object.keys(table);
      hashKeys.sort();
      if (!rangeKeyName) {
        let i = 0;
        const startKey = params.ExclusiveStartKey;
        if (params.ExclusiveStartKey) {
          i = hashKeys.indexOf(startKey) + 1;
        }
        while (i < hashKeys.length && scanCount < MAX_SCAN_COUNT
          && items.length < MAX_RETURN_COUNT) {
          const hashKey = hashKeys[i];
          lastKey = hashKey;
          const doc = table[hashKey];
          if (evalFun(params, doc)) {
            items.push(doc);
          }
          scanCount++;
          i++;
        }
        if (i >= hashKeys.length) {
          lastKey = undefined;
        }
      } else {
        let i = 0;
        let j = 0;
        const startKeyStr = params.ExclusiveStartKey;
        if (params.ExclusiveStartKey) {
          const startKey = JSON.parse(startKeyStr);
          i = hashKeys.indexOf(startKey.hashKey);
          j = Object.keys(hashKeys[i]).indexOf(
            startKey.rangeKey
          ) + 1;
        }
        while (i < hashKeys.length && scanCount < MAX_SCAN_COUNT
          && items.length < MAX_RETURN_COUNT) {
          const hashKey = hashKeys[i];
          const partition = table[hashKey];
          const rangeKeys = Object.keys(partition);
          rangeKeys.sort();
          while (j < rangeKeys.length && scanCount < MAX_SCAN_COUNT
            && items.length < MAX_RETURN_COUNT) {
            const rangeKey = rangeKeys[j];
            lastKey = { hashKey, rangeKey };
            const doc = partition[rangeKey];
            if (evalFun(params, doc)) {
              items.push(doc);
            }
            scanCount++;
            j++;
          }
          i++;
          if (i >= hashKeys.length
            && j >= rangeKeys.length) {
            lastKey = undefined;
          }
          j = 0;
        }
      }
      return {
        ScanCount: scanCount,
        LastEvaluatedKey: typeof lastKey === 'string' ?
          lastKey : JSON.stringify(lastKey),
        Items: items
      };
    }

    scan(params) {
      return new Request(new Promise(res => {
        res(this.evaluate(evaluateScan, params));
      }));
    }

    query(params) {
      return new Request(new Promise(res => {
        res(this.evaluate(evaluateQuery, params));
      }));
    }

    update(params) {
      return new Request(new Promise(res => {
        const TableName = params.TableName;
        if (!TableName) {
          throw new Error('Missing TableName in params.');
        }
        const Key = params.Key;
        if (!Key) {
          throw new Error('Missing Key in params.');
        }
        const hashKeyName = this.hashKeyName(TableName);
        const hashKeyVal = Key[hashKeyName];
        if (!hashKeyVal) {
          throw new Error(`Missing ${hashKeyName} in Key.`);
        }
        const rangeKeyName = this.rangeKeyName(TableName);
        const rangeKeyVal = Key[rangeKeyName];
        if (rangeKeyName && !rangeKeyVal) {
          throw new Error(`Missing ${rangeKeyName} in Key.`);
        }
        const table = this.tables[TableName];
        if (!table) {
          throw new Error('Table not found.');
        }
        let existing;
        if (rangeKeyVal) {
          existing = table[hashKeyVal]
            && table[hashKeyVal][rangeKeyVal];
        } else {
          existing = table[hashKeyVal];
        }
        const updated = evaluateUpdate(params, existing);
        if (!rangeKeyVal) {
          table[hashKeyVal] = updated;
        } else {
          if (!table[hashKeyVal]) {
            table[hashKeyVal] = {};
          }
          table[hashKeyVal][rangeKeyVal] = updated;
        }
        let attributes;
        switch (params.ReturnValues) {
        case 'ALL_OLD': {
          attributes = existing;
          break;
        }
        case 'UPDATED_OLD': {
          // TODO implement
          break;
        }
        case 'ALL_NEW': {
          attributes = updated;
          break;
        }
        case 'UPDATED_NEW': {
          // TODO implement
          break;
        }
        }
        // TODO other stuff might go into return
        res({ Attributes: attributes });
      }));
    }

    // TODO batchGet, batchWrite
  }
  const inst = new DocumentClient();
  if (fn) {
    inst.get = fn(inst.get);
    inst.put = fn(inst.put);
    inst.delete = fn(inst.delete);
    inst.scan = fn(inst.scan);
    inst.query = fn(inst.query);
    inst.update = fn(inst.update);
  }
  return inst;
};
