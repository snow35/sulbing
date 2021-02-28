const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const fs = require('fs');
const path = require('path');

function getBingsuMenu() {
  const data = fs.readFileSync(path.join(__dirname, './resources/menu.json'));
  return JSON.parse(data).bingSu;
}

module.exports = class BingsuMenuCommand extends Command {
  constructor(client) {
    super(client, {
      name: '빙수메뉴판',
      aliases: ['메뉴', '메뉴판'],
      group: 'bingsu',
      memberName: '빙수메뉴판',
      description: '빙수 정보를 가져옵니다.',
    });
  }

  async run(msg, args) {
    const bingsuListEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle('등록된 빙수 종류입니다.');
    const menu = getBingsuMenu();
    menu.forEach((item) => {
      bingsuListEmbed.addField(item.name, `${item.cost}원`);
    });
    msg.embed(bingsuListEmbed);
  }
};
