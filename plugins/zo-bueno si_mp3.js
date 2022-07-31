import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊`
  
let vn = './media/bueno si.mp3'
conn.sendFile(m.chat, vn, 'bueno si.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Bueno si|bueno si|bueno sí|Bueno sí/ 
handler.command = new RegExp
handler.group = true
export default handler
