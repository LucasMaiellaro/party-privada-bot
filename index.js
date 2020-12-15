const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix, token} = require('./config.json')
let numero;

bot.login(token);

bot.once('ready', () => {
    console.log('Im ready!');
})

bot.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'help':
            msg.channel.send('**prefixo:** `pp` \n**comandos dos membros:** `bitola`, `dezi`, `bife`, `venom`, `bina`, `ryan`, `tiofino` \n**configs:** `convidar`');
            break;
        case 'bitola':
            numero = Math.floor(Math.random() * 3);
            chamarBitola(numero, msg);
            break;
        case 'dezi':
            msg.channel.send('elliee babyyy');
            break;
        case 'bife':
            msg.channel.send('EOQ???');
            break;
        case 'venom':
            msg.reply('psi psi psi psi');
            break;
        case 'bina':
            msg.channel.send('whoooaaa');
            break;
        case 'ryan':
            numero = Math.floor(Math.random() * 2);
            chamarRyan(numero, msg)
            break;
        case 'tiofino':
            msg.reply('eai mermão');
            break;
    }
});

bot.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'convidar':
            msg.channel.send('opa, só me chamar lá ;) \nhttps://discord.com/api/oauth2/authorize?client_id=788178980687708160&permissions=8&scope=bot')
    }
})

function chamarBitola(numero, msg) {
    switch (numero) {
        case 0:
            msg.channel.send('cadê meu gordão?');
            break;
        case 1:
            msg.channel.send('engraçadão vc em');
            break;
        case 2:
            msg.channel.send('fodase');
            break;
    }
}

function chamarRyan(numero, msg) {
    switch(numero) {
        case 0:
            msg.channel.send('babyyyyyy');
            break;
        case 1:
            msg.reply('vc é aquela mulher de dois olho?');
            break;
    }
}