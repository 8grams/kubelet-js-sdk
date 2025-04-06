/**
 * @fileoverview Exec API module for Kubelet
 * @module api/exec
 */

import { get } from '../utils/fetch.js';

/**
 * Run command inside a container with stream options
 * @param {string} podNamespace - Pod namespace
 * @param {string} podID - Pod ID
 * @param {string} containerName - Container name
 * @param {string} command - Command to run
 * @param {boolean} [input=true] - Enable input stream
 * @param {boolean} [output=true] - Enable output stream
 * @param {boolean} [tty=true] - Enable TTY
 * @returns {Promise<Object>} Command execution result
 */
export const execCommand = async (podNamespace, podID, containerName, command, input = true, output = true, tty = true) => {
  const params = new URLSearchParams({
    command,
    input: input ? '1' : '0',
    output: output ? '1' : '0',
    tty: tty ? '1' : '0'
  });
  return get(`exec/${podNamespace}/${podID}/${containerName}?${params.toString()}`);
};

/**
 * Run command inside a container with stream options and UID
 * @param {string} podNamespace - Pod namespace
 * @param {string} podID - Pod ID
 * @param {string} uid - Pod UID
 * @param {string} containerName - Container name
 * @param {string} command - Command to run
 * @param {boolean} [input=true] - Enable input stream
 * @param {boolean} [output=true] - Enable output stream
 * @param {boolean} [tty=true] - Enable TTY
 * @returns {Promise<Object>} Command execution result
 */
export const execCommandWithUid = async (podNamespace, podID, uid, containerName, command, input = true, output = true, tty = true) => {
  const params = new URLSearchParams({
    command,
    input: input ? '1' : '0',
    output: output ? '1' : '0',
    tty: tty ? '1' : '0'
  });
  return get(`exec/${podNamespace}/${podID}/${uid}/${containerName}?${params.toString()}`);
}; 