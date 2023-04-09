const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'greydwarfBrute.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x274e13)
  .setTitle('Greydwarf Brutamonte')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Greydwarf Brutamonte!')
  .setImage('attachment://greydwarfBrute.png')
  .addFields(
    { name: 'Descrição:', value: '*Greydwarf brutamontes são criaturas Hostis encontrado em Florestas Negras. São seres grandes e musgosos, semelhantes a árvores, e são substancialmente maiores e mais fortes que Greydwarf.*' },
    { name: 'Localização: *Floresta Negra.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu Greydwarf Bruto (10%), 1 Dente de Leão, 2 Pedra, 3-4 Madeira, 2 Olho de Greydwarf (50%), 1 Sementes antigas (33%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu Greydwarf Bruto (10%), 2 Dente de Leão, 4 Pedra, 6-8 Madeira, 4 Olho de Greydwarf (100%), 2 Sementes antigas (66%%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu Greydwarf Bruto (10%), 4 Dente de Leão, 8 Pedra, 12-16 Madeira, 8 Olho de Greydwarf (100%), 4 Sementes antigas (100%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '150HP, 30 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '300HP, 45 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '450HP, 60 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Em qualquer lugar em Floresta Negra *durante a noite*.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Fogo*', inline: true },
    { name: 'Imune:', value: '*Espírito*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Espante-os com tochas.' },
  );

module.exports = {
  id: 'greydwarfBrute',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
