/**
 * @fileoverview RunningPods API module for Kubelet
 * @module api/runningpods
 */

import { get } from '../utils/fetch.js';

/**
 * Get running pods
 * @returns {Promise<Object>} Running pods data
 */
export const getRunningPods = async () => {
  return get('runningpods');
}; 