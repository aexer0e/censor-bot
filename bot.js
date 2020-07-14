const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('razan') && message.author.id != '321317901086883840'){
        message.delete();
        message.channel.send('Fuck you, '+message.author+'.').then(d_msg => { d_msg.delete(4000); });
    };

    if(message.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('razan') && message.author.id == '321317901086883840') {
        message.delete();
        message.channel.send('I am sorry senpai '+message.author+', but you have programmed me to delete that message.').then(d_msg => { d_msg.delete(4000); });
    };

    if(message.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('kurdish')) {
        message.channel.send('FUCKKK KURDISHHHH I WILL FUCK KURDISH IN ITS ASS I WILL LITERALLY RAPE KURDISH FUCKING PIECE IF SHIT LANGUAGE FUCKING CUNT ASS BITCH');
    };

    if(message.content.slice(0, 7) == 'sensei ' && message.content != 'sensei mock') {
        message.delete();
        text = message.content.substr(7)
        text = (text).split("")
        x = false
        for (let i = 0; i < text.length; i++) {
            if (x) {
                text[i] = (text[i]).toLowerCase()
                x = false
            }
            else {
                text[i] = (text[i]).toUpperCase()
                x = true
            }
        }
        message.channel.send(text.join(""));
    };

    if(message.content.slice(0, 8) == 'sensei2 ' && message.content != 'sensei mock') {
        message.delete();
        text = message.content.substr(8)
        text = (text).split("")
        x = true
        for (let i = 0; i < text.length; i++) {
            if (x) {
                text[i] = (text[i]).toLowerCase()
                x = false
            }
            else {
                text[i] = (text[i]).toUpperCase()
                x = true
            }
        }
        message.channel.send(text.join(""));
    };

    if(message.content == 'sensei mock') {
        message.delete();
        text = cached_message
        text = (text).split("")
        x = true
        for (let i = 0; i < text.length; i++) {
            if (x) {
                text[i] = (text[i]).toLowerCase()
                x = false
            }
            else {
                text[i] = (text[i]).toUpperCase()
                x = true
            }
        }
        message.channel.send(text.join(""));
    };
    cached_message = message.content
});


bot.on('messageUpdate', (oldMessage, newMessage) => {

    if(newMessage.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('razan') && newMessage.author.id != '321317901086883840'){
        newMessage.delete();
        newMessage.channel.send('Fuck you, '+newMessage.author+'.').then(d_msg => { d_msg.delete(4000); });
    };

    if(newMessage.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('razan') && newMessage.author.id == '321317901086883840') {
        newMessage.delete();
        newMessage.channel.send('I am sorry senpai '+newMessage.author+', but you have programmed me to delete that message.').then(d_msg => { d_msg.delete(4000); });
    };

 });

bot.login(process.env.BOT_TOKEN);
