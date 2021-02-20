'use strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'coverage',
  ],
  dep: [
    'egg',
    '@rickyli79/koa-openapi-router'
  ],
  devdep: [
    'autod-egg',
    'egg-bin',
    'tslib',
    'typescript',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
