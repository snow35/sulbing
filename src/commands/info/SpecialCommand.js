const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class PopListCommand extends Command {
  constructor(client) {
    super(client, {
      name: '대한독립만세',
      autoAliases: false,
      group: 'info',
      memberName: '대한독립만세',
      description: "3.1절에 대한 설명입니다",
    });
  }

  async run(msg) {
    const playlistEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(":flag_kr: | 3.1운동에 대한 설명입니다.")
      .addFields(
        {
          name: ":grey_question: | 3.1운동이란?",
          value:
            '1919년 3월 1일 정오를 기하여 일제의 압박에 항거, 전세계 민족의 자주독립을 선언하고 온민족이 총궐기 하여 평화적 시위를 전개한 운동입니다.',
        },
        {
          name: ":flag_white: | 3.1절에 태극기는 어떻게 다는가?",
          value:
            '깃봉과 깃면의 사이를 떼지 않고 달아야 합니다',
        },
        {
          name: ":heavy_plus_sign: | 더 알아보자",
          value:
            '- 임시정부에서는 1920년도에 3.1절을 국경이로 지정하여 국경일 명칭을 독립선언일 이라 칭했다.'+
            '- 3.1독립선언 1주년 기념식은 상해 올림픽대극장에서 성대하게 진행되었고, 1946년 2월 21일 대한독립을 위해 목숨을 바친 애국열사에 대한 감사를 표하는 것으로 의미가 제한되었다.',
        },
        {
            name: "우리 모두 대한독립을 위해 목숨을 받친 애국열사분들께 감사한 마음으로 3.1절을 보내도록 합시다!",
            value:
              ' ',
        },
      );
    msg.embed(playlistEmbed);
  }
};
