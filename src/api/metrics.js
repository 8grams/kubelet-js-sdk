/**
 * @fileoverview Metrics API module for Kubelet
 * @module api/metrics
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting metrics information
 * @module api/metrics
 * @extends BaseApi
 */
export class MetricsApi extends BaseApi {
  constructor() {
    super('/metrics');
  }

  /**
   * Get metrics
   * @returns {Promise<Object>} Metrics data
   */
  async getMetrics() {
    return this.get();
  }

  /**
   * Get cadvisor metrics
   * @returns {Promise<Object>} Cadvisor metrics data
   */
  async getMetricsCadvisor() {
    return this.get('/cadvisor');
  }

  /**
   * Get resource metrics
   * @returns {Promise<Object>} Resource metrics data
   */
  async getMetricsResource() {
    return this.get('/resource');
  }

  /**
   * Get probes metrics
   * @returns {Promise<Object>} Probes metrics data
   */
  async getMetricsProbes() {
    return this.get('/probes');
  }
}

// Create and export a singleton instance
export const metrics = new MetricsApi(); 