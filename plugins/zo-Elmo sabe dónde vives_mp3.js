import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0 
db.data.users[m.sender].exp += 10
  
let vn = './media/Elmo sabe donde vives.mp3'
conn.sendFile(m.chat, vn, 'Elmo sabe donde vives.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Elmo sabe donde vives|Elmo sabe dónde vives/i 
handler.command = new RegExp
export default handler
