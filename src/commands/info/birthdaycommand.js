const { Command } = require('discord.js-commando');

module.exports = class birthdaycommand extends Command {
  constructor(client) {
    super(client, {
      name: '생일축하해',
      group: 'fun',
      memberName: '생일축하해',
      description: '이렇게라도 축하해야징...',
    });
  }

  async run(msg) {
    msg.say('설빙 생일축하해!');
  }
};
