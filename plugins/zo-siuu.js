import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊`
  
let vn = './media/siu.mp3'
conn.sendFile(m.chat, vn, 'siu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU/i
handler.command = new RegExp
handler.fail = null
handler.group = true
export default handler
