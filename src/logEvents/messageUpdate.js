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

module.exports = (oldMessage, newMessage) => {
  if ((!oldMessage.guild || oldMessage.content === newMessage.content) && message.author.bot) return;

  const logWebhook = new Discord.WebhookClient('825781648900620319', 'UWCI9Bgn0xWMWSVLKzBX8LODGXDWJfvYuhMSa6ybDAVo-RVLLqc7bl4YYXlR6flrL6O');

  const messageID = oldMessage.id;

  const oldContent = Optional.ofNullable(oldMessage.content).orElse('(내용이 없습니다.)');
  const newContent = Optional.ofNullable(newMessage.content).orElse('(내용이 없습니다.)');

  const { channel } = oldMessage;
  const category = channel.parent;
  const { guild } = oldMessage;

  const messageCreatedDate = dayjs(oldMessage.createdTimestamp);
  const messageEditedDate = dayjs();

  const oldAttachments = Array.from(oldMessage.attachments.values());
  const newAttachments = Array.from(newMessage.attachments.values());
  const oldAttachmentString = [];
  oldAttachments.forEach((attachment) => oldAttachmentString.push(`[일반 링크](${attachment.url}) | [미디어 프록시 링크](${attachment.proxyURL})`));
  const newAttachmentString = [];
  newAttachments.forEach((attachment) => newAttachmentString.push(`[일반 링크](${attachment.url}) | [미디어 프록시 링크](${attachment.proxyURL})`));

  const author = oldMessage.member;

  const messageEditLogEmbed = new Discord.MessageEmbed()
    .setTitle(`메시지 수정됨. (메시지 ID: \`${messageID}\`)`)
    .setColor(0x228bff)
    .addField('수정 전 내용', `원본 내용\n\`\`\`${oldContent}\`\`\``)
    .addField('수정 후 내용', `원본 내용\n\`\`\`${newContent}\`\`\``)
    .addField('위치', stripIndents`
    채널: ${Optional.ofNullable(channel.name).orElse('채널 이름이 없습니다.')} (\`#${Optional.ofNullable(channel.id).orElse('0')}\`)
    카테고리: ${Optional.ofNullable(category.name).orElse('카테고리가 없습니다.')} (\`#${Optional.ofNullable(category.id).orElse('0')}\`)
    서버: ${Optional.ofNullable(guild.name).orElse('서버가 없습니다.')} (\`#${Optional.ofNullable(guild.id).orElse('0')}\`)`)
    .addField('메시지 생성 시각', messageCreatedDate.locale('ko').format('llll'))
    .addField('메시지 수정 시각', messageEditedDate.locale('ko').format('llll'));
  if (oldAttachments.length > 0) messageEditLogEmbed.addField(`수정 전 메시지 첨부파일: ${oldAttachments.length}개`, oldAttachmentString.join('\n'));
  if (newAttachments.length > 0) messageEditLogEmbed.addField(`수정 후 메시지 첨부파일: ${newAttachments.length}개`, newAttachmentString.join('\n'));
  messageEditLogEmbed.addField('작성자', `디스플레이 네임: ${author.displayName}\n태그: ${author.user.tag}\nID: \`@${author.id}\``);
  logWebhook.send(messageEditLogEmbed);
};
