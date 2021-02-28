const { Command } = require('discord.js-commando');

module.exports = class GoodLuckLuCommand extends Command {
  constructor(client) {
    super(client, {
      name: '루님화이팅',
      group: 'fun',
      memberName: '루님화이팅',
      description: '루님화이티이잉!',
    });
  }

  async run(msg) {
    msg.say('루님화이티이잉!');
  }
};
