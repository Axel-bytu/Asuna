import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0 
db.data.users[m.sender].exp += 10
  
let vn = './media/Tal vez.mp3'
conn.sendFile(m.chat, vn, 'Tal vez.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /tal vez/i 
handler.command = new RegExp
export default handler
