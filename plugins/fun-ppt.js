import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `𝙎𝘼𝙎𝙎𝙊 𝘾𝘼𝙍𝙏𝘼 𝙊 𝙁𝙊𝙍𝘽𝙄𝘾𝙄?\n\n𝙐𝙎𝘼 𝙄 𝙋𝙐𝙇𝙎𝘼𝙉𝙏𝙄 𝙎𝙊𝙏𝙏𝙊 𝙊 𝙄 𝘾𝙊𝙈𝘼𝙉𝘿𝙄:\n${usedPrefix + command} piedra\n${usedPrefix + command} papel\n${usedPrefix + command} tijera\n\nSESSO\n\n${wm}`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, '𝙑𝘼𝙍𝙀 𝘽𝙊𝙏', null, null, [
['𝙎𝘼𝙎𝙎𝙊 🌑', `${usedPrefix + command} piedra`],
['𝘾𝘼𝙍𝙏𝘼 📄', `${usedPrefix + command} papel`],
['𝙁𝙊𝙍𝘽𝙄𝘾𝙄 ✂️', `${usedPrefix + command} tijera`]
], m,)}
  
//  conn.sendHydrated(m.chat, salah, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🤭', `ds`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m,)
                  
//if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 2
 
//m.reply(`*_🔰 Empate!_*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━[𝐏𝐑𝐄𝐆𝐆𝐈𝐎]━━━⬣\n𝐓𝐔 : ┃🧃𝐕𝐀𝐑𝐄 𝐁𝐎𝐓: ${astro}\n┃𝐌𝐎𝐍𝐄𝐓𝐄 : $${[money0].getRandom()} 𝐯𝐚𝐫𝐞 𝐞𝐮𝐫𝐨\n┃𝐕𝐀𝐑𝐄 𝐄𝐔𝐑𝐎: $${money} 𝐯𝐚𝐫𝐞 𝐞𝐮𝐫𝐨\n╰━━━━━━[ _*104*_ ]━━━━━⬣`, wm, null, ig, '𝑰𝑮 𝑽𝑨𝑹𝑬', null, null, [
['𝐋𝐎 𝐒𝐔𝐂𝐂𝐇𝐈𝐎 𝐓𝐔𝐓𝐓𝐎'],
['𝑰𝑵𝑭𝑶 𝑩𝑶𝑻', '/infobot']
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
//global.db.data.users[m.sender].uang += 1000
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 100
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 25
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
//global.db.data.users[m.sender].uang += 125
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 75
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 90
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)    
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 75
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)   
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 240
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)    
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 300
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)     
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 210
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙐𝙨𝙩𝙚𝙙: ${text}\n┃🐱 𝙂𝙖𝙩𝙖𝘽𝙤𝙩: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: $${[money0].getRandom()} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┃💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: $${money} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)   
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

/*
let handler = async (m, { command, text }) => { 
if (!text) throw `error, vuelva a intentar.` 
//let id = text.join(' ')

if (command == 'e1') {
 if (text == 'a') {
 m.reply(`Resultado 1`) }
}
  
  if (command == 'e2') {
 if (text == 'b') {
 m.reply(`Resultado 2`) }
}  
    
    if (command == 'e3') {
 if (text == 'c') {
 m.reply(`Resultado 3`) }
}
}
 
//handler.help = handler.command = ['e1', 'e2', 'e3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['e1', 'e2', 'e3']
handler.tags = ['ejemplo']
handler.command = ['e1', 'e2', 'e3'] //'a', 'b', 'c'

export default  handler */ 
  
