const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const fs = require('fs');
const path = require('path');

function getBingsuMenu() {
  const data = fs.readFileSync(path.join(__dirname, './resources/menu.json'));
  return JSON.parse(data).bingSu;
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
  }

  async run(msg, args) {
    const menu = getBingsuMenu();
    menu.forEach((item) => {
      if (item.subname.includes(args.bingsu)) {
        const bingSuInfoEmbed = new Discord.MessageEmbed()
          .setColor('#ddbea9')
          .setTitle(item.name)
          .setThumbnail(item.img)
          .setDescription(item.description)
          .addField('제품명', item.name, true)
          .addField('가격', `${item.cost}원`, true)
          .addField(
            '영양성분',
            `열량(Kcal): ${item.nutrition.calories}\n`
              + `당류(g): ${item.nutrition.sugars}\n`
              + `단백질(g): ${item.nutrition.protein}\n`
              + `포화지방(g): ${item.nutrition.saturatedFat}\n`
              + `나트륨(mg): ${item.nutrition.sodium}`,
          )
          .addField('알레르기', item.allergy.join(', '));
        msg.embed(bingSuInfoEmbed);
      }
    });
  }
};
