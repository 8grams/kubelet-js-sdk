/**
 * @fileoverview Run API module for Kubelet
 * @module api/run
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for running commands in containers
 * @module api/run
 * @extends BaseApi
 */
export class RunApi extends BaseApi {
  constructor() {
    super('/run');
  }

  /**
   * Run command inside a container
   * @param {string} podNamespace - The namespace of the pod
   * @param {string} podID - The ID of the pod
   * @param {string} containerName - The name of the container
   * @param {string} command - The command to run
   * @returns {Promise<Object>} Command execution result
   */
  async runCommand(podNamespace, podID, containerName, command) {
    const formData = new FormData();
    formData.append('cmd', command);
    return this.postFormData(`/${podNamespace}/${podID}/${containerName}`, formData);
  }

  /**
   * Run command inside a container with UID
   * @param {string} podNamespace - The namespace of the pod
   * @param {string} podID - The ID of the pod
   * @param {string} uid - The UID to run the command as
   * @param {string} containerName - The name of the container
   * @param {string} command - The command to run
   * @returns {Promise<Object>} Command execution result
   */
  async runCommandWithUid(podNamespace, podID, uid, containerName, command) {
    const formData = new FormData();
    formData.append('cmd', command);
    return this.postFormData(`/${podNamespace}/${podID}/${uid}/${containerName}`, formData);
  }
}

// Create and export a singleton instance
export const run = new RunApi(); 