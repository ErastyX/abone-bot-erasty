let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Erasty


exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`:x: **Bu Komutu Kullanmak İçin \`YÖNETİCİ\` Yetkisine Sahip Olmalısın !**`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`:x: **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abone-log #kanal__**`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`:white_check_mark: **Abone Kanalı başarıyla "${log}" Olarak Ayarlandı.**`)
}
//Erasty
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["abonelog", "abone-log","ABONE-LOG","aboneLOG","Abone-log","Abone-Log"]
};
//Erasty
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 't!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',//Erasty
  kategori: 'Abone'
}