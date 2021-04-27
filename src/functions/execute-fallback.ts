import { promisify } from 'util'
const exec = promisify(require('child_process').exec)

const execCallback = async (folders: string[], callback: string) => {
  const regex = /\${folders}/i
  const processedCallback = callback.replace(regex, `${folders}`)
  const callbackExec = await exec(processedCallback)
  console.log(callbackExec.stdout)
}

export default execCallback
