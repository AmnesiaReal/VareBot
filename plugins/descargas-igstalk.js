import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `๐๐๐๐๐๐ ๐'๐๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐\n๐๐๐ ๐๐๐๐๐๐๐:\n*${usedPrefix + command} vare.sossap*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`โญโโขเณโขโงใ๐๐๐๐๐๐๐๐๐ใโงโขเณโขโโฎ

๐ฅ ยป  ๐๐๐๐:
ใ ยป  *${name}*

๐ฅ ยป  ๐๐๐๐๐๐๐๐:
ใ ยป  *${username}*

๐ฅ ยป  ๐๐๐๐๐๐๐๐๐:
ใ ยป  *${description}*

๐ฅ ยป  ๐๐๐๐๐๐๐๐:
ใ ยป  *${followersH}* 

๐ฅ ยป  ๐๐๐๐๐๐๐:
ใ ยป *${followingH}* 

๐ฅ ยป  ๐๐๐๐:
ใ ยป  *${postsH}* 

๐ฅ ยป  ๐๐๐๐ ๐๐๐๐๐๐๐:
ใ ยป  *https://instagram.com/${username.replace(/^@/, '')}*

โฐโโขเณโขโง ใ ๐ท ใ โงโขเณโขโโโฏ`.trim()) 
await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐๐๐๐๐๐๐๐', null, null, [
['๐๐๐๐ ๐๐๐๐๐๐๐๐', '#descargasmenu'],
['๐๐๐๐', '.allmenu'],
['๐๐๐๐', '.vare']
], m,)  
  
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
export default handler

