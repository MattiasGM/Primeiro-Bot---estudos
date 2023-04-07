const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'serpent.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Serpente Marinha')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre as Serpentes Marinhas!')
  .setImage('attachment://serpent.png')
  .addFields(
    { name: 'Descrição:', value: '*Serpentes são criaturas Hostis encontrado em Oceanos. São répteis grandes, semelhantes a serpentes aquáticas, com seis olhos brilhantes, barbatanas dorsais pontiagudas e uma boca aberta cheia de dentes afiados.*' },
    { name: 'Localização: *Oceanos.*', value: '\u200B' },
    { name: 'Drops:', value: 'Troféu de Serpente (33%), 8-9 Escama de Serpente, 6-7 Carne de serpente' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano:', value: '400HP, 70 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Capturar com um Arpão Abissal e leva-la para a costa, aonde pode matar fora da água sem muitos problemas' },
  );

module.exports = {
  id: 'serpent',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
