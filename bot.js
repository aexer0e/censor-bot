const Discord = require('discord.js');
const bot = new Discord.Client();
var unirest = require("unirest");
var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
req.headers({
	"x-rapidapi-host": "google-translate1.p.rapidapi.com",
	"x-rapidapi-key": "599ff0e921msh138f44db9bdb21fp1459cfjsn6d378c09bd81",
	"accept-encoding": "application/gzip",
	"content-type": "application/x-www-form-urlencoded",
	"useQueryString": true
});

bot.on('message', (message) => {

    if(message.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('razan') && message.author.id != '321317901086883840'){
        message.delete();
        message.channel.send('Fuck you, '+message.author+'.').then(d_msg => { d_msg.delete(4000); });
    };

    if(message.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('razan') && message.author.id == '321317901086883840') {
        message.delete();
        message.channel.send('I am sorry senpai '+message.author+', but you have programmed me to delete that message.').then(d_msg => { d_msg.delete(4000); });
    };

    if(message.content.split("'").join("").split("-").join("").split(" ").join("").split(".").join("").split(",").join("").replace(/(.)\1+/g, '$1').toLowerCase().includes('kurdishlanguage') && message.author.id != '665629105802313759') {
        message.channel.send('FUCKKK KURDISHHHH I WILL FUCK KURDISH IN ITS ASS I WILL LITERALLY RAPE KURDISH FUCKING PIECE IF SHIT LANGUAGE FUCKING CUNT ASS BITCH');
    };

    if(message.content.slice(0, 12) == 'sensei mock ') {
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

    if(message.content == 'sensei translate') {
        req.form({
            "q": cached_message,
            "target": "en"
        });
        
        req.end(function (res) {
            if (res.error) {console.log(res.error); return;};
        
            message.channel.send('`'+JSON.stringify(res.body.data.translations[0].translatedText).substr(1,(res.body.data.translations[0].translatedText).length)+'`');
        });
    };

    if(message.content.slice(0, 17) == 'sensei translate ') {
        text = message.content.substr(17)

        req.form({
            "q": text,
            "target": "en"
        });
        
        req.end(function (res) {
            if (res.error) {console.log(res.error); return;};
        
            message.channel.send('`'+JSON.stringify(res.body.data.translations[0].translatedText).substr(1,(res.body.data.translations[0].translatedText).length)+'`');
        });
    }

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
