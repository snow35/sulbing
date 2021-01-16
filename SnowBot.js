const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
function getBingsuMenu() {
	let data = fs.readFileSync("./menu.json");
	return JSON.parse(data).bingSu;
}
const privateMessage = require('./private-message')

//명령어 설명
const BotcommandHelp = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('인절미빙수 봇 명령어입니다')
	.addFields(
		{ name: ':shaved_ice:!빙수 (빙수이름)', value: '원하는 빙수의 정보를 알려줘요!'},
		{ name: ':clipboard:!빙수메뉴판', value: '현재 등록된 빙수를 보여줘요\n!메뉴판 으로도 호출가능해요'},
		{ name: ':man_raising_hand:!주문 (빙수이름)', value: '원하는 빙수를 주문할수 있어요!'}
	);
//테스트 코드
client.on('ready', () => {
    console.log('ready!');
});
//입력값 확인, 실행
client.on('message', message => {
	console.log(message.content);

	client.users.fetch('516590788382162945').then((user) => {
		user.send('hello world!')
	})

	//테스트 호출
	if (message.content === '!ping') {
		message.channel.send('Pong');
	}

	else if (message.content.startsWith("!빙수 ")) {
		let command = message.content.split(" ")[0];
		let menu = getBingsuMenu();
		menu.forEach(item => {
			if (item.subname.includes(message.content.replace(command, "").trim())) {
				let bingSuInfoEmbed = new Discord.MessageEmbed()
					.setColor('#ddbea9')
					.setTitle(item.name)
					.setThumbnail(item.img)
					.setDescription(item.description)
					.addField("제품명", item.name, true)
					.addField("가격", item.cost + "원", true)
					.addField("영양성분", "열량(Kcal): " + item.nutrition.calories + "\n" +
						"당류(g): " + item.nutrition.sugars + "\n" +
						"단백질(g): " + item.nutrition.protein + "\n" +
						"포화지방(g): " + item.nutrition.saturatedFat + "\n" +
						"나트륨(mg): " + item.nutrition.sodium)
					.addField("알레르기", item.allergy.join(", "));
				message.channel.send(bingSuInfoEmbed);
			}
		});
	}
	//도움말 호출
	else if ( message.content === '!점장' || message.content === '!점장님' || message.content === '!점장나와!') {
		message.channel.send(BotcommandHelp);
	}
	//메뉴판호출
	else if ( message.content === '!빙수메뉴판' || message.content === '!메뉴판') {
		let bingsuListEmbed = new Discord.MessageEmbed()
			.setColor("#ddbea9")
			.setTitle("등록된 빙수 종류입니다.");
		let menu = getBingsuMenu();
		menu.forEach(item => {
			bingsuListEmbed.addField(item.name, item.cost + "원");
		});
		message.channel.send(bingsuListEmbed);
	}
	//멘션 테스트
	else if (message.content === '!호출') {
		message.channel.send("<@"+message.author+">님")
	}
	else if (message.content.slice(0,3) === '!주문') {
		message.channel.send("<@"+message.author+">님")
		message.channel.send(message.content.slice(4,)+" 주문되었습니다")
		message.channel.send("소요시간은 약3~5분 입니다")
	}
	else if (message.content === '!루님화이팅') {
		message.channel.send("루님화이티이잉!")
	}
	
});
client.login(process.env.TOKEN);
