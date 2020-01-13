const Discord = require('discord.js');
const bot = new Discord.Client({
  partials: ['MESSAGE']
});
const fs = require ('fs');
const ms = require ('ms');
bot.commands = new Discord.Collection;

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
 http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2000);

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
});

bot.on("raw", event => {
  const eventName = event.t;
  if(eventName === "MESSAGE_REACTION_ADD"){
    if(event.d.message_id === "658146708512833556" || event.d.message_id === "666135356327854103"){
      var reactionChannel = bot.channels.find(c => c.id === event.d.channel_id)
      reactionChannel.fetchMessage(event.d.message_id)
      .then(m => {
        var reaction = m.reactions.get(event.d.emoji.name + ':' + event.d.emoji.id);
        var user = bot.users.get(event.d.user_id);
        bot.emit('reactionAdd', reaction, user);
      }) .catch(err => console.log(err));
    }
  }
})

bot.on("raw", event => {
  const eventName = event.t;
  if(eventName === "MESSAGE_REACTION_REMOVE"){
    if(event.d.message_id === "658146708512833556" || event.d.message_id === "666135356327854103"){
      var reactionChannel = bot.channels.find(c => c.id === event.d.channel_id)
      reactionChannel.fetchMessage(event.d.message_id)
      .then(m => {
        var reaction = m.reactions.get(event.d.emoji.name + ':' + event.d.emoji.id);
        var user = bot.users.get(event.d.user_id);
        bot.emit('reactionRemove', reaction, user);
      }) .catch(err => console.log(err));
    }
  }
})


bot.on("raw", e => {
  if(e.t === "MESSAGE_REACTION_ADD" || e.t === "ESSAGE_REACTION_REMOVE") {
    //console.log(e);
  }
});

