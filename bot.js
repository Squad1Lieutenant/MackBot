const { Client, Intents, DiscordAPIError} = require('discord.js');
const Discord = require('discord.js');
const mackBot = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { MessageEmbed } = require('discord.js');
const { token } = require('./tokens.json');


const channel = '883426061004713994'; //Channel for which role messages are placed in
const guild = mackBot.guilds.cache.get('<882718411631763507>');

//Role definitions and their emojis
const freshmanE = '1️⃣';
const sophomoreE = '2️⃣';
const juniorE = '3️⃣';
const seniorE = '4️⃣';
const gradE = '5️⃣';
const alumniE = '6️⃣';
const nonStudentE = '7️⃣';
const stemMajorE = '🌱';
const artsMajorE = '🎨';
const businessMajorE = '💼';
const humanitiesMajorE = '🌎';
const healthMajorE = '🚑';
const interdisciplinaryMajorE = '💻';
const stemMinorE = '🌱';
const artsMinorE = '🎨';
const businessMinorE = '💼';
const humanitiesMinorE = '🌎';
const healthMinorE = '🚑';
const interdisciplinaryMinorE = '💻';
const monicanE = '🏚️';
const ashE = '⛪';
const deeganE = '🏨';
const royalE = '🏦'
const northE = '🏠';
const southE = '🏘️';
const seniorApptsE = '🕌';
const obrienE = '🏫';
const townhousesE = '🏢';
const commuterE = '🚗';
const heHimE = '👨';
const sheHerE = '👩';
const theyThemE = '🧍';
const otherPronounsE = '🌻';
//End role definitions section

let gradeMessageId = '';
let majorMessageId = '';
let minorMessageId = '';
let housingMessageId = '';
let pronounsMessageId = '';
let pingsMessageId = '';

let gradeEmbed = new MessageEmbed()
    .setColor('#0B335E')
    .setTitle('Select your grade/year')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merrimack_Warriors.svg/1200px-Merrimack_Warriors.svg.png')
    .setDescription(freshmanE + ' - Freshman\n'
        + sophomoreE + ' - Sophomore\n'
        + juniorE + ' - Junior\n'
        + seniorE + ' - Senior\n'
        + gradE + ' - Grad Student\n'
        + alumniE + ' - Alumni\n'
        + nonStudentE + ' - Non Student');

let majorEmbed = new MessageEmbed()
    .setColor('#FAB20B')
    .setTitle('Select your major(s)')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merrimack_Warriors.svg/1200px-Merrimack_Warriors.svg.png')
    .setDescription(stemMajorE + ' - STEM\n'
        + businessMajorE + ' - Business\n'
        + artsMajorE + ' - Arts\n'
        + humanitiesMajorE + ' - Humanities\n'
        + healthMajorE + ' - Health\n'
        + interdisciplinaryMajorE + ' - Interdisciplinary');

let minorEmbed = new MessageEmbed()
    .setColor('#0B335E')
    .setTitle('Select your minor(s)')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merrimack_Warriors.svg/1200px-Merrimack_Warriors.svg.png')
    .setDescription(stemMinorE + ' - STEM\n'
        + businessMinorE + ' - Business\n'
        + artsMinorE + ' - Arts\n'
        + humanitiesMinorE + ' - Humanities\n'
        + healthMinorE + ' - Health\n'
        + interdisciplinaryMinorE + ' - Interdisciplinary');

let dormEmbed = new MessageEmbed()
    .setColor('#FAB20B')
    .setTitle('Select your major(s)')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merrimack_Warriors.svg/1200px-Merrimack_Warriors.svg.png')
    .setDescription(monicanE + ' - Monican\n'
        + ashE + ' - Ash\n'
        + deeganE + ' - Deegan\n'
        + obrienE + ' - Obrien\n'
        + royalE + ' - Royal\n'
        + northE + ' - North Res\n'
        + southE + ' - South Res\n'
        + townhousesE + ' - Townhouses\n'
        + seniorApptsE + ' - Senior Appts\n'
        + commuterE + ' - Commuter');

