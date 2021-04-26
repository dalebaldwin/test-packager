import { promisify } from 'util'
const exec = promisify(require('child_process').exec)

const diffOutput = async (branch: string) => {
  const diff = await exec(`git diff ${branch} --name-only | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | sort | uniq`)
  const output = diff.stdout.split('\n')
  return output.filter(Boolean)
}

export default diffOutput
