import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ โ ๏ธ ] ๐ข ๐๐จ๐ฆ๐๐ง๐๐ข +18 ๐ฌ๐จ๐ง๐จ ๐๐ข๐ฌ๐๐ญ๐ญ๐ข๐ฏ๐๐ญ๐ข, ๐๐ก๐ข๐๐๐ข ๐๐ ๐ฎ๐ง ๐๐๐ฆ๐ข๐ง ๐๐ข ๐๐ญ๐ญ๐ข๐ฏ๐๐ซ๐ฅ๐ข: 
#enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `๐คจ`, null, url, [['che cercavi?']], m)
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
