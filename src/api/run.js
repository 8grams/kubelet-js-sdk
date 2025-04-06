/**
 * @fileoverview Run API module for Kubelet
 * @module api/run
 */

import { postFormData } from '../utils/fetch.js';

/**
 * Run command inside a container
 * @param {string} podNamespace - Pod namespace
 * @param {string} podID - Pod ID
 * @param {string} containerName - Container name
 * @param {string} command - Command to run
 * @returns {Promise<Object>} Command execution result
 */
export const runCommand = async (podNamespace, podID, containerName, command) => {
  return postFormData(
    `run/${podNamespace}/${podID}/${containerName}`,
    `cmd=${encodeURIComponent(command)}`
  );
};

/**
 * Run command inside a container with UID
 * @param {string} podNamespace - Pod namespace
 * @param {string} podID - Pod ID
 * @param {string} uid - Pod UID
 * @param {string} containerName - Container name
 * @param {string} command - Command to run
 * @returns {Promise<Object>} Command execution result
 */
export const runCommandWithUid = async (podNamespace, podID, uid, containerName, command) => {
  return postFormData(
    `run/${podNamespace}/${podID}/${uid}/${containerName}`,
    `cmd=${encodeURIComponent(command)}`
  );
}; 