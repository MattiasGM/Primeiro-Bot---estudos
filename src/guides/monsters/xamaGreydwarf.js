const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'xamaGreydwarf.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x38761d)
  .setTitle('Xamã de Greydwarf')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Xamã de Greydwarf!')
  .setImage('attachment://xamaGreydwarf.png')
  .addFields(
    { name: 'Descrição:', value: '*Os xamãs Greydwarf são criaturas agressivas encontradas na Floresta Negra. Eles são seres parecidos com árvores musgosas que atuam principalmente como curandeiros em patrulhas, ao mesmo tempo em que possuem a habilidade de lançar um ataque venenoso à distância.*' },
    { name: 'Localização: *Floresta Negra.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu Xamã de Greydwarf (10%), 1 Vomirtilos, 3-4 Madeira, 1 Olho de Greydwarf (50%), 1 resina', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu Xamã de Greydwarf (10%), 2 Vomirtilos, 6-8 Madeira, 2 Olho de Greydwarf (100%), 2 resina', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu Xamã de Greydwarf (10%), 4 Vomirtilos, 12-16 Madeira, 4 Olho de Greydwarf (100%), 4 resina', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '60HP, 30 Dano de Veneno - *Efeito: 20 HP perdidos durante 4s*', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '120HP, 45 Dano de Veneno - *Efeito: 20 HP perdidos durante 4s*', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '180HP, 60 Dano de Veneno - *Efeito: 20 HP perdidos durante 4s*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Em qualquer lugar em Floresta Negra *durante a noite*.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Fogo*', inline: true },
    { name: 'Imune:', value: '*Espírito*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Espante-os com tochas.' },
  );

module.exports = {
  id: 'xamaGreydwarf',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
