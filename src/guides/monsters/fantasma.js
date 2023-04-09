const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'ghost.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x674ea7)
  .setTitle('Fantasma')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Fantasma!')
  .setImage('attachment://ghost.png')
  .addFields(
    { name: 'Descrição:', value: '*Fantasmas são agressivos criaturas encontrado em Florestas Negras dentro das Câmaras Fúnebres. São aparições humanóides sombrias e fantasmagóricas com olhos roxos brilhantes.*' },
    { name: 'Localização: *Floresta Negra*', value: '\u200B' },
    { name: 'Drops:', value: 'nenhum', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano:', value: '60HP, 25 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Apenas nas Câmaras Fúnebres *~Raro*.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Espírito*', inline: true },
    { name: 'Imune:', value: '*Veneno*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Use armas de Prata para dar dano crítico.' },
  );

module.exports = {
  id: 'ghost',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
