const { Command } = require('discord.js-commando');

module.exports = class SnackCommand extends Command {
  constructor(client) {
    super(client, {
      name: '간식',
      group: 'fun',
      memberName: '간식',
      description: '간식을 드립니다...?',
    });
  }

  async run(msg) {
    msg.say('간식내놔아아아아');
  }
};