bot.on('reactionAdd', (reaction, user) => {
  var emoji = reaction.emoji.name;
  var message = reaction.message;
  
  if(message.id === "658146708512833556" || message.id === "666135356327854103") {
    var member = reaction.message.guild.members.get(user.id);
    let t4 = message.guild.members.find(m => m.id === "239823359502843904");

    if(emoji === "AnnandaleHS"){
      try {
        member.addRole("657365387368857643", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Annandale High School role.")
        console.log("+annandale");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "CentrevilleHS") {
      try {
        member.addRole("657365388207849493", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Centreville High School role.")
        console.log("+centreville");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "ChantillyHS") {
      try {
        member.addRole("657365388538937385", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Chantilly High School role.")
        console.log("+chantilly");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "EdisonHS") {
      try {
        member.addRole("657365389302562826", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Edison High School role.")
        console.log("+edison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FairfaxHS") {
      try {
        member.addRole("657365389889765397", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Fairfax High School role.")
        console.log("+fairfax");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FallsChurchHS") {
      try {
        member.addRole("657365390472511508", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Falls Church High School role.")
        console.log("+fallschurch");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "HerndonHS") {
      try {
        member.addRole("657365391206776863", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Hrendon High School role.")
        console.log("+herndon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LangleyHS") {
      try {
        member.addRole("657365391521349633", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Langley High School role.")
        console.log("+langley");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LeeHS") {
      try {
        member.addRole("657365392263479317", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Lee High School role.")
        console.log("+lee");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JamesMadisonHS") {
      try {
        member.addRole("657365393001938944", "SELF_SERVICE_ROLE");
        member.send("You have been added to the James Madison High School role.")
        console.log("+jamesmadison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JusticeHS") {
      try {
        member.addRole("657395263828262932", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Justice High School role.")
        console.log("+justice");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MarshallHS") {
      try {
        member.addRole("657365393299603458", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Marshall High School role.")
        console.log("+marshall");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "McLeanHS") {
      try {
        member.addRole("657365394096652339", "SELF_SERVICE_ROLE");
        member.send("You have been added to the McLean High School role.")
        console.log("+mclean");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MountVernonHS") {
      try {
        member.addRole("657365394499043329", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Mount Vernon High School role.")
        console.log("+mountvernon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "OaktonHS") {
      try {
        member.addRole("657395261693493279", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Oakton High School role.")
        console.log("+oakton");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthCountyHS") {
      try {
        member.addRole("657395262762909728", "SELF_SERVICE_ROLE");
        member.send("You have been added to the South County High School role.")
        console.log("+southcounty");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthLakesHS") {
      try {
        member.addRole("657395263127814145", "SELF_SERVICE_ROLE");
        member.send("You have been added to the South Lakes High School role.")
        console.log("+southlakes");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "TJHSST") {
      try {
        member.addRole("657395264478380042", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Thomas Jefferson High School for Sci. and Tech. role.")
        console.log("+TJHSST");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestfieldHS") {
      try {
        member.addRole("657395264864256001", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Westfield High School role.")
        console.log("+westfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestPotomacHS") {
      try {
        member.addRole("657395265644396585", "SELF_SERVICE_ROLE");
        member.send("You have been added to the West Potomac High School role.")
        console.log("+westpotomac");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestSpringfieldHS") {
      try {
        member.addRole("657395266575532066", "SELF_SERVICE_ROLE");
        member.send("You have been added to the West Springfield High School role.")
        console.log("+westspringfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WoodsonHS") {
      try {
        member.addRole("657395267653599233", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Woodson High School role.")
        console.log("+woodson");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MiddleSchool") {
      try {
        member.addRole("658087067821015063", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Middle School role.")
        console.log("+middleschool");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "one") {
      try {
        member.addRole("657401298097799190", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Freshman role.")
        console.log("+freshman");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "two") {
      try {
        member.addRole("657401299679182861", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Sophomore role.")
        console.log("+sophomore");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "three") {
      try {
        member.addRole("657401302480846868", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Junior role.")
        console.log("+junior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "four") {
      try {
        member.addRole("657401304917868564", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Senior role.")
        console.log("+senior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    }
  }
});



bot.on('reactionRemove', (reaction, user) => {
  var emoji = reaction.emoji.name;
  var message = reaction.message;

  if(message.id === "658146708512833556" || message.id === "666135356327854103") {
    var member = reaction.message.guild.members.get(user.id);
    let t4 = message.guild.members.find(m => m.id === "239823359502843904");

    if(emoji === "AnnandaleHS"){
      try {
        member.removeRole("657365387368857643", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Annandale High School role.")
        console.log("-annandale");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "CentrevilleHS") {
      try {
        member.removeRole("657365388207849493", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Centreville High School role.")
        console.log("-centreville");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "ChantillyHS") {
      try {
        member.removeRole("657365388538937385", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Chantilly High School role.")
        console.log("-chantilly");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "EdisonHS") {
      try {
        member.removeRole("657365389302562826", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Edison High School role.")
        console.log("-edison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FairfaxHS") {
      try {
        member.removeRole("657365389889765397", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Fairfax High School role.")
        console.log("-fairfax");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FallsChurchHS") {
      try {
        member.removeRole("657365390472511508", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Falls Church High School role.")
        console.log("-fallschurch");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "HerndonHS") {
      try {
        member.removeRole("657365391206776863", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Hrendon High School role.")
        console.log("-herndon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LangleyHS") {
      try {
        member.removeRole("657365391521349633", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Langley High School role.")
        console.log("-langley");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LeeHS") {
      try {
        member.removeRole("657365392263479317", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Lee High School role.")
        console.log("-lee");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JamesMadisonHS") {
      try {
        member.removeRole("657365393001938944", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the James Madison High School role.")
        console.log("-jamesmadison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JusticeHS") {
      try {
        member.removeRole("657395263828262932", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Justice High School role.")
        console.log("-justice");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MarshallHS") {
      try {
        member.removeRole("657365393299603458", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Marshall High School role.")
        console.log("-marshall");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "McLeanHS") {
      try {
        member.removeRole("657365394096652339", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the McLean High School role.")
        console.log("-mclean");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MountVernonHS") {
      try {
        member.removeRole("657365394499043329", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Mount Vernon High School role.")
        console.log("-mountvernon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "OaktonHS") {
      try {
        member.removeRole("657395261693493279", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Oakton High School role.")
        console.log("-oakton");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthCountyHS") {
      try {
        member.removeRole("657395262762909728", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the South County High School role.")
        console.log("-southcounty");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthLakesHS") {
      try {
        member.removeRole("657395263127814145", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the South Lakes High School role.")
        console.log("-southlakes");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "TJHSST") {
      try {
        member.removeRole("657395264478380042", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Thomas Jefferson High School for Sci. and Tech. role.")
        console.log("-TJHSST");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestfieldHS") {
      try {
        member.removeRole("657395264864256001", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Westfield High School role.")
        console.log("-westfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestPotomacHS") {
      try {
        member.removeRole("657395265644396585", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the West Potomac High School role.")
        console.log("-westpotomac");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestSpringfieldHS") {
      try {
        member.removeRole("657395266575532066", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the West Springfield High School role.")
        console.log("-westspringfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WoodsonHS") {
      try {
        member.removeRole("657395267653599233", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Woodson High School role.")
        console.log("-woodson");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MiddleSchool") {
      try {
        member.removeRole("658087067821015063", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Middle School role.")
        console.log("-middleschool");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "one") {
      try {
        member.removeRole("657401298097799190", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Freshman role.")
        console.log("-freshman");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "two") {
      try {
        member.removeRole("657401299679182861", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Sophomore role.")
        console.log("-sophomore");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "three") {
      try {
        member.removeRole("657401302480846868", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Junior role.")
        console.log("-junior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "four") {
      try {
        member.removeRole("657401304917868564", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Senior role.")
        console.log("-senior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    };
  }
});


bot.login(process.env.TOKEN);
