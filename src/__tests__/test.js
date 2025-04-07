import { Kubelet } from '../index.js';

describe('Kubelet SDK', () => {
  const baseUrl = 'http://localhost:10250'; // Replace with your Kubelet API URL
  const kubelet = new Kubelet({ baseUrl });

  describe('Stats API', () => {
    it('should get stats', async () => {
      const stats = await kubelet.stats.getStats();
      expect(stats).toBeDefined();
      expect(typeof stats).toBe('object');
    });
  });

  describe('Metrics API', () => {
    it('should get metrics', async () => {
      const metrics = await kubelet.metrics.getMetrics();
      expect(metrics).toBeDefined();
      expect(typeof metrics).toBe('object');
    });
  });

  describe('Pods API', () => {
    it('should get pods', async () => {
      const pods = await kubelet.pods.getPods();
      expect(pods).toBeDefined();
      expect(Array.isArray(pods)).toBe(true);
    });
  });

  describe('Healthz API', () => {
    it('should get health status', async () => {
      const health = await kubelet.healthz.getHealthz();
      expect(health).toBeDefined();
      expect(typeof health).toBe('object');
    });
  });
}); 