const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'moder.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Moder')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'IGN', url: 'https://www.ign.com/wikis/valheim/Bosses' })
  .setDescription('O essêncial sobre o quarto Boss!')
  .setImage('attachment://moder.png')
  .addFields(
    { name: 'Descrição:', value: '*Asas negras através da lua e do sol, descendo da montanha nossa mãe vem. Suas lágrimas chorosas cairão como chuva, sua voz nos chamará de volta para casa.*' },
    { name: 'Localização: *Montanha*', value: '\u200B' },
    { name: 'HP:', value: '7500', inline: true },
    { name: 'Dano:', value: '60-140', inline: true },
    { name: 'Drops:', value: '1 troféu Moder ( 100% ), 10 Lágrima do Dragão ( 100% )' },
    { name: 'Como invocar:', value: '3 ovos de dragão em um altar místico nas Montanhas. (pegar a localização lendo uma pedra rúnica explorando as montanhas de neve)' },
    { name: 'Poder Liberado:', value: 'Sempre tenha vento de cauda enquanto navega por 5 minutos.' },
  );

module.exports = {
  id: 'moder',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
