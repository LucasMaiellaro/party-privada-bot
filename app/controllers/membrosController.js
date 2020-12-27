const { prefix } = require('../../config.json');
const membrosService = require('../services/membrosService');
const embed = require('../services/embedService');

module.exports = {responderMembros}

function responderMembros(msg) {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    let numero;

    switch (comando) {
        case 'help':
            msg.channel.send(embed.help);
            break;
        case 'bitola':
            numero = Math.floor(Math.random() * 3);
            membrosService.chamarBitola(numero, msg);
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
            numero = Math.floor(Math.random() * 3);
            membrosService.chamarRyan(numero, msg);
            break;
        case 'tiofino':
            msg.reply('eai mermão');
            break;
        case 'beirute':
            msg.channel.send('minhas costaaasss');
            break;
    }
}