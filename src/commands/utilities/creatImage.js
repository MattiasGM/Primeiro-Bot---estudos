const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const app = async (openai, interaction) => {
  const imageDescription = interaction.options.getString('image');

  const response = await openai.createImage({
    prompt: imageDescription,
    n: 1,
    size: '1024x1024',
  });

  const imageUrl = response.data.data[0].url;

  const embed = new EmbedBuilder()
    .setColor(0x2986cc)
    .setTitle(imageDescription)
    .setImage(imageUrl);

  await interaction.editReply({ content: '', embeds: [embed], ephemeral: true });
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gerar-image')
    .setDescription('Consultar o Oráculo')
    .addStringOption((option) => option.setName('image')
      .setDescription('Descreva sua imagem, meu Nobre')),

  async execute(interaction, openai) {
    await interaction.deferReply({ ephemeral: true });
    await app(openai, interaction);
  },
};
