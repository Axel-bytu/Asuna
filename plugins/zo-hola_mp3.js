import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0 
db.data.users[m.sender].exp += 10
  
let vn = './media/Hola.mp3'
conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(hola|ola|Hola🤖|ola🤖)$/i
handler.fail = null
export default handler
