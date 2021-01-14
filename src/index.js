const debug = require('debug');

module.exports = prefix => {
  return {
    info: debug(`${prefix}:info`),
    error: debug(`${prefix}:error`),
    warning: debug(`${prefix}:warning`),
    dev: debug(`${prefix}:dev`),
  };
};
