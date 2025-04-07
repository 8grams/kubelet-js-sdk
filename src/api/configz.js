/**
 * @fileoverview Configz API module for Kubelet
 * @module api/configz
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting Kubelet's configurations
 * @module api/configz
 * @extends BaseApi
 */
export class ConfigzApi extends BaseApi {
  /**
   * @param {string} baseUrl - The base URL for the Kubelet API
   */
  constructor(baseUrl) {
    super(baseUrl, '/configz');
  }

  /**
   * Get Kubelet's configurations
   * @returns {Promise<Object>} The Kubelet's configurations
   */
  async getConfigz() {
    return this.get();
  }
} 