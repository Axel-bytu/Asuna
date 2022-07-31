import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
  
let vn = './media/Bienvenido.mp3'
conn.sendFile(m.chat, vn, 'Bienvenido.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bienveni|🥳|🤗|👋/i
handler.command = new RegExp
handler.group = true
export default handler
