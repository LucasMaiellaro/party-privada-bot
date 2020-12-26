const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix, token} = require('./config.json')
let numero;

bot.login(token);

bot.once('ready', () => {
    console.log('Estou pronto!');
})

// respostas
bot.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'help':
            msg.channel.send(help);
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
        case 'beirute':
            msg.channel.send('minhas costaaasss');
            break;
    }
});

// configs
bot.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'convidar':
            msg.channel.send('opa, só me chamar lá ;) \nhttps://discord.com/api/oauth2/authorize?client_id=788178980687708160&permissions=8&scope=bot')
    }
});

// comandos secretos
bot.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'vsf':
            msg.reply('vai vc seu arrombado');
            break;
        case 'bonitinho':
            msg.channel.send({files: ['./img/beirute.png']});
            break;
        case 'turminha':
            msg.channel.send({files: ['./img/turminha.png']});
            break;
    }
})

//cochichar
// bot.on('message', msg => {
//     if (!msg.content.startsWith(prefix)) return;

//     const args = msg.content.slice(prefix.length).trim().split(/ +/);
//     const comando = args.shift().toLowerCase();

//     switch (comando) {
//         case 'cochichar':
//             msg.author.send('eai mermao');
//     }
// })

// functions
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

const help = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Comandos')
    .setDescription('Para me chamar use: `pp`')
    .setThumbnail('https://cdn.discordapp.com/attachments/286230812536602624/788180848473931806/4KmnGQFi5T2AgO9MRBS-T_olcawndBp_Is9Lqhf3C43lQbzIDgpxW5Y1cfMn7Q2-HAENdig6oqPRFyN30PQO4yLJOukHmWQK9rup.png')
    .addFields(
        {name: 'Membros:', value: '`bitola`, `dezi`, `bife`, `venom`, `bina`, `ryan`, `tiofino`, `beirute`'},
        {name: 'Configurações:', value: '`convidar`'},
        {name: 'Comandos Secretos:', value:'???'}
    )