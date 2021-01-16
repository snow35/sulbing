const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
function getBingsuMenu() {
	let data = fs.readFileSync("./menu.json");
	return JSON.parse(data).bingSu;
}
//const privateMessage = require('./private-message')

//명령어 설명
const BotcommandHelp = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle('인절미빙수 봇 명령어입니다')
	.addFields(
		{ name: ':shaved_ice:!빙수 (빙수이름)', value: '원하는 빙수의 정보를 알려줘요!'},
		{ name: ':clipboard:!빙수메뉴판', value: '현재 등록된 빙수를 보여줘요\n!메뉴판 으로도 호출가능해요'},
		{ name: ':man_raising_hand:!주문 (빙수이름)', value: '원하는 빙수를 주문할수 있어요!'}
	);
//HIGHCARD
const HighGeneralHelp = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle(':black_joker:**HIGHCARD에 오신것을 환영합니다**')
	.addFields(
		{ name: ':page_facing_up:!Help', value: 'HGIHCARD기본 사용법입니다'},
		{ name: ':books:!Rules', value: 'HIGHCARD게임 룰을 설명해줘요'},
	);

const HighCardHelp = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle(':black_joker:**HIGHCARD기본 사용법입니다**')
	.addFields(
		{ name: ':triangular_flag_on_post:!Play HIGHCARD', value: 'HGIHCARD게임을 시작합니다'},
		{ name: ':pirate_flag:!gg', value: 'HIGHCARD게임을 종료합니다'},
	);

const HighCardRules = new Discord.MessageEmbed()
	.setColor('#ddbea9')
	.setTitle(':black_joker:**HIGHCARD규칙입니다')
	.addFields(
		{ name: ':one:양측 플레이어는 카드를 한장씩 뽑게 됩니다', value: '자신의 카드는 볼 수 없으며 상대방의 카드만 볼 수 있습니다\n상대방의 카드는 DM으로 전송됩니다'},
		{ name: ':two:자신의 차례에 자신의 카드가 상대방의 카드보다 더 크다고 생각하시면 코인을 배팅합니다', value:'!(숫자) 처음 제시할때 사용합니다\n!call: 상대방이 지불한 양과 같은 양의 코인을 지불합니다\n!double:상대방이 지불한 양의 두배를 지불합니다.\n!gg:자신이 질것 같다고 생각되는경우 게임을 종료하고 상대방이 승리합니다'},
		{ name: ':three:각각 3번의 배팅후에 결과가 공개되며 더 큰 숫자를 가진 사람이 배팅한 코인을 전부 가져갑니다', value:'U+200B'},
		{ name: '카드의 족보는 다음과 같습니다', value: ':two:<:three:<:four:<:five:<:six:<:seven:<:eight:<:nine:<:ten:<:regional_indicator_j:<:regional_indicator_q:<:regional_indicator_k:<:regional_indicator_a:'}
	);

//테스트 코드
client.on('ready', () => {
    console.log('ready!');
});

//입력값 확인, 실행
client.on('message', message => {
	console.log(message.content);

	if (message.author.bot) return; //보낸사람 = 봇 일때
	else if (client.user.id == message.author.id) return; //보낸사람 자신일때 

	//테스트 호출
	else if (message.content === '!ping') {
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
	else if (message.content === '!DM') {
		message.author.send("hello!")
	}

	//하이카드 게임기는 추가
	else if(message.content === '!HIGHCARD'){
		message.channel.send(HighGeneralHelp)
	}
	else if(message.content === '!Help'){
		message.channel.send(HighCardHelp)
	}
	else if(message.content === '!Rules'){
		message.channel.send(HighCardRules)
	}

});
client.login(process.env.TOKEN);
