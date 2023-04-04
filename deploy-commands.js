const {
  REST, Routes,
} = require('discord.js');

// dotenv
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Impots Commands
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const foldersPath = path.join(__dirname, 'src', 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
  }
}

// instance REST
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Deploy

(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    // PUT, data
    const data = await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
