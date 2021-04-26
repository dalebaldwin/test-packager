import { Command, flags } from '@oclif/command'
import diffOutput from '../functions/folderDiff'

export default class GitDiff extends Command {
  static description = 'Git the git diff between this branch and the target branch'

  static examples = [`$ test-packager branch`]

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [{ name: 'branch', description: 'branch to diff against', required: true, default: 'main' }]

  async run() {
    const { args, flags } = this.parse(GitDiff)
    const diff = await diffOutput(args.branch)
    console.log(diff)
  }
}
