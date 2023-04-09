const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'lizard.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x6aa84f)
  .setTitle('Lagarto')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Lagartos!')
  .setImage('attachment://lizard.png')
  .addFields(
    { name: 'Descrição:', value: '*Javalis são criaturas hostis encontradas em Valheim.*' },
    { name: 'Localização: *Próximo a água em: Prados e Floresta Negra.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu de Lagarto (5%), 1 Rabo de Lagarto (70%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu de Lagarto (5%), 2 Pedaços de Couro (100%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu de Lagarto (5%), 4 Pedaços de Couro (100%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '5HP, 6 Dano Cortante', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '10HP, 9 Dano Cortante', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '15HP, 12 Dano Cortante', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Domesticação:', value: '*Não domesticável*.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Notas:', value: 'Podem ser encontrados andando longe de fontes de água e áreas de floresta durante tempestades (precisa de confirmação).' },
  );

module.exports = {
  id: 'lizard',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
