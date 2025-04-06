/**
 * @fileoverview Kubelet JavaScript SDK
 * @module kubelet-js-sdk
 */

import * as stats from './api/stats.js';
import * as metrics from './api/metrics.js';
import * as logs from './api/logs.js';
import * as spec from './api/spec.js';
import * as pods from './api/pods.js';
import * as healthz from './api/healthz.js';
import * as configz from './api/configz.js';
import * as containerLogs from './api/containerLogs.js';
import * as run from './api/run.js';
import * as exec from './api/exec.js';
import * as cri from './api/cri.js';
import * as attach from './api/attach.js';
import * as portForward from './api/portForward.js';
import * as runningpods from './api/runningpods.js';
import * as debug from './api/debug.js';

export {
  stats,
  metrics,
  logs,
  spec,
  pods,
  healthz,
  configz,
  containerLogs,
  run,
  exec,
  cri,
  attach,
  portForward,
  runningpods,
  debug
}; 