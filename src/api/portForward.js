/**
 * @fileoverview PortForward API module for Kubelet
 * @module api/portForward
 */

import { post } from '../utils/fetch.js';

/**
 * Forward a port to a pod
 * @param {string} podNamespace - The namespace of the pod
 * @param {string} podID - The ID of the pod
 * @param {number} port - The port to forward
 * @returns {Promise<Object>} Port forward result
 */
export const portForward = async (podNamespace, podID, port) => {
  return post(`portForward/${podNamespace}/${podID}/${port}`);
};

/**
 * Port forwarding inside the container with UID
 * @param {string} baseUrl - Base URL of the Kubelet API
 * @param {string} podNamespace - Pod namespace
 * @param {string} podID - Pod ID
 * @param {string} uid - Pod UID
 * @param {string} containerName - Container name
 * @returns {Promise<Object>} Port forwarding result
 */
export const portForwardWithUid = async (baseUrl, podNamespace, podID, uid, containerName) => {
  return get(`${baseUrl}/portForward/${podNamespace}/${podID}/${uid}/${containerName}`);
}; 