/* jshint node: true */

module.exports = function (deployTarget) {
  var ENV = {
    build: {}
  }

  ENV['gh-pages'] = {
    force: true
  }
    // include other plugin configuration that applies to all deploy targets here
  ENV.build.environment = deployTarget

  return ENV
}
