const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'wolf.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0xbcbcbc)
  .setTitle('Lobo')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Lobos!')
  .setImage('attachment://wolf.png')
  .addFields(
    { name: 'Descrição:', value: '*Lobo é uma criatura Hostil encontrada em Valheim.*' },
    { name: 'Localização: *Montanhas de neve.*', value: '\u200B' },
    { name: 'Drops:', value: 'Troféu de Lobo, Pele de Lobo, carne de lobo crua' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '80HP, 70 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '160HP, 105 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '240HP, 140 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Domesticação:', value: 'Atrair o Lobo para um cercado (preferencia de Pedra) e colocar comida para ele, esperar até que seja domado.', inline: true },
    { name: 'Alimentação:', value: 'Carnes: *Cervo, Javali ou Peixe cru*.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Reprodução:', value: 'Dois lobos adultos domesticados que foram alimentados recentemente e que estão com o humor "feliz" (sem fome ou irritados por inimigos próximos) acabarão por acasalar autonomamente.' },
    { name: 'Reprodução seletiva: lobos diurnos e lobos noturnos explicados:', value: '~OBS: Lobos de 2 estrelas só spawnam a noite' },
    { name: 'Lobos diurnos:', value: 'Pode Spawnar apenas lobos de 0 e 1 estrelas durante o dia, eles não somem durante a noite' },
    { name: 'Lobos noturnos:', value: 'Lobos que façam spawn à noite, de qualquer nível, só irão comer, reproduzir e seguir-te durante a noite, mesmo depois de os teres domesticado. Eles podem até mesmo desaparecer completamente durante o dia, momento em que os perderás como companheiros domesticados.' },
    { name: 'Como conseguir lobos de 2 estrelas diurnos:', value: 'Com o cruzamento seletivo, ponha um lobo diurno de 1 estrela para acasalar com 1 lobo noturno de 2 estrelas domesticado (pode demorar já que existe a possibilidade do lobo desaparecer completamente), os traços hereditários são passados com uma chance do filhote vir com 1 ou 2 estrelas e com o efeito de lobo noturno removido, fazendo assim, um lobo de 2 estrelas diurno.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Não podes direcionar os teus lobos para o ataque - eles fazem julgamentos sobre quem atacar e quando atacar por conta própria.' },
    { name: '\u200B', value: 'Isto pode não parecer um grande problema. No entanto, mesmo quando estás seguro em casa na tua base totalmente fechada, lobos domesticados ficarão irritados se algum inimigo passar na sua linha de visão.' },
    { name: '\u200B', value: 'Numa surpreendente mecânica, o teu companheiro começará a derrubar as tuas defesas se isso significar que ele pode começar uma luta com um qualquer Grayling errante que atraiu a sua ira. Usa cercas altas ou barricadas naturais para garantires que os inimigos que passam não distraem os teus lobos domesticados quando eles estiverem dentro de uma base.' },
  );

module.exports = {
  id: 'wolf',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
