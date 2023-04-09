const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'lox.jpeg');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x783f04)
  .setTitle('Lox')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Lox!')
  .setImage('attachment://lox.jpeg')
  .addFields(
    { name: 'Descrição:', value: '*Lox é uma criatura Hostil encontrada em Valheim.*' },
    { name: 'Localização: *Planicies.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu de Lox (10%), 2 Pele de Lox (100%), 4-5 carne de lox crua (100%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu de Lox (10%), 4 Pele de Lox (100%), 8-10 carne de lox crua (100%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu de Lox (10%), 8 Pele de Lox (100%), 16-20 carne de lox crua (100%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Domesticação:', value: 'Atrair o Lox para um cercado e colocar comida para ele, esperar até que seja domado.', inline: true },
    { name: 'Alimentação:', value: 'Frutas: *Nuvineza*, Colheitas: *Cevada ou Linho*.', inline: true },
    { name: 'Reprodução:', value: 'Não implementado o sistema de reprodução até o momento.', inline: true },
    { name: 'Montaria:', value: 'Após domesticado é possível montar no lox com uma Sela de Lox (fabricada em uma Bancada de Trabalho lv:1+).' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Recomenda-se construir uma cerca de pedra ao domar Lox, pois eles podem facilmente quebrar estruturas de madeira.' },
  );

module.exports = {
  id: 'lox',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
