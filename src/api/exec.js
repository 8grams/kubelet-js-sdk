/**
 * @fileoverview Exec API module for Kubelet
 * @module api/exec
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for executing commands in containers
 * @module api/exec
 * @extends BaseApi
 */
export class ExecApi extends BaseApi {
  constructor() {
    super('/exec');
  }

  /**
   * Run command inside a container with stream options
   * @param {string} podNamespace - The namespace of the pod
   * @param {string} podID - The ID of the pod
   * @param {string} containerName - The name of the container
   * @param {string} command - The command to run
   * @param {boolean} [input=true] - Whether to enable input stream
   * @param {boolean} [output=true] - Whether to enable output stream
   * @param {boolean} [tty=true] - Whether to enable TTY
   * @returns {Promise<Object>} Command execution result
   */
  async execCommand(podNamespace, podID, containerName, command, input = true, output = true, tty = true) {
    const params = new URLSearchParams();
    params.append('command', command);
    params.append('input', input.toString());
    params.append('output', output.toString());
    params.append('tty', tty.toString());
    return this.get(`/${podNamespace}/${podID}/${containerName}?${params.toString()}`);
  }

  /**
   * Run command inside a container with stream options and UID
   * @param {string} podNamespace - The namespace of the pod
   * @param {string} podID - The ID of the pod
   * @param {string} uid - The UID to run the command as
   * @param {string} containerName - The name of the container
   * @param {string} command - The command to run
   * @param {boolean} [input=true] - Whether to enable input stream
   * @param {boolean} [output=true] - Whether to enable output stream
   * @param {boolean} [tty=true] - Whether to enable TTY
   * @returns {Promise<Object>} Command execution result
   */
  async execCommandWithUid(podNamespace, podID, uid, containerName, command, input = true, output = true, tty = true) {
    const params = new URLSearchParams();
    params.append('command', command);
    params.append('input', input.toString());
    params.append('output', output.toString());
    params.append('tty', tty.toString());
    return this.get(`/${podNamespace}/${podID}/${uid}/${containerName}?${params.toString()}`);
  }
}

// Create and export a singleton instance
export const exec = new ExecApi(); 