/**
 * @fileoverview Metrics API module for Kubelet
 * @module api/metrics
 */

import { get } from '../utils/fetch.js';

/**
 * Get metrics
 * @returns {Promise<Object>} Metrics data
 */
export const getMetrics = async () => {
  return get('metrics');
};

/**
 * Get metrics cadvisor
 * @returns {Promise<Object>} Cadvisor metrics data
 */
export const getMetricsCadvisor = async () => {
  return get('metrics/cadvisor');
};

/**
 * Get metrics resource
 * @returns {Promise<Object>} Resource metrics data
 */
export const getMetricsResource = async () => {
  return get('metrics/resource');
};

/**
 * Get metrics probes
 * @returns {Promise<Object>} Probes metrics data
 */
export const getMetricsProbes = async () => {
  return get('metrics/probes');
}; 