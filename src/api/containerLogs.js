/**
 * @fileoverview ContainerLogs API module for Kubelet
 * @module api/containerLogs
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting container logs
 * @module api/containerLogs
 * @extends BaseApi
 */
export class ContainerLogsApi extends BaseApi {
  constructor() {
    super('/containerLogs');
  }

  /**
   * Get container logs
   * @param {string} podNamespace - The namespace of the pod
   * @param {string} podID - The ID of the pod
   * @param {string} containerName - The name of the container
   * @returns {Promise<string>} Container logs
   */
  async getContainerLogs(podNamespace, podID, containerName) {
    return this.get(`/${podNamespace}/${podID}/${containerName}`);
  }
}

// Create and export a singleton instance
export const containerLogs = new ContainerLogsApi(); 