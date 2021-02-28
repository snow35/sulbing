const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class CallCommand extends Command {
  constructor(client) {
    super(client, {
      name: '호출',
      group: 'test',
      memberName: '호출',
      description: '멘션 테스트',
    });
  }

  async run(msg, args) {
    msg.say(`${msg.author.toString()}님`);
  }
};
