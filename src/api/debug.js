/**
 * @fileoverview Debug API module for Kubelet
 * @module api/debug
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for debug endpoints
 * @module api/debug
 * @extends BaseApi
 */
export class DebugApi extends BaseApi {
  constructor() {
    super('/debug');
  }

  /**
   * Get pprof profile
   * @param {string} profile - The profile to get
   * @returns {Promise<Object>} Profile data
   */
  async getPprofProfile(profile) {
    return this.get(`/pprof/${profile}`);
  }

  /**
   * Get debug flags
   * @returns {Promise<Object>} Debug flags
   */
  async getDebugFlags() {
    return this.get('/flags');
  }

  /**
   * Set debug flags
   * @param {string} value - The value to set
   * @returns {Promise<Object>} Response
   */
  async setDebugFlags(value) {
    return this.post('/flags', { value });
  }
}

// Create and export a singleton instance
export const debug = new DebugApi(); 