/**
 * @fileoverview Logs API module for Kubelet
 * @module api/logs
 */

import { get } from '../utils/fetch.js';

/**
 * Get logs from the specified path
 * @param {string} path - The path to get logs from
 * @returns {Promise<string>} The logs as text
 */
export const getLogs = async (path) => {
  return get(`logs/${path}`, {}, true);
};

/**
 * Get logs from the specified subpath
 * @param {string} subpath - The subpath to get logs from
 * @returns {Promise<string>} The logs as text
 */
export const getLogsBySubpath = async (subpath) => {
  return get(`logs/${subpath}`, {}, true);
}; 