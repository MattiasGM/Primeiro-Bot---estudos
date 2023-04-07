const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'greydwarf.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Greydwarf')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Greydwarf!')
  .setImage('attachment://greydwarf.png')
  .addFields(
    { name: 'Descrição:', value: '*Greydwarf são criaturas Hostis encontrado em Florestas Negras. Eles são seres musgosos semelhantes a árvores e são duas vezes mais fortes que seus Greyling homólogos.*' },
    { name: 'Localização: *Floresta Negra.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu Greydwarf (5%), 1 Resina, 1 Pedra, 1 Madeira, 1 Olho de Greydwarf (50%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu Greydwarf (5%), 2 Resina, 2 Pedra, 2 Madeira, 2 Olho de Greydwarf (100%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu Greydwarf (5%), 4 Resina, 4 Pedra, 4 Madeira, 4 Olho de Greydwarf (100%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '40HP, 10 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '80HP, 15 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '120HP, 20 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Em qualquer lugar em Floresta Negra.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Fogo*', inline: true },
    { name: 'Imune:', value: '*Espírito*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Espante-os com tochas.' },
  );

module.exports = {
  id: 'greydwarf',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
