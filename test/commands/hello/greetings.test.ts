import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('hello:greetings', () => {
  it('runs hello:greetings cmd', async () => {
    const { error } = await runCommand('hello:greetings');
    expect(error?.message).to.contain('Missing 1 required arg:');
  });

  it('runs hello:greetings jack -h mr.', async () => {
    const { stdout } = await runCommand('hello:greetings jack -h mr.');
    expect(stdout).to.contain(', Mr. Jack');
  });
});
