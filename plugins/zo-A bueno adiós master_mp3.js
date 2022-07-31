import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
db.data.users[m.sender].exp += 10
  
let vn = './media/A bueno adios master.mp3'
conn.sendFile(m.chat, vn, 'A bueno adios master.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /A Bueno master|Bueno master|Bueno Máster|🫂/i 
handler.command = new RegExp
handler.group = true
export default handler 
