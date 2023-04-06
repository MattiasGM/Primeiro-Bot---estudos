const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'boar.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Javali')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Javalis!')
  .setImage('attachment://boar.png')
  .addFields(
    { name: 'Descrição:', value: '*Javalis são criaturas hostis encontradas em Valheim.*' },
    { name: 'Localização: *Prado.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu de Javali (15%), 1 Pedaços de Couro (100%), 1 carne crua (50%)', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu de Javali (15%), 2 Pedaços de Couro (100%), 2 carne crua (50%)', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu de Javali (15%), 4 Pedaços de Couro (100%), 4 carne crua (50%)', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '10HP, 10 Dano Esmagador', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '20HP, 15 Dano Esmagador', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '30HP, 20 Dano Esmagador', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Domesticação:', value: 'Atrair o Javali para um cercado e colocar comida para ele, esperar até que seja domado.', inline: true },
    { name: 'Alimentação:', value: 'Frutas: *Framboesas e Mirtilos*, Colheitas: *Cenoura e Nabo*.', inline: true },
    { name: 'Reprodução:', value: 'Precisa de no mínimo 2 javalis domesticados, basta alimentar ambos jogando a comida no chão (pode jogar a comida em pack).', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'construa uma bancada de trabalho perto para que a comida não suma do chão, não construir nada que contenha fogo (fogueira, tochas, etc.) para não assustalos, Javalis atacarão mobs hostis como esqueletos, etc..., coletar os javalis excedentes com Faca de Açougueiro.' },
  );

module.exports = {
  id: 'boar',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
