import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw ` \nššš ššššššš: \n*${usedPrefix + command} wtf moment 2016` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `šššš ššš, ššššš ššššššš`.trim(), m)
  
  conn.sendHydrated(m.chat, `ššššššššš šš: ${text}`, `ššššššššš | ${wm}`, null, md, 'šššš ššš', null, null, [
['šš šššš š`ššššš', `/pinterest ${text}`],
['šš šššššš', `#image ${text}`],
['šššš šššššššš', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
