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

const AHS = "658094960180199425";
const CEHS = "658094960398041137";
const CHHS = "658094960977117244";
const EHS = "658094964408057866";
const FHS = "658094962281283594";
const FCHS = "658095594052780072";
const HHS = "658094964063993863";
const LAHS = "658094960662544394";
const LEHS = "658094965267759154";
const JMHS = "658094960473538591";
const JHS = "658095747765501984";
const MHS = "658094965238530048";
const MLHS = "658094960486383647";
const MVHS = "658094960951689226";
const OHS = "658094961325113374";
const SCHS = "658094964156399626";
const SLHS = "658094960809213962";
const TJHSST = "658101680293937162";
const WHS = "658094964022050847";
const WPHS = "658094960742236171";
const WSHS = "658094962100928553";
const WOHS = "658094961094557699";
const MS = "658107457759084564";
const one = "1️⃣";
const two = "2️⃣";
const three = "3️⃣";
const four = "4️⃣";
var letters = [AHS, CEHS, CHHS, EHS, FHS, FCHS, HHS, LAHS, LEHS, JMHS, JHS, MHS, MLHS, MVHS, OHS, SCHS, SLHS, TJHSST, WHS, WPHS, WSHS, WOHS, MS, one, two, three, four];
var letlength = letters.length-1;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
})

