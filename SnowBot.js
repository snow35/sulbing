const Discord = require('discord.js');
const client = new Discord.Client();

const mainIceInfo = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('인절미설빙 info')
	.attachFiles(['/Users/Snow35/Documents/GitHub/sulbing/img/Profile.jpg'])
	.setImage('attachment://Profile.jpg')
	.addFields(
		{ name: '제품명', value: '인절미설빙'},
		{ name: '가격', value: '7900원'},
		{ name: '영양성분', value: '열량 : 510kcal\n당류 : 47g\n단백질 : 20g\n포화지방 : 10g\n나트륨 : 220mg'}
	);

const OreaoIceInfo = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('오레오초코몬스터설빙(오레오설빙) info')
	.attachFiles(['/Users/Snow35/Documents/GitHub/sulbing/img/Oreao.jpg'])
	.setImage('attachment://Oreao.jpg')
	.addFields(
		{ name: '제품명', value: '오레오초코몬스터설빙'},
		{ name: '가격', value: '11,900원'},
		{ name: '영양성분', value: '열량 : 1345kcal\n당류 : 111g\n단백질 : 23g\n포화지방 : 29g\n나트륨 : 715mg'}
	);

const BotcommandHelp = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('인절미빙수 봇 명령어입니다')
	.addFields(
		{ name: '!빙수정보 (빙수이름)', value: '원하는 빙수의 정보를 알려줘요'},
		{ name: '!빙수메뉴판', value: '현재 등록된 빙수를 보여줘요\n!빙수, !메뉴판 으로도 호출가능해요'},
		{ name: '!빙수주문 (빙수이름)', value: '원하는 빙수를 주문할수 있어요!\n**아직 제작중이랍니당**'},
	);

const Icelist = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('등록된 빙수 종류입니다(추가중입니당)')
	.addFields(
		{ name: '빙수이름 : 가격(원)', value: '인절미설밍 : 7,900원\n오레오초코몬스터설빙(오레오설빙) : 11,900원'},
		
	);

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content === '!ping') {
		message.channel.send('Pong');
	}

	if (message.content === '!빙수정보 인절미설빙') {
		message.channel.send(mainIceInfo);
	}

	if (message.content === '!빙수정보 오레오초코몬스터설빙' || message.content === '!빙수정보 오래오초코몬스터설빙' || message.content === '!빙수정보 오래오설빙' || message.content === '!빙수정보 오레오설빙' || message.content === '!빙수정보 오레오초코몬스터설빙(오레오설빙)') {
		message.channel.send(OreaoIceInfo);
	}

	if ( message.content === '!점장' || message.content === '!점장님' || message.content === '!점장나와!') {
		message.channel.send(BotcommandHelp);
	}

	if ( message.content === '!빙수메뉴판' || message.content === '!빙수' || message.content === '!메뉴판') {
		message.channel.send(Icelist);
	}
});



client.login(process.env.TOKEN);