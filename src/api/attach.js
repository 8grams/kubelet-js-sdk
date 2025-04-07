/**
 * @fileoverview Attach API module for Kubelet
 * @module api/attach
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for attaching to containers
 * @module api/attach
 * @extends BaseApi
 */
export class AttachApi extends BaseApi {
  /**
   * @param {string} baseUrl - The base URL for the Kubelet API
   */
  constructor(baseUrl) {
    super(baseUrl, '/attach');
  }

  /**
   * Attach to a container
   * @param {string} podNamespace - Namespace of the pod
   * @param {string} podID - ID of the pod
   * @param {string} containerName - Name of the container
   * @param {boolean} [input=true] - Whether to enable input stream
   * @param {boolean} [output=true] - Whether to enable output stream
   * @param {boolean} [tty=true] - Whether to enable TTY
   * @returns {Promise<Object>} Attach result
   */
  async attach(podNamespace, podID, containerName, input = true, output = true, tty = true) {
    const params = new URLSearchParams();
    params.append('input', input.toString());
    params.append('output', output.toString());
    params.append('tty', tty.toString());
    return this.get(`/${podNamespace}/${podID}/${containerName}?${params.toString()}`);
  }

  /**
   * Attach to a container with UID
   * @param {string} podNamespace - Namespace of the pod
   * @param {string} podID - ID of the pod
   * @param {string} uid - UID of the container
   * @param {string} containerName - Name of the container
   * @returns {Promise<Object>} Attachment result
   */
  async attachToContainerWithUid(podNamespace, podID, uid, containerName) {
    return this.get(`/${podNamespace}/${podID}/${uid}/${containerName}`);
  }
} 