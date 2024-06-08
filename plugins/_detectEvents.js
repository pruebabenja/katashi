// Creditos del codigo a @usxr_angelito //

/* GitHub: https://github.com/karim-off */

/* Bot: https://github.com/Karim-off/xiabot-pro */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
  const groupName = (await conn.groupMetadata(m.chat)).subject;
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `┣ *𝑯𝒀𝑷𝑬𝑹𝑿 𝑫𝑬𝑻𝑬𝑪𝑻𝑶 𝑸𝑼𝑬 𝑺𝑬 𝑨 𝑪𝑨𝑴𝑩𝑰𝑨𝑫𝑶 𝑬𝑳 𝑵𝑰𝑪𝑲 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶* ┫\n\n *${usuario}*\n» 𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘼:\n\n» *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `┣ *𝑯𝒀𝑷𝑬𝑹𝑿 𝑫𝑬𝑻𝑬𝑪𝑻𝑶 𝑸𝑼𝑬 𝑺𝑬 𝑨 𝑪𝑨𝑴𝑩𝑰𝑨𝑫𝑶 𝑳𝑨 𝑰𝑴𝑨𝑮𝑬𝑵 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶* ┫\n\n *${usuario}* \n» 𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙀𝙇 𝙋𝙀𝙍𝙁𝙄𝙇 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `┣ *𝑯𝒀𝑷𝑬𝑹𝑿 𝑫𝑬𝑻𝑬𝑪𝑻𝑶 𝑸𝑼𝑬 𝑺𝑬 𝑨 𝑪𝑨𝑴𝑩𝑰𝑨𝑫𝑶 𝑳𝑨 𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑪𝑰𝑶𝑵 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶* ┫\n\n *${usuario}*\n» 𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `𝘼𝙃𝙊𝙍𝘼 *${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝘼𝘿𝙈𝙄𝙉𝙎' : '𝙏𝙊𝘿𝙊𝙎'}* 𝙋𝙐𝙀𝘿𝙀 𝙀𝘿𝙄𝙏𝘼𝙍 𝙇𝘼 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `┣ *𝑯𝒀𝑷𝑬𝑹𝑿* ┫\n\n» 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎𝙏𝘼 ${m.messageStubParameters[0] == 'on' ? '𝘾𝙀𝙍𝙍𝘼𝘿𝙊' : '𝘼𝘽𝙄𝙀𝙍𝙏𝙊'}\n ${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍' : '𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎'} 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `┣ *𝑯𝒀𝑷𝑬𝑹𝑿 𝑫𝑬𝑻𝑬𝑪𝑻𝑶 𝑵𝑼𝑬𝑽𝑶 𝑨𝑫𝑴𝑰𝑵* ┫\n\n *@${m.messageStubParameters[0].split`@`[0]}*\n *┣𝒀𝑨 𝑻𝑰𝑬𝑵𝑬 𝑳𝑶𝑺 𝑷𝑶𝑫𝑬𝑹𝑬𝑺 𝑫𝑬 𝑨𝑫𝑴𝑰𝑵* \n *┣𝑬𝑱𝑬𝑪𝑼𝑻𝑨𝑫𝑶 𝑷𝑶𝑹:*\n ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `┣ *𝑯𝒀𝑷𝑬𝑹𝑿 𝑫𝑬𝑻𝑬𝑪𝑻𝑶 -1 𝑨𝑫𝑴𝑰𝑵* ┫\n\n *@${m.messageStubParameters[0].split`@`[0]}*\n *┣𝒀𝑨 𝑵𝑶 𝑻𝑰𝑬𝑵𝑬 𝑳𝑶𝑺 𝑷𝑶𝑫𝑬𝑹𝑬𝑺 𝑫𝑬 𝑨𝑫𝑴𝑰𝑵* \n *┣𝑬𝑱𝑬𝑪𝑼𝑻𝑨𝑫𝑶 𝑷𝑶𝑹:*\n ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝘾𝘼𝙈𝘽𝙄𝙊 𝙇𝘼𝙎 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙀𝙎 𝘼 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝙊́* 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
