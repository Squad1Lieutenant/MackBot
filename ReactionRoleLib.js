const { executionAsyncResource } = require("async_hooks");

module.exports = {
    name: 'ReactionRoleLib',
    description: "Reaction Role Messages",
    execute(message, args, Discord, client){
        const channel = '882721192929288244';
        
        const freshman = message.guild.roles.cache.find(role => role.name === "Freshman");
        const freshmanE = '1️⃣';
        
        const sophomore = message.guild.roles.cache.find(role => role.name === "Sophomore");
        const sophomoreE = '2️⃣';
        
        const junior = message.guild.roles.cache.find(role => role.name === "Junior");
        const juniorE = '3️⃣';
        
        const senior = message.guild.roles.cache.find(role => role.name === "Senior");
        const seniorE = '4️⃣';
        
        const alumni = message.guild.roles.cache.find(role => role.name === "Alumni");
        const alumniE = '5️⃣';
        
        const nonStudent = message.guild.roles.cache.find(role => role.name === "Non-Student");
        const nonStudentE = '6️⃣';
        
        const stemMajor = message.guild.roles.cache.find(role => role.name === "STEM Major");
        const stemMajorE = '🌱';
        
        const artsMajor = message.guild.roles.cache.find(role => role.name === "Arts Major");
        const artsMajorE = '🎨';
        
        const businessMajor = message.guild.roles.cache.find(role => role.name === "Business Major");
        const businessMajorE = '💼';
        
        const humanitiesMajor = message.guild.roles.cache.find(role => role.name === "Humanities Major");
        const humanitiesMajorE = '🌎';
        
        const healthMajor = message.guild.roles.cache.find(role => role.name === "Health Major");
        const healthMajorE = '🚑';
        
        const interdisciplinaryMajor = message.guild.roles.cache.find(role => role.name === "interdisciplinary Major");
        const interdisciplinaryMajorE = '🥚';
        
        const stemMinor = message.guild.roles.cache.find(role => role.name === "STEM Major");
        const stemMinorE = '🌱';
        
        const artsMinor = message.guild.roles.cache.find(role => role.name === "Arts Major");
        const artsMinorE = '🎨';

        const businessMinor = message.guild.roles.cache.find(role => role.name === "Business Major");
        const businessMinorE = '💼';
        
        const humanitiesMinor = message.guild.roles.cache.find(role => role.name === "Humanities Major");
        const humanitiesMinorE = '🌎';
        
        const healthMinor = message.guild.roles.cache.find(role => role.name === "Health Major");
        const healthMinorE = '🚑';

        const interdisciplinaryMinor = message.guild.roles.cache.find(role => role.name === "Interdisciplinary Minor");
        const interdisciplinaryMinorE = '🥚';
        
        const monican = message.guild.roles.cache.find(role => role.name === "Monican");
        const monicanE = '🏚️';

        const ash = message.guild.roles.cache.find(role => role.name === "Ash");
        const ashE = '⛪';

        const deegan = message.guild.roles.cache.find(role => role.name === "Deegan");
        const deeganE = '🏨';
        
        const royal = message.guild.roles.cache.find(role => role.name === "Royal");
        const royalE = '🏦'
        
        const north = message.guild.roles.cache.find(role => role.name === "North Res");
        const northE = '🏠';

        const south = message.guild.roles.cache.find(role => role.name === "South Res");
        const southE = '🏘️';

        const seniorAppts = message.guild.roles.cache.find(role => role.name === "Senior Appts");
        const seniorApptsE = '🕌';

        const obrien = message.guild.roles.cache.find(role => role.name === "Obrien");
        const obrienE = '🏫';
        
        const townhouses = message.guild.roles.cache.find(role => role.name === "Townhouses");
        const townhousesE = '🏢';
        
        const commuter = message.guild.roles.cache.find(role => role.name === "Commuter");
        const commuterE = '🚗';
        
        const heHim = message.guild.roles.cache.find(role => role.name === "He/Him");
        const heHimE = '👨';

        const sheHer = message.guild.roles.cache.find(role => role.name === "She/Her");
        const sheHerE = '👩';

        const theyThem = message.guild.roles.cache.find(role => role.name === "They/Them");
        const otherPronouns = message.guild.roles.cache.find(role => role.name === "Other Pronouns");
    }
}