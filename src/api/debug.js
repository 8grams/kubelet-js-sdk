/**
 * @fileoverview Debug API module for Kubelet
 * @module api/debug
 */

import { get, put } from '../utils/fetch.js';

/**
 * Get pprof profile
 * @param {string} profile - Profile name
 * @returns {Promise<Object>} Profile data
 */
export const getPprofProfile = async (profile) => {
  return get(`debug/pprof/${profile}`);
};

/**
 * Get debug flags
 * @returns {Promise<Object>} Debug flags
 */
export const getDebugFlags = async () => {
  return get('debug/flags/v');
};

/**
 * Set debug flags
 * @param {number} value - Debug level value
 * @returns {Promise<Object>} Debug flags update result
 */
export const setDebugFlags = async (value) => {
  return put('debug/flags/v', value);
}; 