import fs from 'fs'
function handler(m, { conn }) {
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤* 
*Wa.me/593962681710 (CREADOR)*
*https://instagram.com/asunabot*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝘼𝙨𝙪𝙣𝙖𝘽𝙤𝙩 | 𝘼𝙨𝙪𝙣𝙖 𝙔 𝙆𝙞𝙧𝙞𝙩𝙤',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐚 | 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/Asuna.jpg"),
sourceUrl: `https://wa.me/593962681710`}}})
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
