import { promisify } from 'util'
import * as shell from 'shelljs'

const execCallback = async (folders: string[], callback: string) => {
  const regex = /\${folders}/i
  const processedCallback = callback.replace(regex, `${folders}`)

  // const callbackExec = await exec(processedCallback)
  // console.log(callbackExec.stdout)
  process.on('exit', () => {
    console.log(processedCallback)
    shell.exec(processedCallback)
  })
}

export default execCallback
