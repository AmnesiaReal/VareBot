let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] USO APROPIADO*\n\n*┯┷*\n*┠≽ ${usedPrefix}quitaradmin @tag*\n*┠≽ ${usedPrefix}quitaradmin -> responder a un mensaje*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠︎️ ]* 𝒆𝒉𝒎, 𝒏𝒖𝒎𝒆𝒓𝒐 𝒓𝒐𝒕𝒕𝒐, 𝒇𝒂𝒊 𝒂 𝒎𝒂𝒏𝒐 𝒐 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒅 𝒖𝒏 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊𝒐 𝒅𝒆𝒍𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒅𝒆𝒔𝒊𝒅𝒆𝒓𝒂𝒕𝒂 𝒄𝒐𝒏 𝒊𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐`, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, `Sto bocchinaro ora è di nuovo un sotto evoluto`, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v)
handler.tags = ['group']
handler.command = /^(demote|quitarpoder|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler