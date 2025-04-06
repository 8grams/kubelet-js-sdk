/**
 * @fileoverview ContainerLogs API module for Kubelet
 * @module api/containerLogs
 */

import { get } from '../utils/fetch.js';

/**
 * Get container logs
 * @param {string} podNamespace - The namespace of the pod
 * @param {string} podID - The ID of the pod
 * @param {string} containerName - The name of the container
 * @returns {Promise<string>} The container logs as text
 */
export const getContainerLogs = async (podNamespace, podID, containerName) => {
  return get(`containerLogs/${podNamespace}/${podID}/${containerName}`, {}, true);
}; 