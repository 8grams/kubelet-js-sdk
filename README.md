# Kubelet JavaScript SDK

A JavaScript SDK for interacting with the Kubelet API.

## Installation

```bash
npm install kubelet-js-sdk
```

## Usage

```javascript
import { Kubelet } from 'kubelet-js-sdk';

// Create a new Kubelet instance
const kubelet = new Kubelet({
  baseUrl: 'http://localhost:10250'
});

// Get list of pods
const pods = await kubelet.pods.getPods();

// Get metrics
const metrics = await kubelet.metrics.getMetrics();
const cadvisorMetrics = await kubelet.metrics.getMetricsCadvisor();

// Run a command in a container
const result = await kubelet.run.runCommand(
  'default',
  'my-pod',
  'my-container',
  'ls -la'
);

// Execute a command with stream options
const execResult = await kubelet.exec.execCommand(
  'default',
  'my-pod',
  'my-container',
  'bash',
  true,  // input
  true,  // output
  true   // tty
);
```

## API Reference

### Pods
```javascript
// Get list of pods
const pods = await kubelet.pods.getPods();
```

### Metrics
```javascript
// Get metrics
const metrics = await kubelet.metrics.getMetrics();

// Get cadvisor metrics
const cadvisorMetrics = await kubelet.metrics.getMetricsCadvisor();

// Get resource metrics
const resourceMetrics = await kubelet.metrics.getMetricsResource();

// Get probes metrics
const probesMetrics = await kubelet.metrics.getMetricsProbes();
```

### Logs
```javascript
// Get logs from path
const logs = await kubelet.logs.getLogs('path/to/logs');

// Get logs from subpath
const subpathLogs = await kubelet.logs.getLogsBySubpath('subpath');
```

### Container Logs
```javascript
// Get container logs
const containerLogs = await kubelet.containerLogs.getContainerLogs(
  'default',
  'my-pod',
  'my-container'
);
```

### Healthz
```javascript
// Get health status
const health = await kubelet.healthz.getHealthz();

// Get health check logs
const healthLogs = await kubelet.healthz.getHealthzLog();

// Ping health check
const ping = await kubelet.healthz.getHealthzPing();

// Get sync loop status
const syncLoop = await kubelet.healthz.getHealthzSyncloop();
```

### Debug
```javascript
// Get pprof profile
const profile = await kubelet.debug.getPprofProfile('heap');

// Get debug flags
const flags = await kubelet.debug.getDebugFlags();

// Set debug flags
await kubelet.debug.setDebugFlags('v=4');
```

### Stats
```javascript
// Get node and pod stats
const stats = await kubelet.stats.getStats();

// Get summary stats
const summary = await kubelet.stats.getStatsSummary(true); // only CPU and memory

// Get container stats
const containerStats = await kubelet.stats.getContainerStats();

// Get specific container stats
const podStats = await kubelet.stats.getContainerStatsByDetails(
  'default',
  'my-pod',
  'pod-uid',
  'my-container'
);
```

### Run
```javascript
// Run command in container
const result = await kubelet.run.runCommand(
  'default',
  'my-pod',
  'my-container',
  'ls -la'
);

// Run command with UID
const resultWithUid = await kubelet.run.runCommandWithUid(
  'default',
  'my-pod',
  '1000',
  'my-container',
  'whoami'
);
```

### Exec
```javascript
// Execute command with stream options
const execResult = await kubelet.exec.execCommand(
  'default',
  'my-pod',
  'my-container',
  'bash',
  true,  // input
  true,  // output
  true   // tty
);

// Execute command with UID
const execResultWithUid = await kubelet.exec.execCommandWithUid(
  'default',
  'my-pod',
  '1000',
  'my-container',
  'bash',
  true,
  true,
  true
);
```

### Attach
```javascript
// Attach to container
const attachResult = await kubelet.attach.attach(
  'default',
  'my-pod',
  'my-container',
  true,  // input
  true,  // output
  true   // tty
);
```

### Port Forward
```javascript
// Forward port to pod
const forwardResult = await kubelet.portForward.portForward(
  'default',
  'my-pod',
  8080,
  true,  // input
  true   // output
);
```

### CRI
```javascript
// Get CRI info
const criInfo = await kubelet.cri.getCriInfo();

// Get CRI version
const criVersion = await kubelet.cri.getCriVersion();

// Get CRI status
const criStatus = await kubelet.cri.getCriStatus();
```

## License

MIT 