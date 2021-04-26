import { Command, flags } from '@oclif/command'
import { exec } from 'child_process'

export default class GitDiff extends Command {
  static description = 'Git the git diff between this branch and the target branch'

  static examples = [`$ test-packager`]

  static flags = {
    help: flags.help({ char: 'h' })
    // branch: flags.string({ char: "b", description: "target branch" }),
  }

  static args = [{ name: 'branch' }, { name: 'target branch' }]

  async run() {
    const { args, flags } = this.parse(GitDiff)
    console.log(args)
    // git diff --dirstat=files,0 HEAD~1
    exec(`git diff --name-only HEAD~1 | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | sort | uniq`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(stdout)
    })
  }
}
