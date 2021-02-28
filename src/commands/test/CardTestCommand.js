const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

const CardNumber = require('../highcard/resources/CardNumber');
const CardShape = require('../highcard/resources/CardShape');

module.exports = class CardTestCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'card',
      group: 'test',
      memberName: 'card',
      description: 'Card test',
    });
  }

  async run(msg, args) {
    msg.say(CardNumber.black[5]);
    msg.say('<:Spade:800032748625592340>');
  }
};
