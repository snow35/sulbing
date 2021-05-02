const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class HighcardHelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'highcard-help',
      autoAliases: false,
      group: 'highcard',
      memberName: 'highcard-help',
      description: 'HIGHCARD 기본 사용법입니다.',
    });
  }

  async run(msg) {
    const highcardHelpEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: **HIGHCARD에 오신것을 환영합니다**')
      .addFields(
        { name: ':page_facing_up: | s!help', value: 'HGIHCARD기본 사용법입니다' },
        { name: ':books: | s!rules', value: 'HIGHCARD게임 룰을 설명해줘요' },
      );
    msg.embed(highcardHelpEmbed);
  }
};
