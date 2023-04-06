const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'yagluth.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Yagluth')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'IGN', url: 'https://www.ign.com/wikis/valheim/Bosses' })
  .setDescription('O essêncial sobre o quinto Boss!')
  .setImage('attachment://yagluth.png')
  .addFields(
    { name: 'Descrição:', value: '*Longas eras depois, ele usava uma coroa, sob um céu vermelho-sangue. Agora nada resta de tudo o que ele era, mas seu espírito não pode morrer.*' },
    { name: 'Localização: *Planícies*', value: '\u200B' },
    { name: 'HP:', value: '10000', inline: true },
    { name: 'Dano:', value: '130-180', inline: true },
    { name: 'Drops:', value: '1 troféu de Yagluth ( 100% ), 3 altar Wispis ( 100% )' },
    { name: 'Como invocar:', value: '5 Fuling Troféus em um altar místico no Planícies. (pegar a localização lendo uma pedra rúnica explorando os vilarejos de goblins nas planicies)' },
    { name: 'Poder Liberado:', value: 'Reduz todos os danos causados por ataques elementares ( Frost, Fire e Poison ) por 5 minutos.' },
  );

module.exports = {
  id: 'yagluth',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
