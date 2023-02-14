const { Client, Events, MesageContent, GatewayIntentBits, Collection, Partials } = require('discord.js');
const { token } = require('./config.json');

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Messages, GuildMember, ThreadMember, Channel} = Partials;





const {loadEvents} = require('./Handler/eventHandler'); 
const {loadCommands} = require('./Handler/commandHandler'); 

const client = new Client({ 
	intents: [GatewayIntentBits.Guilds, GuildMember, GuildMessages],
	partials: [User, Messages, GuildMember, ThreadMember],
 });

 const fs = require('node:fs');
 const path = require('node:path');

client.commands = new Collection();


const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Lỗi, liên hệ Admin!', ephemeral: true });
	}
});

client.on(Events.ClientReady, c => {
	console.log(`Bot đã hoạt động`);
	client.user.setStatus('idle');
  client.user.setPresence({ activities: [{ name: 'Bing Chilling 🍦' }], status: 'Listening'});
});

process.on('unhandledRejection', error => {
	console.error('0');
  });
  process.on("uncaughtException", error => {
	console.error('0');
  });
  process.on('uncaughtExceptionMonitor', error => {
	console.error('0');
  });
  process.on("uncaughtException", error => {
	console.error('0');
  });
  process.on('beforeExit', error => {
	console.error('0');
  });
  process.on('exit', error => {
	console.error('0');
  });
  process.on('multipleResolves', error => {
	console.error('0');
  });


  
client.login(token);