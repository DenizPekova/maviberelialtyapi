const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("Yardım Menüsü |")
    .setColor("#15f153")
    .addField("/eğlence", "Eğlence komutlarını gösterir")
    .addField("/kullanıcı:", "Kullanıcı komutlarını gösterir")
    .addField("/yetkili:", "Yetkili komutlarını gösterir")
    .addField("/ekstra:", "Ekstra komutlarını gösterir")
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bütün komutları verir.',
  usage: 'yardım'
};
