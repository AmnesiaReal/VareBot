import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}ššššš šš šššš ššš ššššš šš šššššššš ššš šššššššššš\nššš ššššššš:\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi*\n`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `šÆ šššš: ${url}`, m)  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ššššššššš', null, null, [
['šššš šššššššš', '#descargasmenu'],
['šššš', '.allmenu'],
['šššš', '.vare']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.exp = 35
export default handler
