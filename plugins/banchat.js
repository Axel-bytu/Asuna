// import db from '../lib/database.js'

let handler = async (m, { participants, conn }) => {
    let name = await conn.getName(m.chat)
    db.data.chats[m.chat].isBanned = true
    m.reply(`*${conn.getName(conn.user.jid)}* tidak aktif di chat ${name}`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i

handler.admin = true
handler.group = true

export default handler