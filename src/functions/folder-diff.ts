import { promisify } from 'util'
const exec = promisify(require('child_process').exec)

const diffOutput = async (branch: string, root: boolean) => {
  const diff = await exec(`git diff ${branch} --name-only | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | sort | uniq`)
  const output = diff.stdout.split('\n')
  if (root) {
    return output.filter(Boolean)
  } else {
    const removeRoot = output.filter((item: string) => item !== '.')
    return removeRoot.filter(Boolean)
  }
}

export default diffOutput
