const request = require('node-superfetch');//Erasty
const crypto = require('crypto');//Erasty
const { IMGUR_KEY } = process.env;//Erasty
const yes = ['evet'];
const no = ['hayır']

const deleteCommandMessages = function (msg, client) { //Erasty
	if (msg.deletable && client.provider.get('global', 'deletecommandmessages', false)) {//Erasty
	  return msg.delete();
	}//Erasty
  };//Erasty
//Erasty
class Util {
	static wait(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));//Erasty
	}

	static shuffle(array) {
		const arr = array.slice(0);
		for (let i = arr.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));//Erasty
			const temp = arr[i];
			arr[i] = arr[j];//Erasty
			arr[j] = temp;
		}
		return arr;//Erasty
	}

	static list(arr, conj = 'and') {
		const len = arr.length;
		return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;//Erasty
	}///Erasty

	static shorten(text, maxLen = 2000) {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}
//Erasty
	static duration(ms) {//Erasty
		const sec = Math.floor((ms / 1000) % 60).toString();
		const min = Math.floor((ms / (1000 * 60)) % 60).toString();
		const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();
		return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
	}
//Erasty
	static randomRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static trimArray(arr, maxLen = 10) {
		if (arr.length > maxLen) {
			const len = arr.length - maxLen;///Erasty
			arr = arr.slice(0, maxLen);
			arr.push(`${len} more...`);
		}
		return arr;
	}
//Erasty
	static base64(text, mode = 'encode') {
		if (mode === 'encode') return Buffer.from(text).toString('base64');
		if (mode === 'decode') return Buffer.from(text, 'base64').toString('utf8') || null;
		throw new TypeError(`${mode} is not a supported base64 mode.`);
	}//Erasty

	static hash(text, algorithm) {
		return crypto.createHash(algorithm).update(text).digest('hex');
	}//Erasty

	static async randomFromImgurAlbum(album) {
		const { body } = await request
			.get(`https://api.imgur.com/3/album/${album}`)///Erasty
			.set({ Authorization: `Client-ID ${IMGUR_KEY}` });
		if (!body.data.images.length) return null;
		return body.data.images[Math.floor(Math.random() * body.data.images.length)].link;
	}//Erasty

	static today(timeZone) {
		const now = new Date();
		if (timeZone) now.setUTCHours(now.getUTCHours() + timeZone);
		now.setHours(0);//Erasty
		now.setMinutes(0);
		now.setSeconds(0);
		now.setMilliseconds(0);///Erasty
		return now;
	}

	static tomorrow(timeZone) {
		const today = Util.today(timeZone);
		today.setDate(today.getDate() + 1);
		return today;
	}
//Erasty
	static async awaitPlayers(msg, max, min, { text = 'join game', time = 30000 } = {}) {
		const joined = [];
		joined.push(msg.author.id);
		const filter = res => {//Erasty
			if (msg.author.bot) return false;
			if (joined.includes(res.author.id)) return false;
			if (res.content.toLowerCase() !== text.toLowerCase()) return false;
			joined.push(res.author.id);
			return true;
		};//Erasty
		const verify = await msg.channel.awaitMessages(filter, { max, time });
		verify.set(msg.id, msg);//Erasty
		if (verify.size < min) return false;
		return verify.map(message => message.author);
	}
//Erasty
	static async verify(channel, user, time = 30000) {
		const filter = res => {//Erasty
			const value = res.content.toLowerCase();
			return res.author.id === user.id && (yes.includes(value) || no.includes(value));
		};//Erasty
		const verify = await channel.awaitMessages(filter, {
			max: 1,
			time
		});//Erasty
		if (!verify.size) return 0;
		const choice = verify.first().content.toLowerCase();
		if (yes.includes(choice)) return true;
		if (no.includes(choice)) return false;
		return false;//Erasty
	}
}

module.exports = Util;//Erasty