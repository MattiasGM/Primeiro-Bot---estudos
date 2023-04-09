const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'rancidRemains.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x274e13)
  .setTitle('Restos rançosos')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Restos rançosos!')
  .setImage('attachment://rancidRemains.png')
  .addFields(
    { name: 'Descrição:', value: '*Restos rançosos são criaturas agressivas que guardam as Câmaras Fúnebres. Eles são, como o próprio nome sugere, Restos rançosos de esqueletos humanos que desde então foram ressuscitados dos mortos.*' },
    { name: 'Localização: *Floresta Negra*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu Restos rançosos (10%), 3 Fragmentos de Ossos', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu Restos rançosos (10%), 6 Fragmentos de Ossos', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu Restos rançosos (10%), 12 Fragmentos de Ossos', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '100HP, 20 Dano + 30 Veneno', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '200HP, 30 Dano + 45 Veneno', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '300HP, 40 Dano + 60 Veneno', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Apenas nas Câmaras Fúnebres *~Raro*.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Esmagador - Fogo*', inline: true },
    { name: 'Imune:', value: '*Veneno*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Use uma Maça para dar dano crítico.' },
  );

module.exports = {
  id: 'rancidRemains',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
