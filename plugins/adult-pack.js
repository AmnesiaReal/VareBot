import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] 𝐢 𝐜𝐨𝐦𝐚𝐧𝐝𝐢 +18 𝐬𝐨𝐧𝐨 𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐢, 𝐜𝐡𝐢𝐞𝐝𝐢 𝐚𝐝 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧 𝐝𝐢 𝐚𝐭𝐭𝐢𝐯𝐚𝐫𝐥𝐢: 
#enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `🤨`, null, url, [['che cercavi?']], m)
}
handler.help = ['pack']
handler.tags = ['internet']
handler.command = /^(pack|pack1)$/i
export default handler

global.pack = [
  "https://i.imgur.com/0TOZGn0.jpeg",
  "https://i.imgur.com/tgBjF2c.jpeg",
  "https://i.imgur.com/z0t4CV7.jpeg",
  "https://i.imgur.com/GNuL8b2.jpeg",
  "https://i.imgur.com/Va70uaY.jpeg",
]