let pronounsEmbed = new MessageEmbed()
    .setColor('#0B335E')
    .setTitle('Select your pronoun(s)')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merrimack_Warriors.svg/1200px-Merrimack_Warriors.svg.png')
    .setDescription(heHimE + ' - He\\him\n'
        + sheHerE + ' - She\\Her\n'
        + theyThemE + ' - They\\Them\n'
        + otherPronounsE + ' - Other Pronouns');

mackBot.once('ready', () =>{
    mackBot.channels.cache.get('883426061004713994').send({embeds: [gradeEmbed]}).then(embedMessage => {
        embedMessage.react(freshmanE)
        .then(() => embedMessage.react(sophomoreE))
        .then(() => embedMessage.react(juniorE))
        .then(() => embedMessage.react(seniorE))
        .then(() => embedMessage.react(gradE))
        .then(() => embedMessage.react(alumniE))
        .then(() => embedMessage.react(nonStudentE))
        .catch(error => console.error('One of the emojis failed to react:', error));
        gradeMessageId = embedMessage.id;
        console.log('Grade Message ID: ' + gradeMessageId);
    });

    mackBot.channels.cache.get('883426061004713994').send({embeds: [majorEmbed]}).then(embedMessage => {
        embedMessage.react(stemMajorE)
        .then(() => embedMessage.react(businessMajorE))
        .then(() => embedMessage.react(artsMajorE))
        .then(() => embedMessage.react(humanitiesMajorE))
        .then(() => embedMessage.react(healthMajorE))
        .then(() => embedMessage.react(interdisciplinaryMajorE))
        .catch(error => console.error('One of the emojis failed to react:', error));
        majorMessageId = embedMessage.id;
        console.log('Major Message ID: ' + majorMessageId);
    });

    mackBot.channels.cache.get('883426061004713994').send({embeds: [minorEmbed]}).then(embedMessage => {
        embedMessage.react(stemMajorE)
        .then(() => embedMessage.react(businessMinorE))
        .then(() => embedMessage.react(artsMinorE))
        .then(() => embedMessage.react(humanitiesMinorE))
        .then(() => embedMessage.react(healthMinorE))
        .then(() => embedMessage.react(interdisciplinaryMinorE))
        .catch(error => console.error('One of the emojis failed to react:', error));
        minorMessageId = embedMessage.id;
        console.log('Minor Message ID: ' + minorMessageId);
    });

    mackBot.channels.cache.get('883426061004713994').send({embeds: [dormEmbed]}).then(embedMessage => {
        embedMessage.react(monicanE)
        .then(() => embedMessage.react(ashE))
        .then(() => embedMessage.react(deeganE))
        .then(() => embedMessage.react(obrienE))
        .then(() => embedMessage.react(royalE))
        .then(() => embedMessage.react(northE))
        .then(() => embedMessage.react(southE))
        .then(() => embedMessage.react(townhousesE))
        .then(() => embedMessage.react(seniorApptsE))
        .then(() => embedMessage.react(commuterE))
        .catch(error => console.error('One of the emojis failed to react:', error));
        housingMessageId = embedMessage.id;
        console.log('Housing Message ID: ' + housingMessageId);
    });

    mackBot.channels.cache.get('883426061004713994').send({embeds: [pronounsEmbed]}).then(embedMessage => {
        embedMessage.react(heHimE)
        .then(() => embedMessage.react(sheHerE))
        .then(() => embedMessage.react(theyThemE))
        .then(() => embedMessage.react(otherPronounsE))
        .catch(error => console.error('One of the emojis failed to react:', error));  
        pronounsMessageId = embedMessage.id;
        console.log('Pronouns Message ID: ' + pronounsMessageId);
    });
});

mackBot.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.message.partial) {
		try {
			await reaction.message.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
		}
    }

    console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
    console.log(`${reaction.message.id}'s gained a reaction!`);
});

mackBot.login(token);