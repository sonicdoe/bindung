'use strict'

const callerPath = require('caller-path')
const findUp = require('find-up')
const path = require('path')

module.exports = (target) => {
  const bindingPath = findUp.sync('binding.gyp', {
    cwd: callerPath()
  })

  if (!bindingPath) {
    throw new Error('Could not find root directory. Do you have a binding.gyp?')
  }

  target += '.node'

  const rootDir = path.dirname(bindingPath)
  const releasePath = path.join(rootDir, 'build', 'Release', target)
  const debugPath = path.join(rootDir, 'build', 'Debug', target)

  for (const addonPath of [releasePath, debugPath]) {
    try {
      return require(addonPath)
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') throw err
    }
  }

  throw new Error('Could not locate Node.js addon.')
}
