import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ โ ๏ธ ] ๐ข ๐๐จ๐ฆ๐๐ง๐๐ข +18 ๐ฌ๐จ๐ง๐จ ๐๐ข๐ฌ๐๐ญ๐ญ๐ข๐ฏ๐๐ญ๐ข, ๐๐ก๐ข๐๐๐ข ๐๐ ๐ฎ๐ง ๐๐๐ฆ๐ข๐ง ๐๐ข ๐๐ญ๐ญ๐ข๐ฏ๐๐ซ๐ฅ๐ข: #enable nsfw*'
let url = packgirl[Math.floor(Math.random() * packgirl.length)]
conn.sendButton(m.chat, `๐คจ`, author, url, [['no sesso per te']], m)
}
handler.help = ['pack2']
handler.tags = ['internet']
handler.command = /^(pack2)$/i
export default handler

global.packgirl = [
  "https://i.imgur.com/PEzR2XO.jpeg",
  "https://i.imgur.com/wa2QvFb.jpeg",
  "https://i.imgur.com/IQN1j8Q.jpeg",
  "https://i.imgur.com/h9nByzW.jpeg",
  "https://i.imgur.com/LFDEiDv.mp4",
]
