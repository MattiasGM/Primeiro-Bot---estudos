const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const app = async (openai, interaction) => {
  const question = interaction.options.getString('pergunta');

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: question }],
    temperature: 0.8,
    max_tokens: 1500,
  });

  const message = response.data.choices[0].message.content;

  const embed = new EmbedBuilder()
    .setColor(0x2986cc)
    .setTitle('Oráculo')
    .addFields(
      { name: 'Pergunta: ', value: question },
      { name: 'Resposta: ', value: message },
    );
  await interaction.editReply({ content: '', embeds: [embed], ephemeral: true });
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chatgpt')
    .setDescription('Consultar o Oráculo')
    .addStringOption((option) => option.setName('pergunta')
      .setDescription('Faça sua pergunta, meu Nobre')),

  async execute(interaction, openai) {
    await interaction.deferReply({ ephemeral: true });
    await app(openai, interaction);
  },
};
