const Discord = require('discord.js');

module.exports = {
    help: new Discord.MessageEmbed()
    .setColor('#f872b1')
    .setTitle('Comandos')
    .setDescription('Para me chamar use: `pp`')
    .setThumbnail('https://cdn.discordapp.com/attachments/286230812536602624/788180848473931806/4KmnGQFi5T2AgO9MRBS-T_olcawndBp_Is9Lqhf3C43lQbzIDgpxW5Y1cfMn7Q2-HAENdig6oqPRFyN30PQO4yLJOukHmWQK9rup.png')
    .addFields(
        {name: 'Membros:', value: '`bitola`, `dezi`, `bife`, `venom`, `bina`, `ryan`, `tiofino`, `beirute`'},
        {name: 'Configurações:', value: '`convidar`'},
        {name: 'Comandos Secretos:', value:'???'}
    )
}