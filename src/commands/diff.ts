import { Command, flags } from "@oclif/command";

export default class GitDiff extends Command {
  static description =
    "Git the git diff between this branch and the target branch";

  static examples = [`$ test-packager`];

  static flags = {
    help: flags.help({ char: "h" }),
    // branch: flags.string({ char: "b", description: "target branch" }),
  };

  static args = [{ name: "branch" }];

  async run() {
    const { args, flags } = this.parse(GitDiff);

    if (args) {
      console.log(args);
    }
  }
}
