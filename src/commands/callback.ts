import { Command, flags } from '@oclif/command'
import diffOutput from '../functions/folder-diff'
import execCallback from '../functions/execute-callback'

export default class Callback extends Command {
  static description = 'Get folder change list and pass in values to a callback'

  static examples = ['$ test-packager branch']

  static flags = {
    help: flags.help({ char: 'h' }),
    comma: flags.boolean({ char: 'c', description: 'split folder paths by comma' }),
    space: flags.boolean({ char: 's', description: 'split folder paths by space' }),
    includeRoot: flags.boolean({ char: 'i', description: 'include root directory in output', default: false })
  }

  static args = [
    { name: 'branch', description: 'branch to diff against', required: true },
    { name: 'callback', description: 'callback to run' }
  ]

  async run() {
    const { args, flags } = this.parse(Callback)
    const diff = await diffOutput(args.branch, flags.includeRoot)
    const fileListComma = diff.toString()
    const fileListSpace = diff.join(' ')

    if (flags.comma) {
      await execCallback(fileListComma, args.callback)
    } else if (flags.space) {
      await execCallback(fileListSpace, args.callback)
    } else {
      await execCallback(diff, args.callback)
    }
  }
}
