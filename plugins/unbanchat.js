// import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    let name = await conn.getName(m.chat)
    db.data.chats[m.chat].isBanned = false
    m.reply(`*${conn.getName(conn.user.jid)}* aktif di chat ${name}`)
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.admin = true
handler.group = true

export default handler