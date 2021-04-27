import { Command, flags } from '@oclif/command'
import diffOutput from '../functions/folder-diff'
import execCallback from '../functions/execute-fallback'

export default class Callback extends Command {
  static description = 'Get folder change list and pass in values to a callback'

  static examples = ['$ test-packager branch']

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [
    { name: 'branch', description: 'branch to diff against', required: true, default: 'main' },
    { name: 'callback', description: 'callback to run' }
  ]

  async run() {
    const { args } = this.parse(Callback)
    const diff = await diffOutput(args.branch)
    await execCallback(diff, args.callback)
  }
}
