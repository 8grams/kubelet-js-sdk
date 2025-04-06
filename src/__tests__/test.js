import * as kubelet from '../index.js';

const baseUrl = 'http://localhost:10250'; // Replace with your Kubelet API URL

// Test stats
async function testStats() {
  try {
    const stats = await kubelet.stats.getStats(baseUrl);
    console.log('Stats:', stats);
  } catch (error) {
    console.error('Error getting stats:', error);
  }
}

// Test metrics
async function testMetrics() {
  try {
    const metrics = await kubelet.metrics.getMetrics(baseUrl);
    console.log('Metrics:', metrics);
  } catch (error) {
    console.error('Error getting metrics:', error);
  }
}

// Test pods
async function testPods() {
  try {
    const pods = await kubelet.pods.getPods(baseUrl);
    console.log('Pods:', pods);
  } catch (error) {
    console.error('Error getting pods:', error);
  }
}

// Test healthz
async function testHealthz() {
  try {
    const health = await kubelet.healthz.getHealthz(baseUrl);
    console.log('Health:', health);
  } catch (error) {
    console.error('Error getting health:', error);
  }
}

// Run tests
async function runTests() {
  console.log('Testing Kubelet SDK...');
  
  await testStats();
  await testMetrics();
  await testPods();
  await testHealthz();
  
  console.log('Tests completed');
}

runTests().catch(console.error); 