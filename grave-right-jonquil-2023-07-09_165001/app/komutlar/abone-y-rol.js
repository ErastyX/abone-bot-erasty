let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {//Erasty
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `:x: **Bu Komutu Kullanmak İçin \`YÖNETİCİ\` Yetkisine Sahip Olmalısın !**`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(//Erasty
      `:x: **Bir Rol Etiketlemelisin !**`
    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `:white_check_mark: **Abone Yetkilisi "${rol}" Olarak Ayarlandı.**`
  );//Erasty
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol"],
  perm: 0
};//Erasty
exports.help = {
  name: "abone-yetkili-rol"
};

exports.play = {
  kullanım: "y!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",//Erasty
  kategori: "Abone"
};
