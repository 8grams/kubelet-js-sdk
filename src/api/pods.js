/**
 * @fileoverview Pods API module for Kubelet
 * @module api/pods
 */

import { get } from '../utils/fetch.js';

/**
 * Get list of pods
 * @returns {Promise<Object>} List of pods
 */
export const getPods = async () => {
  return get('pods');
}; 