/**
 * @fileoverview Attach API module for Kubelet
 * @module api/attach
 */

import { post } from '../utils/fetch.js';

/**
 * Attach to a container
 * @param {string} podNamespace - The namespace of the pod
 * @param {string} podID - The ID of the pod
 * @param {string} containerName - The name of the container
 * @returns {Promise<Object>} Attach result
 */
export const attach = async (podNamespace, podID, containerName) => {
  return post(`attach/${podNamespace}/${podID}/${containerName}`);
};

/**
 * Attach to a container with UID
 * @param {string} baseUrl - Base URL of the Kubelet API
 * @param {string} podNamespace - Pod namespace
 * @param {string} podID - Pod ID
 * @param {string} uid - Pod UID
 * @param {string} containerName - Container name
 * @returns {Promise<Object>} Attachment result
 */
export const attachToContainerWithUid = async (baseUrl, podNamespace, podID, uid, containerName) => {
  return get(`${baseUrl}/attach/${podNamespace}/${podID}/${uid}/${containerName}`);
}; 