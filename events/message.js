const ayarlar = require('../ayarlar.json');//Erasty
let talkedRecently = new Set();//Erasty
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;//Erasty
  }
  talkedRecently.add(message.author.id);
    setTimeout(() => {//Erasty
    talkedRecently.delete(message.author.id);
  }, 2500);//Erasty
  let client = message.client;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);//Erasty
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {//Erasty
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
//Erasty
};
//Erasty