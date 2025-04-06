/**
 * @fileoverview Healthz API module for Kubelet
 * @module api/healthz
 */

import { get } from '../utils/fetch.js';

/**
 * Get health status
 * @returns {Promise<string>} The health status as text
 */
export const getHealthz = async () => {
  return get('healthz', {}, true);
};

/**
 * Get health check logs
 * @returns {Promise<string>} The health check logs as text
 */
export const getHealthzLog = async () => {
  return get('healthz/log', {}, true);
};

/**
 * Ping health check
 * @returns {Promise<string>} The ping response as text
 */
export const getHealthzPing = async () => {
  return get('healthz/ping', {}, true);
};

/**
 * Get sync loop status
 * @returns {Promise<string>} The sync loop status as text
 */
export const getHealthzSyncloop = async () => {
  return get('healthz/syncloop', {}, true);
}; 