const Discord = require('discord.js');
const dayjs = require('dayjs');
const dayjsKorean = require('dayjs/locale/ko');
// const dayjsEnglish = require('dayjs/locale/en');
const localizedFormat = require('dayjs/plugin/localizedFormat');
const dayjsUTC = require('dayjs/plugin/utc');
const dayjsTimezone = require('dayjs/plugin/timezone');
const Optional = require('optional-js');
const { stripIndents } = require('common-tags');

dayjs.extend(dayjsUTC);
dayjs.extend(dayjsTimezone);
dayjs.extend(localizedFormat);

module.exports = (message) => {
  if (!message.guild) return;

  const logWebhook = new Discord.WebhookClient('825747119813165086', 'iwxu3LSN8lqh1ImNIzzVKge42gK9nJFdnW-lRFFjZWuyjqnxfLFDp9Z7hLjStINh7ux-');

  const messageID = message.id;

  const content = Optional.ofNullable(message.content).orElse('(내용이 없습니다.)');
  const cleanContent = Optional.ofNullable(message.cleanContent).orElse('(내용이 없습니다.)');

  const { channel } = message;
  const category = channel.parent;
  const { guild } = message;

  const messageCreatedDate = dayjs(message.createdTimestamp);
  const messageDeletedDate = dayjs();

  const attachments = Array.from(message.attachments.values());
  const attachmentString = [];
  attachments.forEach((attachment) => attachmentString.push(`[일반 링크](${attachment.url}) | [미디어 프록시 링크](${attachment.proxyURL})`));

  const author = message.member;

  const messageDeleteLogEmbed = new Discord.MessageEmbed()
    .setTitle(`메시지 삭제됨. (메시지 ID: \`${messageID}\`)`)
    .setColor(0xff0d00)
    .addField('내용', `원본 내용\n\`\`\`${content}\`\`\`\n깨끗한 내용\n\`\`\`${cleanContent}\`\`\``)
    .addField('위치', stripIndents`
    채널: ${Optional.ofNullable(channel.name).orElse('채널 이름이 없습니다.')} (\`#${Optional.ofNullable(channel.id).orElse('0')}\`)
    카테고리: ${Optional.ofNullable(category.name).orElse('카테고리가 없습니다.')} (\`#${Optional.ofNullable(category.id).orElse('0')}\`)
    서버: ${Optional.ofNullable(guild.name).orElse('서버가 없습니다.')} (\`#${Optional.ofNullable(guild.id).orElse('0')}\`)`)
    .addField('메시지 생성 시각', messageCreatedDate.locale('ko').format('llll'))
    .addField('메시지 삭제 시각', messageDeletedDate.locale('ko').format('llll'));
  if (attachments.length > 0) messageDeleteLogEmbed.addField(`메시지 첨부파일: ${attachments.length}개`, attachmentString.join('\n'));
  messageDeleteLogEmbed.addField('작성자', `디스플레이 네임: ${author.displayName}\n태그: ${author.user.tag}\nID: \`@${author.id}\``);
  logWebhook.send(messageDeleteLogEmbed);
};
