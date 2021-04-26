import { Command, flags } from '@oclif/command'
import { exec } from 'child_process'

export default class GitDiff extends Command {
  static description = 'Git the git diff between this branch and the target branch'

  static examples = [`$ test-packager branch`]

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [{ name: 'branch', description: 'branch to diff against', required: true, default: 'main' }]

  async run() {
    const { args, flags } = this.parse(GitDiff)

    exec(
      `git diff ${args.branch} --name-only | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | sort | uniq`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`)
          return
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`)
          return
        }
        const folders = stdout.split('\n')
        const filtered = folders.filter(Boolean)
        console.log(filtered)
      }
    )
  }
}
