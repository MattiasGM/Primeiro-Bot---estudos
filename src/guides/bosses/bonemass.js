const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'bonemass.jpeg');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x274e13)
  .setTitle('Bonemass')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'IGN', url: 'https://www.ign.com/wikis/valheim/Bosses' })
  .setDescription('O essêncial sobre o terceiro Boss!')
  .setImage('attachment://bonemass.jpeg')
  .addFields(
    { name: 'Descrição:', value: '*Andarilho, olhe para os seus pés, que pisam no nosso túmulo. Mil ossos sem a carne deles o arrastarão para a sua destruição.*' },
    { name: 'Localização: *Pântano*', value: '\u200B' },
    { name: 'HP:', value: '5000', inline: true },
    { name: 'Dano:', value: '80-100', inline: true },
    { name: 'Drops:', value: '1 troféu Bonemass ( 100% ), 1 osso de desejo ( 100% - por jogador )' },
    { name: 'Como invocar:', value: '10 ossos murchos em um altar místico no pântano. (pegar a localização lendo uma pedra rúnica, dentro de uma Crypta nos pântanos)' },
    { name: 'Poder Liberado:', value: 'Aumente a resistência física por 5 minutos.' },
  );

module.exports = {
  id: 'bonemass',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
