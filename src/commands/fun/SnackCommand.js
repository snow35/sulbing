const Discord = require('discord.js');
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

  async run(msg, args) {
    msg.say('히히 뺏어먹기 냠냠');
  }
};
