const { Command } = require('discord.js-commando');

module.exports = class GoodLuckLuCommand extends Command {
  constructor(client) {
    super(client, {
      name: '독님화이팅',
      group: 'fun',
      memberName: '독님화이팅',
      description: '독님화이티이잉!',
    });
  }

  async run(msg) {
    msg.say('독님화이티이잉!');
  }
};
