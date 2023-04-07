const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'skeleton.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Esqueleto')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Esqueletos!')
  .setImage('attachment://skeleton.png')
  .addFields(
    { name: 'Descrição:', value: '*Esqueletos são criaturas agressivas encontradas nas Florestas Negras e nos Pântanos que guardam Câmaras Funerárias e, às vezes, torres Arruinadas . Eles são, como o próprio nome sugere, restos de esqueletos humanos que desde então foram ressuscitados dos mortos.*' },
    { name: 'Localização: *Florestas Negras/ Pântanos/ Câmaras Funerárias/ Montanhas de Neve.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu Esqueleto (10%), 1 Fragmentos de Ossos', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu Esqueleto (10%), 2 Fragmentos de Ossos', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu Esqueleto (10%), 4 Fragmentos de Ossos', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '40HP, 25 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '80HP, 37 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '120HP, 50 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Em qualquer lugar em Floresta Negra *~Raro*.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Esmagador - Fogo*', inline: true },
    { name: 'Imune:', value: '*Veneno*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Use uma Maça para dar dano crítico.' },
  );

module.exports = {
  id: 'skeleton',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
