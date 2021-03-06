### Test Packager

Package up your tests based on changes in your project. This tool will find the folders with changes and allows you to pass that information into your test commands to narrow down tests to only the ones that relate to your changes.

=============

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/test-packager.svg)](https://npmjs.org/package/test-packager)
[![Downloads/week](https://img.shields.io/npm/dw/test-packager.svg)](https://npmjs.org/package/test-packager)
[![License](https://img.shields.io/npm/l/test-packager.svg)](https://github.com/dalebaldwin/test-packager/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g test-packager
$ test-packager COMMAND
running command...
$ test-packager (-v|--version|version)
test-packager/0.0.2 darwin-x64 node-v12.18.2
$ test-packager --help [COMMAND]
USAGE
  $ test-packager COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`test-packager callback BRANCH [CALLBACK]`](#test-packager-callback-branch-callback)
- [`test-packager diff BRANCH`](#test-packager-diff-branch)
- [`test-packager help [COMMAND]`](#test-packager-help-command)

## `test-packager callback BRANCH [CALLBACK]`

Get folder change list and pass in values to a callback

```
USAGE
  $ test-packager callback BRANCH [CALLBACK]

ARGUMENTS
  BRANCH    branch to diff against
  CALLBACK  callback to run

OPTIONS
  -c, --comma  split folder paths by comma
  -h, --help   show CLI help
  -s, --space  split folder paths by space

EXAMPLE
  $ test-packager branch
```

_See code: [src/commands/callback.ts](https://github.com/dalebaldwin/test-packager/blob/v0.0.2/src/commands/callback.ts)_

## `test-packager diff BRANCH`

Get the git diff between this branch and the target branch

```
USAGE
  $ test-packager diff BRANCH

ARGUMENTS
  BRANCH  [default: main] branch to diff against

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ test-packager branch
```

_See code: [src/commands/diff.ts](https://github.com/dalebaldwin/test-packager/blob/v0.0.2/src/commands/diff.ts)_

## `test-packager help [COMMAND]`

display help for test-packager

```
USAGE
  $ test-packager help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
