const { Client, Intents} = require('discord.js');
const mackBot = new Client({intents: [Intents.FLAGS.GUILDS]});

mackBot.on('ready', () => {
    console.log('Logged in as bot #');
});

mackBot.login('ODgzNDI0NDYyNjcyOTE2NTMw.YTJvJQ.Y5kSBXIO9_TnoS6wqUzZJN137PU');