import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `šššššš šššĢ šš ššš šššš š'šššššššš\nššš ššššššš:\n*${usedPrefix + command} ragazze minorenni vicino a me*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `šÆ ššššššššš: ${text}`, `š®š¶š¶š®š³š¬ | ${wm}`, link, link, 'šššš ', null, null, [
['šššššš', `/imagen ${text}`],
['šš ššššššššš', `#pinterest ${text}`],
['šššš šššššššš', `.menu`],  
['šŗš¬šŗšŗš¶ šŖš¶šµ š½šØš¹š¬', '.vare'],
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
