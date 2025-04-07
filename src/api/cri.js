/**
 * @fileoverview CRI API module for Kubelet
 * @module api/cri
 */

import { BaseApi } from './BaseApi.js';

/**
 * API for Container Runtime Interface (CRI)
 * @module api/cri
 * @extends BaseApi
 */
export class CriApi extends BaseApi {
  /**
   * @param {string} baseUrl - The base URL for the Kubelet API
   */
  constructor(baseUrl) {
    super(baseUrl, '/cri');
  }

  /**
   * Get CRI info
   * @returns {Promise<Object>} CRI info
   */
  async getCriInfo() {
    return this.get();
  }

  /**
   * Get CRI version
   * @returns {Promise<Object>} CRI version
   */
  async getCriVersion() {
    return this.get('/version');
  }

  /**
   * Get CRI status
   * @returns {Promise<Object>} CRI status
   */
  async getCriStatus() {
    return this.get('/status');
  }

  /**
   * Execute a CRI command
   * @param {string} valueFrom302 - Value from 302 redirect
   * @param {string} command - Command to execute
   * @returns {Promise<Object>} The CRI command response
   */
  async execCriCommand(valueFrom302, command) {
    const params = new URLSearchParams();
    params.append('command', command);
    return this.get(`/exec/${valueFrom302}?${params.toString()}`);
  }
} 