/**
 * @fileoverview Healthz API module for Kubelet
 * @module api/healthz
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for health check endpoints
 * @module api/healthz
 * @extends BaseApi
 */
export class HealthzApi extends BaseApi {
  constructor() {
    super('/healthz');
  }

  /**
   * Get health status
   * @returns {Promise<string>} Health status
   */
  async getHealthz() {
    return this.get();
  }

  /**
   * Get health check logs
   * @returns {Promise<string>} Health check logs
   */
  async getHealthzLog() {
    return this.get('/log');
  }

  /**
   * Ping health check
   * @returns {Promise<string>} Ping response
   */
  async getHealthzPing() {
    return this.get('/ping');
  }

  /**
   * Get sync loop status
   * @returns {Promise<string>} Sync loop status
   */
  async getHealthzSyncloop() {
    return this.get('/syncloop');
  }
}

// Create and export a singleton instance
export const healthz = new HealthzApi(); 