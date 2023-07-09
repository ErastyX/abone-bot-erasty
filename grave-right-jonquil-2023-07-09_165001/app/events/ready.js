const Discord = require('discord.js');//Erasty
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')//Erasty

module.exports = client => {
  var degisenOynuyor = [//Erasty
    
    "YouTube: Erasty",//Erasty
    "Abone Botu"
    
  ]//Erasty
  
  setInterval(function() {//Erasty
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]//Erasty
    client.user.setActivity(`${degisenOynuyor1}`);

}, 1 * 20000);//Erasty
//Erasty
  client.user.setStatus("dmd"); //dnd, idle, online, offline
  
}//Erasty