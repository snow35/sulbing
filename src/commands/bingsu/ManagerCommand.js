const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class ManagerCommand extends Command {
  constructor(client) {
    super(client, {
      name: '점장',
      aliases: ['점장님', '점장나와!'],
      group: 'bingsu',
      memberName: '점장',
      description: '인절미빙수 봇 명령어입니다.',
    });
  }

  async run(msg) {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle('인절미빙수 봇 명령어입니다.')
      .addFields(
        {
          name: ':shaved_ice: | s!빙수 (빙수이름)',
          value: '원하는 빙수의 정보를 알려줘요!',
        },
        {
          name: ':clipboard: | s!빙수메뉴판',
          value: '현재 등록된 빙수를 보여줘요\ns!메뉴판 으로도 호출가능해요',
        },
        {
          name: ':man_raising_hand: | s!주문 (빙수이름)',
          value: '원하는 빙수를 주문할수 있어요!',
        },
      );
    msg.embed(helpEmbed);
  }
};
