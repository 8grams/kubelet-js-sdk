/**
 * @fileoverview Configz API module for Kubelet
 * @module api/configz
 */

import { get } from '../utils/fetch.js';

/**
 * Get Kubelet's configurations
 * @returns {Promise<Object>} Kubelet configurations
 */
export const getConfigz = async () => {
  return get('configz');
}; 