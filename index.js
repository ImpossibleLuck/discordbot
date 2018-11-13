const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTEwNzk5NzkwODE3MTQ4OTQ4.Dshv1w.WAM9O1f57RQ1LeGctppA64oCzPQ'

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'hello')
    {
        message.channel.sendMessage(' ' +message.author + ', Wassup boi');
    }
});

bot.on('ready',function(){
    console.log("Ready");
})
    
bot.login(TOKEN);