/**
 * @fileoverview Stats API module for Kubelet
 * @module api/stats
 */

import { get } from '../utils/fetch.js';

/**
 * Get node, pods and containers performance stats
 * @returns {Promise<Object>} Stats data
 */
export const getStats = async () => {
  return get('stats');
};

/**
 * Get summary of stats
 * @param {boolean} [onlyCpuAndMemory=false] - Whether to only return CPU and memory stats
 * @returns {Promise<Object>} Summary stats data
 */
export const getStatsSummary = async (onlyCpuAndMemory = false) => {
  const params = new URLSearchParams();
  if (onlyCpuAndMemory) {
    params.append('only_cpu_and_memory', 'true');
  }
  return get(`stats/summary?${params.toString()}`);
};

/**
 * Get container stats
 * @returns {Promise<Object>} Container stats data
 */
export const getContainerStats = async () => {
  return get('stats/container');
};

/**
 * Get specific container stats by namespace, pod name, uid and container name
 * @param {string} namespace - Pod namespace
 * @param {string} podName - Pod name
 * @param {string} uid - Pod UID
 * @param {string} containerName - Container name
 * @returns {Promise<Object>} Container stats data
 */
export const getContainerStatsByDetails = async (namespace, podName, uid, containerName) => {
  return get(`stats/${namespace}/${podName}/${uid}/${containerName}`);
};

/**
 * Get specific container stats by pod name and container name
 * @param {string} podName - Pod name
 * @param {string} containerName - Container name
 * @returns {Promise<Object>} Container stats data
 */
export const getContainerStatsByName = async (podName, containerName) => {
  return get(`stats/${podName}/${containerName}`);
}; 