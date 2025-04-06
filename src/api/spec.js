/**
 * @fileoverview Spec API module for Kubelet
 * @module api/spec
 */

import { get } from '../utils/fetch.js';

/**
 * Get cached MachineInfo returned by cadvisor
 * @returns {Promise<Object>} MachineInfo data
 */
export const getSpec = async () => {
  return get('spec');
}; 