/**
 * Asset syncing tasks.
 */

module.exports = function (gruntOrShipit) {
  require('./pull')(gruntOrShipit);
  require('./push')(gruntOrShipit);
};
