const { Command } = require('discord.js-commando');

const CatLoggr = require('cat-loggr');

const log = new CatLoggr().setLevel('debug');

const CardNumber = require('./resources/CardNumber').black;
const CardShape = require('./resources/CardShape');

module.exports = class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'play-highcard',
      aliases: ['play', 'player'],
      group: 'highcard',
      memberName: 'play-highcard',
      description: 'HIGHCARD를 플레이합니다.',
      args: [
        {
          key: 'player1',
          prompt: '첫번째 플레이어를 멘션해주세요.',
          type: 'member',
        },
        {
          key: 'player2',
          prompt: '두번째 플레이어를 멘션해주세요.',
          type: 'member',
        },
      ],
    });
  }

  async run(msg, args) {
    const firstPlayer = args.player1;
    const secondPlayer = args.player2;

    const firstPlayerUsername = args.player1.displayName;
    const firstPlayerUserId = args.player1.id;
    const secondPlayerUsername = args.player2.displayName;
    const secondPlayerUserId = args.player2.id;

    const firstPlayerCard = Math.floor(Math.random() * 15) + 2;
    const secondPlayerCard = Math.floor(Math.random() * 15) + 2;
    const firstPlayerCardShape = Math.floor(Math.random() * 4) + 1;
    const secondPlayerCardShape = Math.floor(Math.random() * 4) + 1;

    let preWinner;
    if (firstPlayerCard > secondPlayerCard) {
      preWinner = firstPlayerUsername;
    } else if (firstPlayerCard === secondPlayerCard) {
      if (firstPlayerCardShape > secondPlayerCardShape) {
        preWinner = firstPlayerUsername;
      } else if (firstPlayerCardShape < secondPlayerCardShape) {
        preWinner = secondPlayerUsername;
      }
    }
    log.debug(`prewinner: ${preWinner}`);
    log.debug(`1P: ${firstPlayerUsername} / ${firstPlayerUserId}`);
    log.debug(`2P: ${secondPlayerUsername} / ${secondPlayerUserId}`);

    log.debug(firstPlayerCard);
    log.debug(secondPlayerCard);
    log.debug(firstPlayerCardShape);
    log.debug(secondPlayerCardShape);

    firstPlayer.createDM().then((dmChannel) => {
      dmChannel.send(`Hi, ${firstPlayerUsername}`);
      dmChannel.send(
        `Player2's card is${CardShape[secondPlayerCardShape]}${CardNumber[secondPlayerCard]}`,
      );
    });

    secondPlayer.createDM().then((dmChannel) => {
      dmChannel.send(`Hi, ${secondPlayerUsername}`);
      dmChannel.send(
        `Player1's card is${CardShape[firstPlayerCardShape]}${CardNumber[firstPlayerCard]}`,
      );
    });
  }
};
