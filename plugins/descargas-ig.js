import fs from 'fs'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `ššššš šš šššš ššš ššššš šš ššššššššš ššš šššššššššš\nššš ššššššš:\n*${usedPrefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=*`
const results = await instagramdl(args[0])
.catch(async _ => await instagramdlv2(args[0]))
.catch(async _ => await instagramdlv3(args[0]))
.catch(async _ => await instagramdlv4(args[0]))
for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `šÆ šššš: ${url}`, m)
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ššššššššš', null, null, [
['šššš šššššššš', '#descargasmenu'],
['šššš', '.allmenu'],
['šššš', '.vare']
], m,)
  
} 
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i 
handler.exp = 70
export default handler
