import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join ` `
if (!text) return conn.reply(m.chat, `𝒔𝒄𝒓𝒊𝒗𝒊 𝒄𝒊𝒐̀ 𝒄𝒉𝒆 𝒗𝒖𝒐𝒊 𝒄𝒆𝒓𝒄𝒂𝒓𝒆\n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐:\n*${usedPrefix + command} donne bellissime nude*\n`, m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
}).join('\n\n')

try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 10, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.exp = 40
export default handler
