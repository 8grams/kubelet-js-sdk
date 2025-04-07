import { ConfigzApi } from './api/configz.js';
import { PodsApi } from './api/pods.js';
import { SpecApi } from './api/spec.js';
import { RunningPodsApi } from './api/runningpods.js';
import { MetricsApi } from './api/metrics.js';
import { LogsApi } from './api/logs.js';
import { ContainerLogsApi } from './api/containerLogs.js';
import { HealthzApi } from './api/healthz.js';
import { DebugApi } from './api/debug.js';
import { StatsApi } from './api/stats.js';
import { RunApi } from './api/run.js';
import { ExecApi } from './api/exec.js';
import { AttachApi } from './api/attach.js';
import { CriApi } from './api/cri.js';
import { PortForwardApi } from './api/portForward.js';

/**
 * Kubelet SDK main class
 */
export class Kubelet {
  /**
   * Create a new Kubelet instance
   * @param {Object} options - Configuration options
   * @param {string} options.baseUrl - The base URL of the Kubelet API
   */
  constructor(options) {
    if (!options.baseUrl) {
      throw new Error('baseUrl is required');
    }

    this.baseUrl = options.baseUrl;

    // Initialize API modules with baseUrl
    this.configz = new ConfigzApi(this.baseUrl);
    this.pods = new PodsApi(this.baseUrl);
    this.spec = new SpecApi(this.baseUrl);
    this.runningpods = new RunningPodsApi(this.baseUrl);
    this.metrics = new MetricsApi(this.baseUrl);
    this.logs = new LogsApi(this.baseUrl);
    this.containerLogs = new ContainerLogsApi(this.baseUrl);
    this.healthz = new HealthzApi(this.baseUrl);
    this.debug = new DebugApi(this.baseUrl);
    this.stats = new StatsApi(this.baseUrl);
    this.run = new RunApi(this.baseUrl);
    this.exec = new ExecApi(this.baseUrl);
    this.attach = new AttachApi(this.baseUrl);
    this.cri = new CriApi(this.baseUrl);
    this.portForward = new PortForwardApi(this.baseUrl);
  }
} 