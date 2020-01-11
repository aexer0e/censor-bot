const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content.split(" ").join("").toLowerCase().includes('razan') && message.author.id != '321317901086883840') {
        message.delete();
        message.channel.send('Fuck you, '+message.author+'.').then(d_msg => { d_msg.delete(4000); });
    };

    if(message.content.split(" ").join("").toLowerCase().includes('razan') && message.author.id == '321317901086883840') {
        message.delete();
        message.channel.send('I am sorry senpai '+message.author+', but you have programmed me to delete that message.').then(d_msg => { d_msg.delete(4000); });
    };
});



bot.login(process.env.BOT_TOKEN);
