// Simple script to simulate lint passing or failing
// Set the LINT_SHOULD_PASS env variable to 'false' to simulate failure

console.log('Running lint checks...');

const shouldPass = process.env.LINT_SHOULD_PASS !== 'false';

if (shouldPass) {
  console.log('Lint checks passed successfully!');
  process.exit(0);
} else {
  console.error('Lint checks failed!');
  process.exit(1);
}
