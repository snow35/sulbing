const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');

const CardNumber = require('./resources/CardNumber');

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
    const firstRuleEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: | HIGHCARD 규칙입니다')
      .addField(`${CardNumber.red[1]} | 양측 플레이어는 카드를 한장씩 뽑게 됩니다.`,
        stripIndents`자신의 카드는 볼 수 없으며 상대방의 카드만 볼 수 있습니다
        상대방의 카드는 DM으로 전송됩니다
        카드는 각각 1부터 10으로 구성된 카드 더미에서 선정되며 한 번 뽑힌 카드는 다시 나오지 않습니다`);

    const secondRuleEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: | HIGHCARD 규칙입니다')
      .addField(`${CardNumber.red[2]} | 자신의 차례에 코인을 배팅합니다. 방식은 다음과 같습니다`,
        stripIndents`초기에는 칩 1개가 기본으로 배팅됩니다
        초기에는 칩 20개가 각자에게 부여됩니다\n
        - s!(숫자) | 제시한 숫자만큼 칩을 배팅합니다. 상대방이 제시한 칩의 개수보다 많아야 합니다
        - s!레이즈 | 상대방의 카드 숫자만큼 베팅합니다. 이 경우 베팅이 종료됩니다
        - s!gg | 자신이 질것 같다고 생각되는경우 라운드를 종료하고 상대방이 승리합니다`);

    const thirdRuleEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: | HIGHCARD 규칙입니다')
      .addField(`${CardNumber.red[3]} | 베팅은 다음과 같은 상황에서 끝납니다\n`,
        stripIndents`1. 한 플레이어가 레이즈를 한 경우
        2. 한 플레이어가 포기(gg)를 한 경우
        3. 한 플레이어가 모든 칩을 다 사용한 경우`);

    const forthRuleEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: | HIGHCARD 규칙입니다')
      .addField(`${CardNumber.red[4]} | 카드의 족보는 다음과 같습니다`,
        `${stripIndents`${CardNumber.black[14]} ${CardNumber.black[2]}`
        }${CardNumber.black[3]} ${CardNumber.black[4]}`
        + `${CardNumber.black[5]} ${CardNumber.black[6]}`
        + `${CardNumber.black[7]} ${CardNumber.black[8]}`
        + `${CardNumber.black[9]} ${CardNumber.black[10]}`);

    const fifthRuleEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(':black_joker: | HIGHCARD 규칙입니다')
      .addField(`${CardNumber.red[5]} | 카드의 숫자가 같은 경우`, '해당 라운드는 무효처리 되며 베팅한 칩은 다음 라운드로 그대로 넘어간 상태로 시작합니다.');

    const pages = [firstRuleEmbed, secondRuleEmbed, thirdRuleEmbed, forthRuleEmbed, fifthRuleEmbed];
    const pageEmojis = ['⏪', '◀️', '▶️', '❌'];

    let nowPageIndex = 0;
    const nowPage = await msg.embed(pages[nowPageIndex]);
    pageEmojis.forEach(async (pageEmoji) => { await nowPage.react(pageEmoji); });
    const pageReactionCollector = nowPage.createReactionCollector(
      (reaction, user) => pageEmojis.includes(reaction.emoji.name) && user.id === msg.author.id,
      18000,
    );
    pageReactionCollector.on('collect', (reaction) => {
      reaction.users.remove(msg.author);
      switch (reaction.emoji.name) {
        case pageEmojis[0]:
          nowPageIndex = 0;
          break;
        case pageEmojis[1]:
          nowPageIndex = (nowPageIndex === 0) ? pages.length - 1 : nowPageIndex - 1;
          break;
        case pageEmojis[2]:
          nowPageIndex = (nowPageIndex === pages.length - 1) ? 0 : nowPageIndex + 1;
          break;
        case pageEmojis[3]:
          nowPage.delete();
          break;
        default: break;
      }
      if (!nowPage.deleted) nowPage.edit(pages[nowPageIndex]);
    });
    pageReactionCollector.on('end', () => {
      if (!nowPage.deleted) nowPage.reactions.removeAll();
    });
  }
};
