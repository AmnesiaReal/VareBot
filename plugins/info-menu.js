import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let { money } = global.db.data.users[m.sender]
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

const sections = [
{
title: ` π³π°πΊπ»π¨ π΄π¬π΅πΌ `,
rows: [
{title: " π΄π¬π΅πΌ πͺπΆπ΄π·π³π¬π»πΆ π― οΈ", description: null, rowId: `${usedPrefix}allmenu`},
{title: " π¨πͺπͺπΆπΌπ΅π» π½π¨πΉπ¬ π°οΈ ", description: null, rowId: `${usedPrefix}cuentasgatabot`},
{title: " π·π¨ππ·π¨π³ π§§", description: null, rowId: `${usedPrefix}paypal`},
{title: " π°π΅π­πΆ π©πΆπ» βΉ ", description: null, rowId: `${usedPrefix}estado`},       
{title: " πͺπΉπ¬π¨π»πΆπΉπ¬ π―", description: " π½π¨πΉπ¬ ", rowId: `${usedPrefix}creadora`},        
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)


const listMessage = {
text: `π ππ ${username}`,
footer: `
β­ββ’ΰ³β’β§γ ππππ ππππ γβ§β’ΰ³ β’ββ?

π« Β» accounts
π« Β» grupos
π« Β» donar | paypal
π« Β» listagrupos | grouplist
π« Β» estado | status
π« Β» infobot
π« Β» owner | creatore
π« Β» bot  Β« πππππ ππππππππ Β» 

β°βββ’ ΰ³β’β§ γ π« γ β§β’ΰ³ β’βββ―
${wm}`,
title: null,
buttonText: " ππππππ πππ ", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(infomenu)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
