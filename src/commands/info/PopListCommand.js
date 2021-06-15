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

  async run(msg) {
    const playlistEmbed = new Discord.MessageEmbed()
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
        },
        {
          name: ":tea: | 설's_R&B 플레이리스트 입니다",
          value:
            'https://www.youtube.com/playlist?list=PL81QvWaskBuuN425YmAKXQou6iX1N_pq9',
        },
        {
          name: ':fog: | 한쿡_R&B 플레이리스트 입니다(멜론에 있는 플레이리스트 입니다)',
          value:
            'https://www.youtube.com/playlist?list=PL81QvWaskBuvY3Mpj_9q4ZnnDL3S4qsfd',
        },
        {
          name: '<:spotify:853774089470476309> | Spotify 추천 lofi 리스트입니다(마음에 들어서 끌고왔어요)',
          value:
            'https://youtube.com/playlist?list=PL81QvWaskBuves5kt1EE8HZSQ6-Gax0if',
        },
        {
          name: '<:spotify:853774089470476309> | Spotify 추천 pop 리스트입니다(마음에 들어서 끌고왔어요2)',
          value:
            'https://www.youtube.com/playlist?list=PL81QvWaskBusk5CgJFpwt4MRcGy81zIQS',
        },
      );
    msg.embed(playlistEmbed);
  }
};
