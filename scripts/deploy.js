// Simple script to simulate deployment passing or failing
// Set the DEPLOY_SHOULD_PASS env variable to 'false' to simulate failure

console.log('Deploying application...');

const shouldPass = process.env.DEPLOY_SHOULD_PASS !== 'false';

if (shouldPass) {
  console.log('Deployment completed successfully!');
  process.exit(0);
} else {
  console.error('Deployment failed!');
  process.exit(1);
}
