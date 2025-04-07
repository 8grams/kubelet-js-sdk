/**
 * @fileoverview PortForward API module for Kubelet
 * @module api/portForward
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for port forwarding
 * @module api/portForward
 * @extends BaseApi
 */
export class PortForwardApi extends BaseApi {
  /**
   * @param {string} baseUrl - The base URL for the Kubelet API
   */
  constructor(baseUrl) {
    super(baseUrl, '/portForward');
  }

  /**
   * Forward ports to a container
   * @param {string} podNamespace - Namespace of the pod
   * @param {string} podID - ID of the pod
   * @param {string} containerName - Name of the container
   * @returns {Promise<Object>} The port forward response
   */
  async portForward(podNamespace, podID, containerName) {
    return this.get(`/${podNamespace}/${podID}/${containerName}`);
  }

  /**
   * Forward ports to a container with UID
   * @param {string} podNamespace - Namespace of the pod
   * @param {string} podID - ID of the pod
   * @param {string} uid - UID of the container
   * @param {string} containerName - Name of the container
   * @returns {Promise<Object>} The port forward response
   */
  async portForwardWithUid(podNamespace, podID, uid, containerName) {
    return this.get(`/${podNamespace}/${podID}/${uid}/${containerName}`);
  }
} 