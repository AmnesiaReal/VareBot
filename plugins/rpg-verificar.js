import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[βππππβ] π·π΄π! ππ° π΄πππ°π ππ΄πΆπΈππππ°π³πΎ*\n\n*πππΈπ΄ππ΄π πππΈππ°π ππ ππ΄πΆπΈππππΎ? πππ° π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix}unreg <numero de serie>*\n\n*ππΈ π½πΎ ππ΄π²ππ΄ππ³π°π ππ π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄ πΏππ΄π³π΄π πππ°π π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `ββ ββββββββββββ β β
βγ πππππππππππ γ
β£β ββββββββββββ β β
β *π½πΎπΌπ±ππ΄:* ${name}
β *π΄π³π°π³:* ${age} anni
β *π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄:* 
β ${sn}
ββ ββββββββββββ β β`
let author = global.author
conn.sendButton(m.chat, caption, `Β‘ππ π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄ ππ΄ ππ΄πππΈππ° πΏπΎπ ππΈ π³π΄ππ΄π°π π±πΎπππ°π ππ ππ΄πΆπΈππππΎ π΄π½ π΄π» π±πΎπ!\n${author}`, [['Β‘Β‘π°π·πΎππ° ππΎπ ππ½ ππ΄ππΈπ΅πΈπ²π°π³πΎ/π°!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar)$/i
export default handler
