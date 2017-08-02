const c9m = require('c9m');
const os = require('os');

class Sensor extends c9m.Sensor {

  constructor () {
    super();
    this.name = 'system-info';
    this.static = true;
  }

  measure () {
    this.emit('value', {
      cpuArch: os.arch(),
      cpus: os.cpus().length,
      hostname: os.hostname(),
      nodeVersion: process.version,
      os: os.type(),
      platform: os.platform(),
      up: new Date(Date.now() - (os.uptime() * 1000)).toISOString()
    });
  }
}

module.exports = Sensor;
