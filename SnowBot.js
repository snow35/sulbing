const Discord = require('discord.js');
const client = new Discord.Client();

//빙수정보
const mainIceInfo = new Discord.MessageEmbed() //인절미설빙
	.setColor('#ddbea9')
	.setTitle('인절미설빙 info')
	.attachFiles(['img/Profile.jpg'])
	.setImage('attachment://Profile.jpg')
	.addFields(
		{ name: '제품명', value: '인절미설빙'},
		{ name: '가격', value: '7900원'},
		{ name: '영양성분', value: '열량 : 510kcal\n당류 : 47g\n단백질 : 20g\n포화지방 : 10g\n나트륨 : 220mg'}
	);

const OreaoIceInfo = new Discord.MessageEmbed() //오레오초코몬스터설빙
	.setColor('#ddbea9')
	.setTitle('오레오초코몬스터설빙(오레오설빙) info')
	.attachFiles(['img/Oreao.jpg'])
	.setImage('attachment://Oreao.jpg')
	.addFields(
		{ name: '제품명', value: '오레오초코몬스터설빙'},
		{ name: '가격', value: '11,900원'},
		{ name: '영양성분', value: '열량 : 1345kcal\n당류 : 111g\n단백질 : 23g\n포화지방 : 29g\n나트륨 : 715mg'}
	);

const WarrStrawSulbingInfo = new Discord.MessageEmbed() //와르르생딸기설빙
	.setColor('#ddbea9')
	.setTitle('와르르생딸기설빙 info *시즌한정제품*')
	.attachFiles(['img/WarrSulbing.png'])
	.setImage('attachment://WarrSulbing.png')
	.addFields(
		{ name: '제품명', value: '와르르생딸기설빙'},
		{ name: '가격', value: '11,500원'},
		{ name: '영양성분', value: '열량 : 730kcal\n당류 : 96g\n단백질 : 14g\n포화지방 : 20g\n나트륨 : 170mg'}
	);

const NotToEatInfo = new Discord.MessageEmbed() //민트초코설빙
	.setColor('#ddbea9')
	.setTitle('민트초코설빙 info')
	.attachFiles(['img/NotToEat.png'])
	.setImage('attachment://NotToEat.png')
	.addFields(
		{ name: '제품명', value: '민트초코설빙'},
		{ name: '가격', value: '10,900원'},
		{ name: '영양성분', value: '열량 : 1205kcal\n당류 : 93g\n단백질 : 18g\n포화지방 : 28g\n나트륨 : 440mg'}
	);

const TiramisuInfo = new Discord.MessageEmbed() //티라미수설빙
	.setColor('#ddbea9')
	.setTitle('티라미수설빙 info')
	.attachFiles(['img/Tiramisu.png'])
	.setImage('attachment://Tiramisu.png')
	.addFields(
		{ name: '제품명', value: '티라미수설빙'},
		{ name: '가격', value: '10,900원'},
		{ name: '영양성분', value: '열량 : 984kcal\n당류 : 90g\n단백질 : 20g\n포화지방 : 28g\n나트륨 : 460mg'}
	);

const applemangoInfo = new Discord.MessageEmbed() //애플망고치즈설빙
	.setColor('#ddbea9')
	.setTitle('애플망고치즈설빙 info')
	.attachFiles(['img/applemango.png'])
	.setImage('attachment://applemango.png')
	.addFields(
		{ name: '제품명', value: '애플망고치즈설빙'},
		{ name: '가격', value: '11,900원'},
		{ name: '영양성분', value: '열량 : 910kcal\n당류 : 116g\n단백질 : 19g\n포화지방 : 19g\n나트륨 : 350mg'}
	);
//여기까지가 빙수 정보


//명령어 설명
const BotcommandHelp = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('인절미빙수 봇 명령어입니다')
	.addFields(
		{ name: ':shaved_ice:!빙수정보 (빙수이름)', value: '원하는 빙수의 정보를 알려줘요'},
		{ name: ':clipboard:!빙수메뉴판', value: '현재 등록된 빙수를 보여줘요\n!빙수, !메뉴판 으로도 호출가능해요'},
		{ name: ':man_raising_hand:!빙수주문 (빙수이름)', value: '원하는 빙수를 주문할수 있어요!\n**아직 제작중이랍니당**'},
	);

//메뉴판
const Icelist = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('등록된 빙수 종류입니다(추가중입니당)')
	.addFields(
		{ name: '빙수이름 : 가격(원)', value: '인절미설밍 : 7,900원\n오레오초코몬스터설빙(오레오설빙) : 11,900원\n와르르생딸기설빙(기간한정!) : 11,500원\n민트초코설빙 : 10,900원\n티라미수설빙 : 10,900\n애플망고치즈설빙 : 11,900원'},
		
	);

//테스트 코드
client.on('ready', () => {
    console.log('ready!');
});

//입력값 확인, 실행
client.on('message', message => {
	console.log(message.content);
	//테스트 호출
	if (message.content === '!ping') {
		message.channel.send('Pong');
	}

	//비수정보호출
	else if (message.content === '!빙수정보 인절미설빙') {
		message.channel.send(mainIceInfo);
	}

	else if (message.content === '!빙수정보 와르르생딸기설빙') {
		message.channel.send(WarrStrawSulbingInfo);
	}

	else if (message.content === '!빙수정보 오레오초코몬스터설빙' || message.content === '!빙수정보 오래오초코몬스터설빙' || message.content === '!빙수정보 오래오설빙' || message.content === '!빙수정보 오레오설빙' || message.content === '!빙수정보 오레오초코몬스터설빙(오레오설빙)') {
		message.channel.send(OreaoIceInfo);
	}

	else if (message.content === '!빙수정보 민트초코설빙' || message.content === '!빙수정보 외계음식') {
		message.channel.send(NotToEatInfo);
	}

	else if (message.content === '!빙수정보 티라미수설빙') {
		message.channel.send(TiramisuInfo);
	}

	else if (message.content === '!빙수정보 애플망고치즈설빙') {
		message.channel.send(applemangoInfo);
	}

	//도움말 호출
	else if ( message.content === '!점장' || message.content === '!점장님' || message.content === '!점장나와!') {
		message.channel.send(BotcommandHelp);
	}

	//메뉴판호출
	else if ( message.content === '!빙수메뉴판' || message.content === '!빙수' || message.content === '!메뉴판') {
		message.channel.send(Icelist);
	}

	//멘션 테스트
	else if (message.content === '!호출') {
		message.channel.send("<@"+message.author+">님")
	}

	else if (message.content.slice(0,5) === '!빙수주문') {
		message.channel.send("<@"+message.author+">님")
		message.channel.send(message.content.slice(6,)+"주문되었습니다")
	}	

});



client.login(process.env.TOKEN);