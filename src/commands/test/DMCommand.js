const { Command } = require('discord.js-commando');

module.exports = class DMCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'dm',
      group: 'test',
      memberName: 'dm',
      description: 'DM test',
    });
  }

  async run(msg) {
    msg.direct('Hello!');
  }
};
