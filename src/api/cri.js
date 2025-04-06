/**
 * @fileoverview CRI API module for Kubelet
 * @module api/cri
 */

import { get } from '../utils/fetch.js';

/**
 * Get CRI info
 * @returns {Promise<Object>} CRI info
 */
export const getCriInfo = async () => {
  return get('cri/info');
};

/**
 * Get CRI version
 * @returns {Promise<Object>} CRI version
 */
export const getCriVersion = async () => {
  return get('cri/version');
};

/**
 * Get CRI status
 * @returns {Promise<Object>} CRI status
 */
export const getCriStatus = async () => {
  return get('cri/status');
};

/**
 * Run commands inside a container through the Container Runtime Interface (CRI)
 * @param {string} baseUrl - Base URL of the Kubelet API
 * @param {string} valueFrom302 - Value from 302 redirect
 * @param {string} command - Command to run
 * @returns {Promise<Object>} Command execution result
 */
export const execCriCommand = async (baseUrl, valueFrom302, command) => {
  const params = new URLSearchParams({ cmd: command });
  return get(`${baseUrl}/cri/exec/${valueFrom302}?${params.toString()}`);
}; 