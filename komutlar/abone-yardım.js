const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't!'//Erasty
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Abone Yardım Menüsü',`
**!abone-yetkili-rol** : Abone Yetkilisini Seçer.
**!abone-rol** : Vericeğiniz Rolü ayarlarsınız.
**!abone-log** : Log mesajınn gitceği yer seçilir.
**!abone** : Abone Rolü verme komutudur.`)

.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
 message.channel.send(yardım) //Erasty
  };

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Abone Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,//Erasty
  permLevel: 0,
  aliases: ["abone-yardım", "ABONE-YARDIM","Abone-Yardım","Abone-yardım,"]
};
//Erasty