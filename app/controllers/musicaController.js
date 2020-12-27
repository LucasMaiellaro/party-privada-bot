const { prefix } = require('../../config.json');

module.exports = {musica}

function musica(msg) {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();
    
    if (!msg.guild) return;

    switch (comando) {
        case 'join':
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join();
            } else {
                msg.reply('só vou me conectar se você estiver em uma call primeiro!');
            }
    }
}