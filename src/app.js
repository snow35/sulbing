const commando = require('discord.js-commando');
const path = require('path');
const { oneLine } = require('common-tags');

const CatLoggr = require('cat-loggr');

const log = new CatLoggr().setLevel('debug');

const client = new commando.Client({
  owner: ['516590788382162945', '427328263896039435', '439817891240607746'],
  commandPrefix: 's!',
});

const messageDelete = require('./logEvents/messageDelete');
const messageUpdate = require('./logEvents/messageUpdate');

client
  .on('error', log.error)
  .on('warn', log.warn)
  .on('debug', log.log)
  .on('ready', () => {
    log.info(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
  })
  .on('disconnect', () => {
    log.warn('Disconnected!');
  })
  .on('reconnecting', () => {
    log.warn('Reconnecting...');
  })
  .on('commandError', (cmd, err) => {
    if (err instanceof commando.FriendlyError) return;
    log.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
  })
  .on('commandBlocked', (msg, reason) => {
    log.info(oneLine`Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
      blocked; ${reason}`);
  })
  .on('commandPrefixChange', (guild, prefix) => {
    log.info(oneLine`Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
      ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.`);
  })
  .on('commandStatusChange', (guild, command, enabled) => {
    log.info(oneLine`Command ${command.groupID}:${command.memberName}
      ${enabled ? 'enabled' : 'disabled'}
      ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.`);
  })
  .on('groupStatusChange', (guild, group, enabled) => {
    log.info(oneLine`
      Group ${group.id}
      ${enabled ? 'enabled' : 'disabled'}
      ${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.`);
  });

client.on('messageDelete', messageDelete)
  .on('messageUpdate', messageUpdate);

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands({ unknownCommand: false })
  .registerGroup('bingsu', 'Bingsu')
  .registerGroup('highcard', 'HIGHCARD')
  .registerGroup('info', 'Info')
  .registerGroup('fun', 'Fun')
  .registerGroup('test', 'Test')
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login('Nzk2MDUzODIyMzcxMzk3NjQy.X_SU5Q.lnlFGdDq8KhL08hAZAxB_8GPlBo');
