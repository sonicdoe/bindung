import test from 'ava'
import execa from 'execa'
import path from 'path'

function buildMacro (t, fixture, argument) {
  const directory = path.join(__dirname, 'fixtures', fixture)

  return execa('node-gyp', [
    'rebuild',
    '--silent',
    '--directory',
    directory,
    argument
  ]).then(() => {
    const addon = require(directory)
    t.is(addon(), 'Hello, world!')
  })
}

function throwsMacro (t, fixture, error) {
  const directory = path.join(__dirname, 'fixtures', fixture)

  t.throws(() => {
    require(directory)
  }, error)
}

test('successfully requires Release build', buildMacro, 'release', '--release')
test('successfully requires Debug build', buildMacro, 'debug', '--debug')

test(
  'throws an error if root directory could not be found',
  throwsMacro,
  'no-binding',
  /Could not find root directory/
)

test(
  'throws an error if addon could not be located',
  throwsMacro,
  'no-build',
  /Could not locate Node\.js addon/
)
