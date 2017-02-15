var feishou = [];
for(let i = 1; i <= 10; i++) {
	var obj = {
		// img: feishou['img' + i],
		img: require('../img/catalog/feishou/' + i + '.png'),
		url: './feishou' + i + '.html',
		name: '飞手' + i,
		isDone: true
	}
	if(0) {
		obj.isDone = false
	}
	feishou.push(obj);
}
//登录
var obj = {
	// img: feishou['img' + i],
	img: require('../img/catalog/feishou/login.png'),
	url: './login.html',
	name: '飞手-登录',
	isDone: true
}
feishou.push(obj)
//航拍帮
var obj = {
	// img: feishou['img' + i],
	img: require('../img/catalog/feishou/intro.png'),
	url: './intro.html',
	name: '飞手-航拍帮',
	isDone: true
}
feishou.push(obj)
//加入航拍帮
var obj = {
	// img: feishou['img' + i],
	img: require('../img/catalog/feishou/join.png'),
	url: './join.html',
	name: '飞手-加入航拍帮',
	isDone: true
}
feishou.push(obj)
//我要吐槽
var obj = {
	// img: feishou['img' + i],
	img: require('../img/catalog/feishou/tucao.png'),
	url: './tucao.html',
	name: '飞手-我要吐槽',
	isDone: true
}
feishou.push(obj)
//注册1
var obj = {
	// img: feishou['img' + i],
	img: require('../img/catalog/feishou/reg.png'),
	url: './reg.html',
	name: '飞手-注册1',
	isDone: true
}
feishou.push(obj)
//注册2
var obj = {
	// img: feishou['img' + i],
	img: require('../img/catalog/feishou/reg2.png'),
	url: './reg2.html',
	name: '飞手-注册2',
	isDone: false
}
feishou.push(obj)

exports.feishou = feishou;

var reserve = [];
for(let i = 1; i <= 12; i++) {
	var obj = {
		img: require('../img/catalog/reserve/' + i + '.png'),
		url: './reserve' + i + '.html',
		name: '预约' + i,
		isDone: true
	}
	if(false) {
		obj.isDone = false
	}
	reserve.push(obj);
}

exports.reserve = reserve;

var user = [];
for(let i = 1; i <= 11; i++) {
	var obj = {
		img: require('../img/catalog/user/' + i + '.png'),
		url: './user' + i + '.html',
		name: '用户' + i,
		isDone: true
	}
	if(i == 11) {
		obj.isDone = false
	}
	user.push(obj);
}

exports.user = user;