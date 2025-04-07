/**
 * @fileoverview Pods API module for Kubelet
 * @module api/pods
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting pods information
 * @module api/pods
 * @extends BaseApi
 */
export class PodsApi extends BaseApi {
  constructor() {
    super('/pods');
  }

  /**
   * Get list of pods
   * @returns {Promise<Object>} List of pods
   */
  async getPods() {
    return this.get();
  }
}

// Create and export a singleton instance
export const pods = new PodsApi(); 