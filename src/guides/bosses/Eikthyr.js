const { EmbedBuilder } = require('discord.js');

const eikthyrEmbed = new EmbedBuilder()
  .setColor('orange')
  .setTitle('Some title')
  .setURL('https://discord.js.org/')
  .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
  .setDescription('Some description here')
  .setThumbnail('https://i.imgur.com/AfFp7pu.png')
  .addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
  )
  .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
  .setImage('https://i.imgur.com/AfFp7pu.png');

module.exports = {
  path: 'bosses',
  id: 'eikthyr',
  async execute(interaction) {
    await interaction.reply({ embeds: [eikthyrEmbed], ephemeral: true });
  },
};
