# Kubelet JavaScript SDK

A JavaScript SDK for interacting with the Kubelet API.

## Installation

```bash
npm install kubelet-js-sdk
```

## Usage

```javascript
import { setBaseUrl } from 'kubelet-js-sdk';
import { getPods, getMetrics } from 'kubelet-js-sdk';

// Set the base URL for the Kubelet API
setBaseUrl('http://localhost:10250');

// Get list of pods
const pods = await getPods();

// Get metrics
const metrics = await getMetrics();
```

## API Reference

### Pods
- `getPods()` - Get list of pods

### Metrics
- `getMetrics()` - Get metrics
- `getMetricsCadvisor()` - Get cadvisor metrics
- `getMetricsResource()` - Get resource metrics
- `getMetricsProbes()` - Get probes metrics

### Logs
- `getLogs(path)` - Get logs from the specified path
- `getLogsBySubpath(subpath)` - Get logs from the specified subpath

### Container Logs
- `getContainerLogs(podNamespace, podID, containerName)` - Get container logs

### Healthz
- `getHealthz()` - Get health status
- `getHealthzLog()` - Get health check logs
- `getHealthzPing()` - Ping health check
- `getHealthzSyncloop()` - Get sync loop status

### Debug
- `getPprofProfile(profile)` - Get pprof profile
- `getDebugFlags()` - Get debug flags
- `setDebugFlags(value)` - Set debug flags

### Stats
- `getStats()` - Get node, pods and containers performance stats
- `getStatsSummary(onlyCpuAndMemory)` - Get summary of stats
- `getContainerStats()` - Get container stats
- `getContainerStatsByDetails(namespace, podName, uid, containerName)` - Get specific container stats
- `getContainerStatsByName(podName, containerName)` - Get specific container stats

### Spec
- `getSpec()` - Get cached MachineInfo returned by cadvisor

### Configz
- `getConfigz()` - Get Kubelet's configurations

### Run
- `runCommand(podNamespace, podID, containerName, command)` - Run command inside a container
- `runCommandWithUid(podNamespace, podID, uid, containerName, command)` - Run command inside a container with UID

### Exec
- `execCommand(podNamespace, podID, containerName, command, input, output, tty)` - Run command inside a container with stream options
- `execCommandWithUid(podNamespace, podID, uid, containerName, command, input, output, tty)` - Run command inside a container with stream options and UID

### CRI
- `getCriInfo()` - Get CRI info
- `getCriVersion()` - Get CRI version
- `getCriStatus()` - Get CRI status

### Attach
- `attach(podNamespace, podID, containerName)` - Attach to a container

### Port Forward
- `portForward(podNamespace, podID, port)` - Forward a port to a pod

### Running Pods
- `getRunningPods()` - Get running pods

## License

MIT 