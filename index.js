const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require('./config.json');
const membrosController = require('./app/controllers/membrosController');
const configsController = require('./app/controllers/configsController');
const segredosController = require('./app/controllers/segredosController');
const musicaController = require('./app/controllers/musicaController');

bot.login(token);

bot.once('ready', () => {
    console.log('Estou pronto!');
})

bot.on('message', msg => {
    membrosController.responderMembros(msg);
    configsController.configs(msg);
    segredosController.responderSegredos(msg);
    musicaController.musica(msg)
});