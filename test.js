const assert = require('assert');
const bitcoin = require('bitcoinjs-lib');

// Function to decode a Bitcoin transaction hex
function decodeBitcoinTransaction(transactionHex) {
  const transactionBuffer = Buffer.from(transactionHex, 'hex');
  return bitcoin.Transaction.fromBuffer(transactionBuffer);
}

// Test case with a sample Bitcoin transaction hex
const sampleTransactionHex = '020000000001010ccc140e766b5dbc884ea2d780c5e91e4eb77597ae64288a42575228b79e234900000000000000000002bd37060000000000225120245091249f4f29d30820e5f36e1e5d477dc3386144220bd6f35839e94de4b9cae81c00000000000016001416d31d7632aa17b3b316b813c0a3177f5b6150200140838a1f0f1ee607b54abf0a3f55792f6f8d09c3eb7a9fa46cd4976f2137ca2e3f4a901e314e1b827c3332d7e1865ffe1d7ff5f5d7576a9000f354487a09de44cd00000000';

// Expected details for the sample transaction
const expectedVersion = 2;
const expectedInputsCount = 1;
const expectedOutputsCount = 2;
const expectedLocktime = 0;

// Run the test
try {
  const decodedTransaction = decodeBitcoinTransaction(sampleTransactionHex);

  // Assertion tests
  assert.strictEqual(decodedTransaction.version, expectedVersion, 'Version does not match');
  assert.strictEqual(decodedTransaction.ins.length, expectedInputsCount, 'Inputs count does not match');
  assert.strictEqual(decodedTransaction.outs.length, expectedOutputsCount, 'Outputs count does not match');
  assert.strictEqual(decodedTransaction.locktime, expectedLocktime, 'Locktime does not match');

  console.log('All tests passed successfully!');
} catch (error) {
  console.error('Test failed:', error.message);
}
