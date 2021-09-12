const { Client, Intents, DiscordAPIError} = require('discord.js');
const Discord = require('discord.js');
const mackBot = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { MessageEmbed } = require('discord.js');
const { token } = require('./tokens.json');
const fs = require('fs');

//Channel for which role messages are placed in
const channel = '885902034048544799'; 
const guild = mackBot.guilds.cache.get('<882718411631763507>');

//Role emoji definitions
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
const meetupsE = '🤝';
const voiceE = '😀';

//Role IDs 
//Grades
const nonStudent = '882724272093663283';
const freshman = '882723853565063178';
const sophomore = '882723961258000486';
const junior = '882724076102254663';
const senior = '882724133216067594';
const gradStudent = '882724209460117534';
const alumni = '884184786091003905';

//Majors
const stemMajor = '882727587779067964';
const artsMajor = '882727687532199946';
const businessMajor = '882727775159611422';
const humanitiesMajor = '882727847943368775';
const healthMajor = '882727961470582815';
const interdisciplinaryMajor = '882728079380856883';

//Minors
const stemMinor = '882731369514545182';
const artsMinor = '882731424514453524';
const businessMinor = '882731475777241129';
const healthMinor = '882731577556217887';
const humanitiesMinor = '882731650511941712';
const interdisciplinaryMinor = '882731713040613436';

//Residence
const monican = '882736271485710398';
const ash = '882736323050487820';
const deegan = '882736383612043328';
const royal = '882736501635551323';
const northRes = '882736553703669820';
const southRes = '882736614466535454';
const seniorAppts = '882736675753713674';
const obrien = '882785322491060244';
const townhouses = '882785381114867782';
const commuter = '882736731386961951';

//Pings
const meetup = '884155018436022312';
const vc = '884154942586228818';

//Pronouns
const heHim = '884160171805405235';
const sheHer = '884160595119734806';
const theyThem = '884160722026762352';
const otherPronouns = '884160792931487774';



let gradeMessageId = fs.readFileSync('./gradeMessageID.txt', {encoding:'utf8', flag:'r'});
let majorMessageId = fs.readFileSync('./majorMessageID.txt', {encoding:'utf8', flag:'r'});
let minorMessageId = fs.readFileSync('./minorMessageID.txt', {encoding:'utf8', flag:'r'});
let housingMessageId = fs.readFileSync('./housingMessageID.txt', {encoding:'utf8', flag:'r'});
let pronounsMessageId = fs.readFileSync('./pronounsMessageID.txt', {encoding:'utf8', flag:'r'});
let pingsMessageId = fs.readFileSync('./pingsMessageID.txt', {encoding:'utf8', flag:'r'});

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

let pingsEmbed = new MessageEmbed()
    .setColor('#FAB20B')
    .setTitle('Select your ping(s)')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merrimack_Warriors.svg/1200px-Merrimack_Warriors.svg.png')
    .setDescription(voiceE + ' - VC\n'
        + meetupsE + ' - Meetups');

