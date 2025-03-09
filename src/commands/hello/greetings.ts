import {getGreetings} from '@/utils/greetings';
import {capitalizeFirstLetter} from '@/utils/strings.js';
import {Args, Command, Flags} from '@oclif/core';

export default class HelloGreetings extends Command {
  static override args = {
    name: Args.string({description: 'the name to greet', required: true}),
  };
  static override description = 'describe the command here';
  static override examples = ['<%= config.bin %> <%= command.id %>'];
  static override flags = {
    // flag with a value (-h, --honorific=VALUE)
    honorific: Flags.string({char: 'h', description: 'honorific to add before name'}),
    // flag with no value (-u, --utc)
    utc: Flags.boolean({char: 'u'}),
  };

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(HelloGreetings);
    if (flags.name) throw new Error('name is required');

    const now = new Date();
    const currentHour = flags.utc ? now.getUTCHours() : now.getHours();
    const greetings = getGreetings(currentHour);

    const honorific = flags.honorific ? `${capitalizeFirstLetter(flags.honorific)} ` : '';
    const name = capitalizeFirstLetter(args.name);

    this.log(`${greetings}, ${honorific}${name}`);
  }
}
