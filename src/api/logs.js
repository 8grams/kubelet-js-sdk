/**
 * @fileoverview Logs API module for Kubelet
 * @module api/logs
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting logs information
 * @module api/logs
 * @extends BaseApi
 */
export class LogsApi extends BaseApi {
  constructor() {
    super('/logs');
  }

  /**
   * Get logs from the specified path
   * @param {string} path - The path to get logs from
   * @returns {Promise<string>} Logs data
   */
  async getLogs(path) {
    return this.get(`/${path}`);
  }

  /**
   * Get logs from the specified subpath
   * @param {string} subpath - The subpath to get logs from
   * @returns {Promise<string>} Logs data
   */
  async getLogsBySubpath(subpath) {
    return this.get(`/${subpath}`);
  }
}

// Create and export a singleton instance
export const logs = new LogsApi(); 