bot.on('messageReactionAdd', (reaction, user) => {
  emoji = reaction.emoji.name;
  message = reaction.message;

  if(message.id === "658146708512833556" || message.id === "658146775227695106") {
    member = reaction.message.guild.members.get(user.id);
    let t4 = message.guild.members.find(m => m.id === "239823359502843904");

    if(emoji === "AnnandaleHS"){
      try {
        member.roles.add("657365387368857643", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Annandale High School role.")
        console.log("+annandale");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "CentrevilleHS") {
      try {
        member.roles.add("657365388207849493", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Centreville High School role.")
        console.log("+centreville");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "ChantillyHS") {
      try {
        member.roles.add("657365388538937385", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Chantilly High School role.")
        console.log("+chantilly");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "EdisonHS") {
      try {
        member.roles.add("657365389302562826", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Edison High School role.")
        console.log("+edison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FairfaxHS") {
      try {
        member.roles.add("657365389889765397", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Fairfax High School role.")
        console.log("+fairfax");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FallsChurchHS") {
      try {
        member.roles.add("657365390472511508", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Falls Church High School role.")
        console.log("+fallschurch");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "HerndonHS") {
      try {
        member.roles.add("657365391206776863", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Hrendon High School role.")
        console.log("+herndon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LangleyHS") {
      try {
        member.roles.add("657365391521349633", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Langley High School role.")
        console.log("+langley");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LeeHS") {
      try {
        member.roles.add("657365392263479317", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Lee High School role.")
        console.log("+lee");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JamesMadisonHS") {
      try {
        member.roles.add("657365393001938944", "SELF_SERVICE_ROLE");
        member.send("You have been added to the James Madison High School role.")
        console.log("+jamesmadison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JusticeHS") {
      try {
        member.roles.add("657395263828262932", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Justice High School role.")
        console.log("+justice");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MarshallHS") {
      try {
        member.roles.add("657365393299603458", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Marshall High School role.")
        console.log("+marshall");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "McLeanHS") {
      try {
        member.roles.add("657365394096652339", "SELF_SERVICE_ROLE");
        member.send("You have been added to the McLean High School role.")
        console.log("+mclean");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MountVernonHS") {
      try {
        member.roles.add("657365394499043329", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Mount Vernon High School role.")
        console.log("+mountvernon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "OaktonHS") {
      try {
        member.roles.add("657395261693493279", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Oakton High School role.")
        console.log("+oakton");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthCountyHS") {
      try {
        member.roles.add("657395262762909728", "SELF_SERVICE_ROLE");
        member.send("You have been added to the South County High School role.")
        console.log("+southcounty");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthLakesHS") {
      try {
        member.roles.add("657395263127814145", "SELF_SERVICE_ROLE");
        member.send("You have been added to the South Lakes High School role.")
        console.log("+southlakes");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "TJHSST") {
      try {
        member.roles.add("657395264478380042", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Thomas Jefferson High School for Sci. and Tech. role.")
        console.log("+TJHSST");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestfieldHS") {
      try {
        member.roles.add("657395264864256001", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Westfield High School role.")
        console.log("+westfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestPotomacHS") {
      try {
        member.roles.add("657395265644396585", "SELF_SERVICE_ROLE");
        member.send("You have been added to the West Potomac High School role.")
        console.log("+westpotomac");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestSpringfieldHS") {
      try {
        member.roles.add("657395266575532066", "SELF_SERVICE_ROLE");
        member.send("You have been added to the West Springfield High School role.")
        console.log("+westspringfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WoodsonHS") {
      try {
        member.roles.add("657395267653599233", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Woodson High School role.")
        console.log("+woodson");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MiddleSchool") {
      try {
        member.roles.add("658087067821015063", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Middle School role.")
        console.log("+middleschool");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "1️⃣") {
      try {
        member.roles.add("657401298097799190", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Freshman role.")
        console.log("+freshman");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "2️⃣") {
      try {
        member.roles.add("657401299679182861", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Sophomore role.")
        console.log("+sophomore");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "3️⃣") {
      try {
        member.roles.add("657401302480846868", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Junior role.")
        console.log("+junior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "4️⃣") {
      try {
        member.roles.add("657401304917868564", "SELF_SERVICE_ROLE");
        member.send("You have been added to the Senior role.")
        console.log("+senior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    }
  }
});



bot.on('messageReactionRemove', (reaction, user) => {
  emoji = reaction.emoji.name;
  message = reaction.message;

  if(message.id === "658146708512833556" || message.id === "658146775227695106") {
    member = reaction.message.guild.members.get(user.id);
    let t4 = message.guild.members.find(m => m.id === "239823359502843904");

    if(emoji === "AnnandaleHS"){
      try {
        member.roles.remove("657365387368857643", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Annandale High School role.")
        console.log("-annandale");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "CentrevilleHS") {
      try {
        member.roles.remove("657365388207849493", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Centreville High School role.")
        console.log("-centreville");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "ChantillyHS") {
      try {
        member.roles.remove("657365388538937385", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Chantilly High School role.")
        console.log("-chantilly");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "EdisonHS") {
      try {
        member.roles.remove("657365389302562826", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Edison High School role.")
        console.log("-edison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FairfaxHS") {
      try {
        member.roles.remove("657365389889765397", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Fairfax High School role.")
        console.log("-fairfax");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "FallsChurchHS") {
      try {
        member.roles.remove("657365390472511508", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Falls Church High School role.")
        console.log("-fallschurch");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "HerndonHS") {
      try {
        member.roles.remove("657365391206776863", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Hrendon High School role.")
        console.log("-herndon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LangleyHS") {
      try {
        member.roles.remove("657365391521349633", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Langley High School role.")
        console.log("-langley");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "LeeHS") {
      try {
        member.roles.remove("657365392263479317", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Lee High School role.")
        console.log("-lee");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JamesMadisonHS") {
      try {
        member.roles.remove("657365393001938944", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the James Madison High School role.")
        console.log("-jamesmadison");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "JusticeHS") {
      try {
        member.roles.remove("657395263828262932", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Justice High School role.")
        console.log("-justice");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MarshallHS") {
      try {
        member.roles.remove("657365393299603458", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Marshall High School role.")
        console.log("-marshall");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "McLeanHS") {
      try {
        member.roles.remove("657365394096652339", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the McLean High School role.")
        console.log("-mclean");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MountVernonHS") {
      try {
        member.roles.remove("657365394499043329", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Mount Vernon High School role.")
        console.log("-mountvernon");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "OaktonHS") {
      try {
        member.roles.remove("657395261693493279", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Oakton High School role.")
        console.log("-oakton");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthCountyHS") {
      try {
        member.roles.remove("657395262762909728", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the South County High School role.")
        console.log("-southcounty");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "SouthLakesHS") {
      try {
        member.roles.remove("657395263127814145", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the South Lakes High School role.")
        console.log("-southlakes");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "TJHSST") {
      try {
        member.roles.remove("657395264478380042", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Thomas Jefferson High School for Sci. and Tech. role.")
        console.log("-TJHSST");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestfieldHS") {
      try {
        member.roles.remove("657395264864256001", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Westfield High School role.")
        console.log("-westfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestPotomacHS") {
      try {
        member.roles.remove("657395265644396585", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the West Potomac High School role.")
        console.log("-westpotomac");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WestSpringfieldHS") {
      try {
        member.roles.remove("657395266575532066", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the West Springfield High School role.")
        console.log("-westspringfield");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "WoodsonHS") {
      try {
        member.roles.remove("657395267653599233", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Woodson High School role.")
        console.log("-woodson");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "MiddleSchool") {
      try {
        member.roles.remove("658087067821015063", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Middle School role.")
        console.log("-middleschool");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "1️⃣") {
      try {
        member.roles.remove("657401298097799190", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Freshman role.")
        console.log("-freshman");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "2️⃣") {
      try {
        member.roles.remove("657401299679182861", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Sophomore role.")
        console.log("-sophomore");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "3️⃣") {
      try {
        member.roles.remove("657401302480846868", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Junior role.")
        console.log("-junior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    } else if (emoji === "4️⃣") {
      try {
        member.roles.remove("657401304917868564", "SELF_SERVICE_ROLE");
        member.send("You have been removed from the Senior role.")
        console.log("-senior");
      } catch (err) {
        t4.send(`**__SELF SERVICE ROLE ERROR__**\n\n**Guild:** ${message.guild.name}\n**Channel:** <#${message.channel.id}>\n**Emoji** ${emoji}\n**Error:** ${err.toString()}`);
      }
    };
  }
});


bot.login(process.env.TOKEN);