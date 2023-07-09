let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Erasty


exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`:x: **Bu Komutu Kullanmak İçin \`YÖNETİCİ\` Yetkisine Sahip Olmalısın !**`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`:x: **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abone-rol @rol__**`)
  //Erasty
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`:white_check_mark: **Abone rolü başarıyla "${rol}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,//Erasty
  aliases: ["abonerol","ABONEROL","abone-rol","Abonerol","Abone-rol","Abone-Rol"]
};
exports.help = {
  name: 'abonerol'
}

exports.play = {//Erasty
  kullanım: 't!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}//Erasty