const { prefix } = require('../../config.json');

module.exports = {configs}

function configs(msg) {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const comando = args.shift().toLowerCase();

    switch (comando) {
        case 'convidar':
            msg.channel.send('opa, só me chamar lá ;) \nhttps://discord.com/api/oauth2/authorize?client_id=788178980687708160&permissions=8&scope=bot')
    }
}