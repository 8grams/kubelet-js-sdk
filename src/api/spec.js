/**
 * @fileoverview Spec API module for Kubelet
 * @module api/spec
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting cached MachineInfo returned by cadvisor
 * @module api/spec
 * @extends BaseApi
 */
export class SpecApi extends BaseApi {
  constructor() {
    super('/spec');
  }

  /**
   * Get cached MachineInfo returned by cadvisor
   * @returns {Promise<Object>} Machine information
   */
  async getSpec() {
    return this.get();
  }
}

// Create and export a singleton instance
export const spec = new SpecApi(); 