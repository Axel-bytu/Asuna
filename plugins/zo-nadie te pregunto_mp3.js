import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊`
  
let vn = './media/nadie te pregunto.mp3'
conn.sendFile(m.chat, vn, 'nadie te pregunto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /nadie te pregunto|Nadie te pregunto|Nadie te preguntó|nadie te preguntó/ 
handler.command = new RegExp
handler.group = true
export default handler