mackBot.once('ready', () =>{
    /*
    if(gradeMessageId === '' || majorMessageId === '' || 
    minorMessageId === '' || housingMessageId === '' ||
    pronounsMessageId === '' || pingsMessageId === '') {
        if (gradeMessageId !== '') {
            try{
            mackBot.channels.cache.get(channel).messages.fetch(gradeMessageId).then(message => message.delete());
            } catch(error) {
                console.error(error);
            }
        }
        if (majorMessageId !== '') {
            mackBot.channels.cache.get(channel).messages.fetch(majorMessageId).then(message => message.delete());
        }
        if (minorMessageId !== '') {
            mackBot.channels.cache.get(channel).messages.fetch(minorMessageId).then(message => message.delete());
        }
        if (housingMessageId !== '') {
            mackBot.channels.cache.get(channel).messages.fetch(housingMessageId).then(message => message.delete());
        }
        if (pronounsMessageId !== '') {
            mackBot.channels.cache.get(channel).messages.fetch(pronounsMessageId).then(message => message.delete());
        }
        if (pingsMessageId !== '') {
            mackBot.channels.cache.get(channel).messages.fetch(pingsMessageId).then(message => message.delete());
        }
    }
*/
    mackBot.channels.cache.get(channel).send({embeds: [gradeEmbed]}).then(embedMessage => {
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
        fs.writeFileSync("gradeMessageID.txt", pingsMessageId);

    });

    mackBot.channels.cache.get(channel).send({embeds: [majorEmbed]}).then(embedMessage => {
        embedMessage.react(stemMajorE)
        .then(() => embedMessage.react(businessMajorE))
        .then(() => embedMessage.react(artsMajorE))
        .then(() => embedMessage.react(humanitiesMajorE))
        .then(() => embedMessage.react(healthMajorE))
        .then(() => embedMessage.react(interdisciplinaryMajorE))
        .catch(error => console.error('One of the emojis failed to react:', error));
        majorMessageId = embedMessage.id;
        console.log('Major Message ID: ' + majorMessageId);
        fs.writeFileSync("majorMessageID.txt", majorMessageId);
    });

    mackBot.channels.cache.get(channel).send({embeds: [minorEmbed]}).then(embedMessage => {
        embedMessage.react(stemMajorE)
        .then(() => embedMessage.react(businessMinorE))
        .then(() => embedMessage.react(artsMinorE))
        .then(() => embedMessage.react(humanitiesMinorE))
        .then(() => embedMessage.react(healthMinorE))
        .then(() => embedMessage.react(interdisciplinaryMinorE))
        .catch(error => console.error('One of the emojis failed to react:', error));
        minorMessageId = embedMessage.id;
        console.log('Minor Message ID: ' + minorMessageId);
        fs.writeFileSync("minorMessageID.txt", minorMessageId);
    });

    mackBot.channels.cache.get(channel).send({embeds: [dormEmbed]}).then(embedMessage => {
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
        fs.writeFileSync("housingMessageID.txt", housingMessageId);
    });

    mackBot.channels.cache.get(channel).send({embeds: [pronounsEmbed]}).then(embedMessage => {
        embedMessage.react(heHimE)
        .then(() => embedMessage.react(sheHerE))
        .then(() => embedMessage.react(theyThemE))
        .then(() => embedMessage.react(otherPronounsE))
        .catch(error => console.error('One of the emojis failed to react:', error));  
        pronounsMessageId = embedMessage.id;
        console.log('Pronouns Message ID: ' + pronounsMessageId);
        fs.writeFileSync("pronounsMessageID.txt", pronounsMessageId);
    });

    mackBot.channels.cache.get(channel).send({embeds: [pingsEmbed]}).then(embedMessage => {
        embedMessage.react(voiceE)
        .then(() => embedMessage.react(meetupsE))
        .catch(error => console.error('One of the emojis failed to react'));
        pingsMessageId = embedMessage.id;
        console.log('Pings Message ID: ' + pingsMessageId);
        fs.writeFileSync("pingsMessageID.txt", pingsMessageId);
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

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === freshmanE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === freshman));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === sophomoreE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === sophomore));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === juniorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === junior));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === seniorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === senior));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === gradE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === gradStudent));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === alumniE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === alumni));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === nonStudentE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === nonStudent));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === stemMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === stemMajor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === businessMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === businessMajor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === artsMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === artsMajor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === humanitiesMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === humanitiesMajor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === healthMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === healthMajor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === interdisciplinaryMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === interdisciplinaryMajor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === stemMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === stemMinor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === businessMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === businessMinor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === artsMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === artsMinor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === humanitiesMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === humanitiesMinor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === healthMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === healthMinor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === interdisciplinaryMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === interdisciplinaryMinor));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === monicanE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === monican));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === ashE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === ash));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === deeganE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === deegan));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === obrienE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === obrien));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === royalE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === royal));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === northE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === northRes));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === southE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === sourthRes));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === townhousesE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === townhouses));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === seniorApptsE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === seniorAppts));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === commuterE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === commuter));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === heHimE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === heHim));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === sheHerE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === sheHer));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === theyThemE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === theyThem));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === otherPronounsE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === otherPronouns));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === voiceE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === vc));
        console.log("addedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === meetupsE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.add(reaction.message.guild.roles.cache.find(role => role.id === meetup));
        console.log("addedRole");
    }

});

mackBot.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) {
		try {
			await reaction.message.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
		}
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === freshmanE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === freshman));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === sophomoreE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === sophomore));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === juniorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === junior));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === seniorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === senior));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === gradE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === gradStudent));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === alumniE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === alumni));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === nonStudentE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === nonStudent));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === stemMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === stemMajor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === businessMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === businessMajor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === artsMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === artsMajor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === humanitiesMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === humanitiesMajor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === healthMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === healthMajor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === interdisciplinaryMajorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === interdisciplinaryMajor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === stemMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === stemMinor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === businessMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === businessMinor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === artsMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === artsMinor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === humanitiesMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === humanitiesMinor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === healthMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === healthMinor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === interdisciplinaryMinorE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === interdisciplinaryMinor));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === monicanE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === monican));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === ashE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === ash));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === deeganE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === deegan));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === obrienE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === obrien));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === royalE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === royal));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === northE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === northRes));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === southE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === sourthRes));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === townhousesE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === townhouses));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === seniorApptsE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === seniorAppts));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === commuterE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === commuter));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === heHimE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === heHim));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === sheHerE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === sheHer));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === theyThemE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === theyThem));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === otherPronounsE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === otherPronouns));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === voiceE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === vc));
        console.log("removedRole");
    }

    if (reaction.message.id === gradeMessageId && reaction.emoji.name === meetupsE && user.bot === false) {
        var roleMember = reaction.message.guild.members.cache.get(user.id);
        roleMember.roles.remove(reaction.message.guild.roles.cache.find(role => role.id === meetup));
        console.log("removedRole");
    }
});

mackBot.login(token);