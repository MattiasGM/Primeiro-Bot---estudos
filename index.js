const {
  Client, Events, GatewayIntentBits, Collection,
} = require('discord.js');

const dotenv = require('dotenv');

dotenv.config();
const { TOKEN } = process.env;

// Imports Commands
const fs = require('node:fs');
const path = require('node:path');

const commandsPath = path.join(__dirname, 'src', 'commands');

const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`Esse comando em ${filePath} está com "data" ou "execute ausentes"`);
  }
}

// Login

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

// Interactions
const 

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isStringSelectMenu()) {

    /*
    const selected = interaction.values[0];
    if (selected === 'eikthyr') {
      await interaction.reply('Como derrotar Eikthyr');
    } else if (selected === 'python') {
      await interaction.reply('Documentação do Python: https://www.python.org');
    } else if (selected === 'csharp') {
      await interaction.reply('Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/');
    } else if (selected === 'discordjs') {
      await interaction.reply('Documentação do Discord.js: https://discordjs.guide/#before-you-begin');
    }
    */
  }

  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.log('Comando não encontrado');
    return;
  }
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply('Houve um erro ao executar esse comando');
  }
});
