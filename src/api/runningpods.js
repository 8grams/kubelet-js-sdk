/**
 * @fileoverview RunningPods API module for Kubelet
 * @module api/runningpods
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting running pods information
 * @module api/runningpods
 * @extends BaseApi
 */
export class RunningPodsApi extends BaseApi {
  constructor() {
    super('/runningpods');
  }

  /**
   * Get running pods
   * @returns {Promise<Object>} List of running pods
   */
  async getRunningPods() {
    return this.get();
  }
}

// Create and export a singleton instance
export const runningpods = new RunningPodsApi(); 