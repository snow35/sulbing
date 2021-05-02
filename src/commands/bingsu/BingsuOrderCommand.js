const { Command } = require('discord.js-commando');

module.exports = class GetBingsuCommand extends Command {
  constructor(client) {
    super(client, {
      name: '주문',
      group: 'bingsu',
      memberName: '주문',
      description: '빙수를 주문합니다. 아직 루비 전용 커맨드로, 추후 완성될 예정입니다.',
      args: [
        {
          key: 'bingsu',
          prompt: '주문할 빙수를 공백없이 입력해주세요.',
          type: 'string',
        },
      ],
    });
    client.on('message', (message) => {
      if (message.content.startsWith('s!주문') && message.author.id === '796342455762419712') {
        message.channel.send(`${message.author}님, ${message.content.split(' ')[1]}주문 되었습니다.`);
      }
    });
  }

  async run(msg) {
    msg.say('아직 루비 전용 커맨드입니다. 혹시 해당 서버에 루비(루비#7642)가 있다면 `./빙수먹자`를 입력해보세요.');
  }
};
