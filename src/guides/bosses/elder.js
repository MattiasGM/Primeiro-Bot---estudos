const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'elder.jpeg');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x38761d)
  .setTitle('Elder')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'IGN', url: 'https://www.ign.com/wikis/valheim/Bosses' })
  .setDescription('O essêncial sobre o segundo Boss!')
  .setImage('attachment://elder.jpeg')
  .addFields(
    { name: 'Descrição:', value: '*Primeiro da floresta, rei da floresta, senhor sobre aqueles que habitam a seus pés. Suas raízes crescerão onde as cidades estavam, seu sangue, seu vinho, sua carne, sua carne.*' },
    { name: 'Localização: *Floresta Negra*', value: '\u200B' },
    { name: 'HP:', value: '2500', inline: true },
    { name: 'Dano:', value: '35-60', inline: true },
    { name: 'Drops:', value: '1 troféu Elder ( 100% ), 1 Chave do Pântano ( 100% - por jogador )' },
    { name: 'Como invocar:', value: '3 sementes antigas em um altar místico na Floresta Negra. (pegar a localização lendo uma pedra rúnica, dentro de uma Dungeon de esqueletos na Floresta Negra)' },
    { name: 'Poder Liberado:', value: 'Corte árvores mais rapidamente por 5 minutos.' },
  );

module.exports = {
  id: 'elder',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
