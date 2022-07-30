import util from 'util'
import path from 'path'

let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/A Bueno master.mp3', '', 'Bueno master', m)

}

handler.help = ['Bueno master']
handler.tags = ['categoria']
handler.command = /^(A Bueno master|Bueno master|Bueno Máster|🫂)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler

