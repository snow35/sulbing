const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const fs = require('fs');
const path = require('path');
const { stripIndent } = require('common-tags');

function getBingsuMenu() {
  const data = fs.readFileSync(path.join(__dirname, './resources/menu.json'));
  return JSON.parse(data).bingSu;
}

function embedBingsuInfo(bingsu) {
  const menu = getBingsuMenu();
  const item = menu.filter(itemOfMenu => itemOfMenu.subname.includes(bingsu))[0];
  const bingSuInfoEmbed = new Discord.MessageEmbed()
    .setColor('#ddbea9')
    .setTitle(item.name)
    .setThumbnail(item.img)
    .setDescription(item.description)
    .addField('제품명', item.name, true)
    .addField('가격', `${item.cost.toLocaleString()}원`, true)
    .addField('영양성분',
      stripIndent`열량(Kcal): ${item.nutrition.calories}
      당류(g): ${item.nutrition.sugars}
      단백질(g): ${item.nutrition.protein}
      포화지방(g): ${item.nutrition.saturatedFat}
      나트륨(mg): ${item.nutrition.sodium}`)
    .addField('알레르기', item.allergy.join(', '));
  return bingSuInfoEmbed;
}

module.exports = class GetBingsuCommand extends Command {
  constructor(client) {
    super(client, {
      name: '빙수',
      group: 'bingsu',
      memberName: '빙수',
      description: '빙수 정보를 가져옵니다.',
      args: [
        {
          key: 'bingsu',
          prompt: '정보를 알고 싶은 빙수를 공백없이 입력해주세요.',
          type: 'string',
        },
      ],
    });
    client.on('message', (message) => {
      if (message.content.startsWith('s!빙수') && message.author.id === '796342455762419712') {
        message.channel.send(embedBingsuInfo(message.content.split(' ')[1]));
      }
    });
  }

  async run(msg, args) {
    msg.embed(embedBingsuInfo(args.bingsu));
  }
};
