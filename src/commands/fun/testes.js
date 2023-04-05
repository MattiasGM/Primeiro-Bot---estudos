const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');

function app(channel) {
  const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
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
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

  channel.send({ embeds: [exampleEmbed] });
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('testes')
    .setDescription('Sends a random gif!')
    .addChannelOption((option) => option.setName('channel')
      .setDescription('The channel to echo into')
    // Ensure the user can only select a TextChannel for output
      .addChannelTypes(ChannelType.GuildText)),

  async execute(interaction) {
    console.log(`interaction: ${interaction.options.getChannel('channel')}`);
    const channel = interaction.options.getChannel('channel');
    app(channel);
    await interaction.reply({ content: 'Enviado!', ephemeral: true });
  },
};
