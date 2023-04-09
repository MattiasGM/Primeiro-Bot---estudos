const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'eikthyr.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x93c47d)
  .setTitle('Eikthyr')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'IGN', url: 'https://www.ign.com/wikis/valheim/Bosses' })
  .setDescription('O essêncial sobre o primeiro Boss!')
  .setImage('attachment://eikthyr.png')
  .addFields(
    { name: 'Descrição:', value: '*Seus chifres são ramos de ferro, eles quebram as pedras e derrubam montanhas. Seus cascos são o som do trovão. Sua voz é um vendaval uivante.*' },
    { name: 'Localização: *Prado*', value: '\u200B' },
    { name: 'HP:', value: '500', inline: true },
    { name: 'Dano:', value: '15 ~ 20', inline: true },
    { name: 'Drops:', value: '1 troféu Eikthyr ( 100% ), 3 chifres rígido ( 100% )' },
    { name: 'Como invocar:', value: '2 troféus de Cervo em um altar místico no Prados. (pegar a localização na pedra rúnica do spawn)' },
    { name: 'Poder Liberado:', value: '60% menos dreno de resistência (apenas de: correr e pular) por 5 minutos.' },
  );

module.exports = {
  id: 'eikthyr',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
