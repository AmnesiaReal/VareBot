import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππ πππΏππ π πΎπΌππΌπ πΏπ ππππππ½π\n\nπππππ πππ ππΌππ ππ πΌ ππππππ½π πππΏππ ππ πΎππΌππππ`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
π·  ππππππ:\n*${v.title}*\n\n
π  ππππ Β« ${v.url} Β»\n\n
β³ ππππππ: ${v.durationH}\n\n
π ππππ ππ πππππππππππππ:\n ${v.durationH}\n\n
π ππππ:\n ${v.view}\n
`.trim()
      case 'channel': return `
β¨ ππππ ππππππ:\n*${v.channelName}*\n\n
π  ππππ Β« ${v.url} Β»\n\n
π₯ ππππππππ ${v.subscriberH}\n\n
π₯ πππππ ππππππ ${v.videoCount}\n
`.trim()
    }
  }).filter(v => v).join('\n===================================\n')
 await m.reply(teks)
 let info = `\n_*paypal.me/realvare grz grz*_`.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, 'πππππππππ', null, null, [
['ππππ πππ', '#buscarmenu'],
['ππππ ππππππππ', '.allmenu'],
['πππποΈ', '/ping']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
export default handler
