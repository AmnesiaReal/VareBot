import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `\nšššššš šš šššš ššš šššššš š šš šššššš ššš ššššš\nššš ššššššš: \n*${usedPrefix + command} wtf moment in football 2016`
try {
if (command == 'play.1') {
conn.reply(m.chat, `ššššššš ššš šššššššš, šš šš ššššš ššššš: paypal.me/realvare šššššš ššššššššššššš šš ššššššššš šš šššš šššš`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'šššš ššš | šššš',
body: 'šš ššš ššš ššššššš',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: ``}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `ššššššš ššš šššššššš, šš šš ššššš ššššš: paypal.me/realvare šššššš ššššššššššššš šš ššššššššš šš šššš šššš`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'šššš ššš | šššš',
body: 'šš ššš ššš ššššššš',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: ``}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg} ššššššš`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
