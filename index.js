const bitcoin = require('bitcoinjs-lib');

// Transaction Hex
const transactionHex = '020000000001010ccc140e766b5dbc884ea2d780c5e91e4eb77597ae64288a42575228b79e234900000000000000000002bd37060000000000225120245091249f4f29d30820e5f36e1e5d477dc3386144220bd6f35839e94de4b9cae81c00000000000016001416d31d7632aa17b3b316b813c0a3177f5b6150200140838a1f0f1ee607b54abf0a3f55792f6f8d09c3eb7a9fa46cd4976f2137ca2e3f4a901e314e1b827c3332d7e1865ffe1d7ff5f5d7576a9000f354487a09de44cd00000000';

// Convert hex to Buffer
const transactionBuffer = Buffer.from(transactionHex, 'hex');

// Parse the transaction
const decodedTransaction = bitcoin.Transaction.fromBuffer(transactionBuffer);

// Print the decoded transaction details
console.log('Version:', decodedTransaction.version);
console.log('Inputs:', decodedTransaction.ins.length);
console.log('Outputs:', decodedTransaction.outs.length);

decodedTransaction.ins.forEach((input, index) => {
  console.log(`Input ${index + 1}:`);
  console.log('  Transaction Hash:', input.hash.reverse().toString('hex'));
  console.log('  Output Index:', input.index);
  console.log('  Script Length:', input.script.length);
  console.log('  Sequence:', input.sequence);
});

decodedTransaction.outs.forEach((output, index) => {
  console.log(`Output ${index + 1}:`);
  console.log('  Value (Satoshis):', output.value);
  console.log('  Script Length:', output.script.length);
});

console.log('Locktime:', decodedTransaction.locktime);
