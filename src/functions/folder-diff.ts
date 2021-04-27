import { promisify } from 'util'
const exec = promisify(require('child_process').exec)

const diffOutput = async (branch: string, root: boolean) => {
  const diff = await exec(`git diff ${branch} --name-only | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | sort | uniq`)
  const output = diff.stdout.split('\n')
  if (root) {
    const removeRoot = output.filter((item: string) => item !== '.')
    return removeRoot.filter(Boolean)
  } else {
    return output.filter(Boolean)
  }
}

export default diffOutput
