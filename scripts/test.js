// Simple script to simulate tests passing or failing
// Set the TESTS_SHOULD_PASS env variable to 'false' to simulate failure

console.log('Running tests...');

const shouldPass = process.env.TESTS_SHOULD_PASS !== 'false';

if (shouldPass) {
  console.log('Tests completed successfully!');
  process.exit(0);
} else {
  console.error('Tests failed!');
  process.exit(1);
}
