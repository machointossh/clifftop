import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('hello:greetings', () => {
  it('runs hello:greetings cmd', async () => {
    const {stdout} = await runCommand('hello:greetings')
    expect(stdout).to.contain('hello world')
  })

  it('runs hello:greetings --name oclif', async () => {
    const {stdout} = await runCommand('hello:greetings --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
