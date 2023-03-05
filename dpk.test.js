const { createHash, deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it(`should return the literal '0' when given no input`, () => {
    const key = deterministicPartitionKey();
    expect(key).toBe('0');
  });

  it(`should return generated hash when given input without partitionKey property`, () => {
    const event = { test: '1' };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(createHash(JSON.stringify(event)));
  });

  it(`should return partitionKey when given input with partitionKey property shorter than 256 chars`, () => {
    const partitionKey = '1';
    const event = { partitionKey };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(partitionKey);
  });

  it(`should return generated hash when given input with partitionKey property longer than 256 chars`, () => {
    const partitionKey = '1'.repeat(258);
    const event = { partitionKey };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(createHash(partitionKey));
  });

  it(`should return stringified partitionKey when given input with partitionKey property of object type`, () => {
    const partitionKey = { test: '1' };
    const event = { partitionKey };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(JSON.stringify(partitionKey));
  });
});