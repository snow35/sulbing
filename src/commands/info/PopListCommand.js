const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class PopListCommand extends Command {
  constructor(client) {
    super(client, {
      name: 's-list',
      autoAliases: false,
      group: 'info',
      memberName: 's-list',
      description: "설's_Playlist목록 입니다. (계속 추가될 예정)",
    });
  }

  async run(msg, args) {
    let playlistEmbed = new Discord.MessageEmbed()
      .setColor('#ddbea9')
      .setTitle(":musical_note: | 설's_Playlist목록 입니다(계속 추가될 예정)")
      .addFields(
        {
          name: ":fire: | 설's_pop 플레이리스트 입니다. (신나는.ver)",
          value:
            'https://www.youtube.com/playlist?list=PL81QvWaskBuv3NdYolkknz7EskmsGoDe0',
        },
        {
          name: ":cloud_rain: | 설's_pop_2탄 플레이리스트 입니다. (잔잔한.ver)",
          value:
            'https://www.youtube.com/watch?v=jJPMnTXl63E&list=PL81QvWaskBuujAYez-K3TIyLeEIcuEn2M',
        },
        {
          name: ":headphones: | 설's_lofi 플레이리스트 입니다",
          value:
            'https://www.youtube.com/playlist?list=PL81QvWaskButF1wxY5QQv0a-7U66e0Mnh',
        }
      );
    msg.embed(playlistEmbed);
  }
};
