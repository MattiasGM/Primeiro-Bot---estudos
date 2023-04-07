const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'deer.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Cervo')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Cervos!')
  .setImage('attachment://deer.png')
  .addFields(
    { name: 'Descrição:', value: '*Cervo é uma criatura Passiva encontrada em Valheim.*' },
    { name: 'Localização: *Prado e Floresta Negra.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu de Cervo (15%), 1-2 Pele de cervo (100%), 2 carne de cervo crua (50%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu de Cervo (15%), 2-4 Pele de cervo (100%), 4 carne de cervo crua (50%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu de Cervo (15%), 4-8 Pele de cervo (100%), 8 carne de cervo crua (50%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '10HP, 0 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '20HP, 0 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '30HP, 0 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Domesticação:', value: '*Não domesticável*.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Notas:', value: 'Existe um cervo "brilhante" que aparece apenas durante a noite na Floresta Negra. Ele possui chifres maiores e significativamente mais vida do que um cervo comum, e brilha em azul ciano. O cervo "brilhante" não possuí um nome ou categoria diferente até o presente momento.' },
  );

module.exports = {
  id: 'deer',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
