/**
 * @fileoverview Kubelet JavaScript SDK
 * @module kubelet-js-sdk
 */

import { setBaseUrl } from './utils/fetch.js';

// Export API instances
export { configz } from './api/configz.js';
export { pods } from './api/pods.js';
export { spec } from './api/spec.js';
export { runningpods } from './api/runningpods.js';
export { metrics } from './api/metrics.js';
export { logs } from './api/logs.js';
export { containerLogs } from './api/containerLogs.js';
export { healthz } from './api/healthz.js';
export { debug } from './api/debug.js';
export { stats } from './api/stats.js';
export { run } from './api/run.js';
export { exec } from './api/exec.js';
export { attach } from './api/attach.js';
export { cri } from './api/cri.js';
export { portForward } from './api/portForward.js';

// Export utility functions
export { setBaseUrl };

export { Kubelet } from './Kubelet.js'; 