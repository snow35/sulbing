const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

const CardNumber = require('./resources/CardNumber');
const CardShape = require('./resources/CardShape');

module.exports = class RuleCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'highcard-rule',
      aliases: ['highcard-rules', 'rule', 'rules'],
      group: 'highcard',
      memberName: 'highcard-rule',
      description: 'HIGHCARD 규칙입니다.',
    });
  }

  async run(msg) {
    const highcardRuleEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: | HIGHCARD 규칙입니다')
      .addFields(
        {
          name: `${CardNumber.red[1]} | 양측 플레이어는 카드를 한장씩 뽑게 됩니다`,
          value:
            '자신의 카드는 볼 수 없으며 상대방의 카드만 볼 수 있습니다\n'
            + '상대방의 카드는 DM으로 전송됩니다\n​',
        },
        {
          name: `${CardNumber.red[2]} | 자신의 차례에 자신의 카드가 상대방의 카드보다더 크다고 생각하시면 코인을 배팅합니다`,
          value:
            '**!(숫자)**: 처음 제시할때 사용합니다\n'
            + '**!콜**: 상대방이 지불한 양과 같은 양의 코인을 지불합니다\n'
            + '**!더블**: 상대방이 지불한 양의 2배를 지불합니다.\n'
            + '**!따당**: 상대방이 지불한 양의 4배를 지불합니다\n'
            + '**!다이**: 자신이 질것 같다고 생각되는경우 라운드를 종료하고 상대방이 승리합니다\n​',
        },
        {
          name:
            `${CardNumber.red[3]} | 각각 3번의 배팅후에 결과가 공개되며\n`
            + '더 큰 숫자를 가진 사람이 배팅한 코인을 전부 가져갑니다',
          value: '​',
        },
        {
          name: `${CardNumber.red[4]} | 카드의 족보는 다음과 같습니다`,
          value:
            `\t${CardNumber.black[2]} `
            + `${CardNumber.black[3]} ${CardNumber.black[4]} `
            + `${CardNumber.black[5]} ${CardNumber.black[6]} `
            + `${CardNumber.black[7]} ${CardNumber.black[8]} `
            + `${CardNumber.black[9]} ${CardNumber.black[10]} `
            + `${CardNumber.black[11]} ${CardNumber.black[12]} `
            + `${CardNumber.black[13]} ${CardNumber.black[14]},`,
        },
        {
          name: `${CardNumber.red[5]} | 카드의 숫자가 같은 경우 모양에 따라 결정됩니다`,
          value: `\t${CardShape[1]} ${CardShape[2]} ${CardShape[3]} ${CardShape[4]}`,
        },
      );
    msg.embed(highcardRuleEmbed);
  }
};
