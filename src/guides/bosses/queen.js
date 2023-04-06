const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'queen.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Queen')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'IGN', url: 'https://www.ign.com/wikis/valheim/Bosses' })
  .setDescription('O essêncial sobre o sexto Boss!')
  .setImage('attachment://queen.png')
  .addFields(
    { name: 'Descrição:', value: '*A rainha é a chefe do Mistlands e atualmente é o chefe final em Valheim. Ela é a rainha dos buscadores e os convoca para lutar com você em seu covil, onde foi presa pelo Dvergr. Ela pode vomitar veneno em você e cortá-lo com seus apêndices semelhantes a foices.*' },
    { name: 'Localização: *Mistlands*', value: '\u200B' },
    { name: 'HP:', value: '12.500', inline: true },
    { name: 'Dano:', value: '110-150', inline: true },
    { name: 'Drops:', value: '1 troféu da rainha ( 100% ), Queda da rainha ( 100% )' },
    { name: 'Como invocar:', value: 'Crie um Sealbreaker com nove fragmentos de Sealbreaker encontrados em minas infestadas. (pegar a localização lendo uma pedra rúnica nas minas infestadas das Mistlands)' },
    { name: 'Poder Liberado:', value: 'Mineração mais rápida e 100% aumentou a regeneração do Eitr por 5 minutos.' },
  );

module.exports = {
  id: 'queen',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
