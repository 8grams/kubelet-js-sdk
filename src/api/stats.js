/**
 * @fileoverview Stats API module for Kubelet
 * @module api/stats
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for getting stats information
 * @module api/stats
 * @extends BaseApi
 */
export class StatsApi extends BaseApi {
  constructor() {
    super('/stats');
  }

  /**
   * Get node, pods and containers performance stats
   * @returns {Promise<Object>} Stats data
   */
  async getStats() {
    return this.get();
  }

  /**
   * Get summary of stats
   * @param {boolean} [onlyCpuAndMemory=false] - Whether to only get CPU and memory stats
   * @returns {Promise<Object>} Summary stats
   */
  async getStatsSummary(onlyCpuAndMemory = false) {
    const params = new URLSearchParams();
    if (onlyCpuAndMemory) {
      params.append('only_cpu_and_memory', 'true');
    }
    return this.get(`/summary?${params.toString()}`);
  }

  /**
   * Get container stats
   * @returns {Promise<Object>} Container stats
   */
  async getContainerStats() {
    return this.get('/container');
  }

  /**
   * Get specific container stats by details
   * @param {string} namespace - The namespace of the pod
   * @param {string} podName - The name of the pod
   * @param {string} uid - The UID of the pod
   * @param {string} containerName - The name of the container
   * @returns {Promise<Object>} Container stats
   */
  async getContainerStatsByDetails(namespace, podName, uid, containerName) {
    return this.get(`/${namespace}/${podName}/${uid}/${containerName}`);
  }

  /**
   * Get specific container stats by name
   * @param {string} podName - The name of the pod
   * @param {string} containerName - The name of the container
   * @returns {Promise<Object>} Container stats
   */
  async getContainerStatsByName(podName, containerName) {
    return this.get(`/${podName}/${containerName}`);
  }
}

// Create and export a singleton instance
export const stats = new StatsApi(); 