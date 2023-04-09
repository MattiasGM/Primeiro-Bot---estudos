const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'fish.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x6fa8dc)
  .setTitle('Peixe')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Peixes!')
  .setImage('attachment://fish.png')
  .addFields(
    { name: 'Descrição:', value: '*Peixes podem ser capturados com as mãos utilizando uma vara de pesca e iscas, que podem ser adquiridos no Mercador.*' },
    { name: 'Localização: *Rios e Oceano.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Peixe cru (100%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '2 Peixe cru (100%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '4 Peixe cru (100%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Tipos de Peixe atualmente:', value: '\u200B' },
    { name: '1:', value: 'Perca, fornecerá 1 peixe cru por captura.', inline: true },
    { name: '2:', value: 'Lúcio médio, fornecerá 2 peixe cru por captura.', inline: true },
    { name: '3:', value: 'Atum, fornecerá 4 peixe cru por captura.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Culinária:', value: '\u200B' },
    { name: '1:', value: 'Peixe cozido.', inline: true },
    { name: '2:', value: 'Tacos de peixe.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '1HP, 0 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '1HP, 0 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '1HP, 0 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Domesticação:', value: '*Não domesticável*.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Notas:', value: 'Peixes vem em diferentes tamanhos e fornecem diferentes quantidades de peixe cru. Os Atuns dão a maior quantia de peixe cru, sendo 4 peças de peixe cru. Os atuns são encontrados mais longe da costa e se movem mais rápido que outros peixes.' },
  );

module.exports = {
  id: 'fish',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
