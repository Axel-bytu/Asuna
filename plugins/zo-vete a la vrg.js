import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0 
db.data.users[m.sender].exp += 10
  
let vn = './media/vete a la verga.mp3'
conn.sendFile(m.chat, vn, 'vete a la verga.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /vetealavrg|vete a la vrg|vete a la verga/i
handler.command = new RegExp
handler.fail = null
export default handler
