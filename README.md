test-packager
=============

Package up tests based on git diff

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/test-packager.svg)](https://npmjs.org/package/test-packager)
[![Downloads/week](https://img.shields.io/npm/dw/test-packager.svg)](https://npmjs.org/package/test-packager)
[![License](https://img.shields.io/npm/l/test-packager.svg)](https://github.com/dalebaldwin/test-packager/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g test-packager
$ test-packager COMMAND
running command...
$ test-packager (-v|--version|version)
test-packager/0.0.0 darwin-x64 node-v12.18.2
$ test-packager --help [COMMAND]
USAGE
  $ test-packager COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`test-packager hello [FILE]`](#test-packager-hello-file)
* [`test-packager help [COMMAND]`](#test-packager-help-command)

## `test-packager hello [FILE]`

describe the command here

```
USAGE
  $ test-packager hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ test-packager hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/dalebaldwin/test-packager/blob/v0.0.0/src/commands/hello.ts)_

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
