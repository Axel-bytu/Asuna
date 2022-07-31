import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊`
  
let vn = './media/admin-calzones.mp3'
conn.sendFile(m.chat, vn, 'admin-calzones.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /TENGO LOS CALZONES|Tengo los calzones|tengo los calzones/i 
handler.command = new RegExp
handler.group = true
export default handler
