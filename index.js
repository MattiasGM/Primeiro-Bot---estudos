const { Client, GatewayIntentBits, Collection } = require('discord.js');
// eslint-disable-next-line import/no-unresolved

const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config();
const { TOKEN, TOKEN_CHATGPT_3 } = process.env;

// configs CHATGPT3
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-GxHbzCBZUpUWzhT6XARDLaQ4',
  apiKey: TOKEN_CHATGPT_3,
});
const openai = new OpenAIApi(configuration);

// Imports Commands
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'src', 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folders of commandFolders) {
  const commandsPath = path.join(foldersPath, folders);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  }
}

// Interactions
const eventsPath = path.join(__dirname, 'src', 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => {
      event.execute(...args, openai);
    });
  }
}

// Login
client.login(TOKEN);
