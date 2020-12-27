const { prefix } = require('../../config.json');

module.exports = {responderSegredos}

function responderSegredos(msg) {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'vsf':
            msg.reply('vai vc seu arrombado');
            break;
        case 'bonitinho':
            msg.channel.send({files: ['./app/img/beirute.png']});
            break;
        case 'turminha':
            msg.channel.send({files: ['./app/img/turminha.png']});
            break;
    }
}