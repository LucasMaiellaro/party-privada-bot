module.exports = {
    chamarBitola,
    chamarRyan
}

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
        case 2:
            msg.channel.send('da o cu pra ele');
            break;
    }
}