import fs from 'fs'
function handler(m, { conn }) {
let pp = './media/menus/paypal.jpg'
let text = `
๐๐ ๐๐๐๐๐๐๐๐, ๐๐๐ ๐๐ ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐๐? ๐ ๐๐๐๐๐๐ ๐ ๐ ๐๐๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐

โญโโโขเณโงใ ๐๐๐๐๐๐ ใโงเณโขโโโฎ

        ๏ธ *paypal.me/realvare*

โฐโโโขเณโขโง ใ ใ ใ โงโขเณโขโโโฏ
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐๐๐ ๐๐๐ | ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐',
body: '๐๐๐๐ ๐๐๐๐',         
sourceUrl: `https://youtu.be/dQw4w9WgXcQ`}}})
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
export default handler